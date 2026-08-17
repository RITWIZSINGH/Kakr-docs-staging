/**
 * Shared status-feed logic for the in-docs panel and the standalone /status page.
 *
 * Both read the Statuspage v2 API, so keeping the fetch, the polling, and the
 * status→tone mapping in one place stops the two surfaces from drifting apart.
 *
 * Everything here is browser-only (guarded by useEffect) and depends on nothing
 * from Docusaurus except the configured base URL, so lifting this whole folder
 * into a separate project later is a copy-paste.
 */
import {useCallback, useEffect, useRef, useState} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export const DEFAULT_STATUS_URL = 'https://kakrlabs1.statuspage.io';

/** Statuspage overall indicators → our tone tokens. */
export const INDICATOR_TONE = {
  none: 'ok',
  minor: 'warn',
  major: 'danger',
  critical: 'danger',
  maintenance: 'info',
};

/** Statuspage component statuses → label + tone. */
export const COMPONENT_STATE = {
  operational: {label: 'Operational', tone: 'ok'},
  degraded_performance: {label: 'Degraded', tone: 'warn'},
  partial_outage: {label: 'Partial outage', tone: 'warn'},
  major_outage: {label: 'Major outage', tone: 'danger'},
  under_maintenance: {label: 'Maintenance', tone: 'info'},
};

export function useStatusBaseUrl() {
  const {siteConfig} = useDocusaurusContext();
  return siteConfig.customFields?.statusPageUrl ?? DEFAULT_STATUS_URL;
}

/**
 * Fetch `/api/v2/summary.json`, optionally polling.
 *
 * @param {object}  options
 * @param {number}  options.pollMs   Re-fetch interval. 0 disables polling.
 * @param {boolean} options.withHistory  Also fetch resolved incidents.
 */
export function useStatus({pollMs = 0, withHistory = false} = {}) {
  const baseUrl = useStatusBaseUrl();
  const [state, setState] = useState({phase: 'loading', data: null, history: null});
  const [fetchedAt, setFetchedAt] = useState(null);
  const abortRef = useRef(null);

  const load = useCallback(() => {
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    const jobs = [
      fetch(`${baseUrl}/api/v2/summary.json`, {signal: controller.signal}).then((r) => {
        if (!r.ok) throw new Error(`summary ${r.status}`);
        return r.json();
      }),
    ];

    if (withHistory) {
      jobs.push(
        fetch(`${baseUrl}/api/v2/incidents.json`, {signal: controller.signal})
          .then((r) => (r.ok ? r.json() : null))
          // History is a nice-to-have; never fail the page over it.
          .catch(() => null),
      );
    }

    Promise.all(jobs)
      .then(([summary, incidents]) => {
        setState({
          phase: 'ready',
          data: summary,
          history: incidents?.incidents ?? null,
        });
        setFetchedAt(new Date());
      })
      .catch((error) => {
        if (error.name === 'AbortError') return;
        setState({phase: 'error', data: null, history: null});
      });
  }, [baseUrl, withHistory]);

  useEffect(() => {
    load();
    if (!pollMs) {
      return () => abortRef.current?.abort();
    }
    const timer = setInterval(load, pollMs);
    return () => {
      clearInterval(timer);
      abortRef.current?.abort();
    };
  }, [load, pollMs]);

  return {...state, baseUrl, fetchedAt, reload: load};
}

/**
 * Split the flat component list into ungrouped entries and groups with children,
 * preserving the order configured on the status page.
 */
export function groupComponents(components = []) {
  const byId = new Map(components.map((c) => [c.id, c]));
  const groups = components.filter((c) => c.group);
  const grouped = new Set(groups.flatMap((g) => g.components ?? []));

  const standalone = components.filter((c) => !c.group && !grouped.has(c.id));

  return {
    standalone,
    groups: groups.map((group) => ({
      ...group,
      children: (group.components ?? []).map((id) => byId.get(id)).filter(Boolean),
    })),
  };
}
