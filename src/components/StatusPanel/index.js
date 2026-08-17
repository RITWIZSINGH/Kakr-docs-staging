/**
 * Live platform status, read from the Statuspage v2 API at request time.
 *
 * Deliberately not baked into the build: hardcoding "All systems operational"
 * into static HTML means the docs keep claiming it during an outage. This reads
 * the same feed the status page itself renders from, so it is never staler than
 * the source.
 *
 * The API sends `access-control-allow-origin: *`, so the browser can call it
 * directly — no proxy or server route needed. Its cache-control is max-age=10.
 *
 * Base URL comes from `statusPageUrl` in docusaurus.config.js customFields, so
 * pointing this at a self-hosted status page later is a one-line change as long
 * as the replacement serves the same `/api/v2/summary.json` shape.
 */
import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

const DEFAULT_STATUS_URL = 'https://kakrlabs1.statuspage.io';

/** Statuspage overall indicators → our tone tokens. */
const INDICATOR_TONE = {
  none: 'ok',
  minor: 'warn',
  major: 'danger',
  critical: 'danger',
  maintenance: 'info',
};

/** Statuspage component statuses → label + tone. */
const COMPONENT_STATE = {
  operational: {label: 'Operational', tone: 'ok'},
  degraded_performance: {label: 'Degraded', tone: 'warn'},
  partial_outage: {label: 'Partial outage', tone: 'warn'},
  major_outage: {label: 'Major outage', tone: 'danger'},
  under_maintenance: {label: 'Maintenance', tone: 'info'},
};

function useStatusSummary(baseUrl) {
  const [state, setState] = useState({phase: 'loading', data: null});

  useEffect(() => {
    const controller = new AbortController();

    fetch(`${baseUrl}/api/v2/summary.json`, {signal: controller.signal})
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Status API returned ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setState({phase: 'ready', data}))
      .catch((error) => {
        if (error.name === 'AbortError') {
          return;
        }
        setState({phase: 'error', data: null});
      });

    return () => controller.abort();
  }, [baseUrl]);

  return state;
}

/** Compact one-line badge. Use at the top of a page. */
export function StatusBadge() {
  const {siteConfig} = useDocusaurusContext();
  const baseUrl = siteConfig.customFields?.statusPageUrl ?? DEFAULT_STATUS_URL;
  const {phase, data} = useStatusSummary(baseUrl);

  const tone = phase === 'ready' ? INDICATOR_TONE[data.status.indicator] ?? 'info' : 'idle';
  const text =
    phase === 'loading'
      ? 'Checking platform status…'
      : phase === 'error'
        ? 'Could not reach the status API'
        : data.status.description;

  return (
    <a
      className={clsx(styles.badge, styles[`tone_${tone}`])}
      href={baseUrl}
      target="_blank"
      rel="noreferrer noopener">
      <span className={styles.dot} aria-hidden="true" />
      <span>{text}</span>
      <span className={styles.badgeLink} aria-hidden="true">
        ↗
      </span>
    </a>
  );
}

/** Full component breakdown plus any open incidents. */
export default function StatusPanel() {
  const {siteConfig} = useDocusaurusContext();
  const baseUrl = siteConfig.customFields?.statusPageUrl ?? DEFAULT_STATUS_URL;
  const {phase, data} = useStatusSummary(baseUrl);

  if (phase === 'loading') {
    return <p className={styles.muted}>Loading live status…</p>;
  }

  if (phase === 'error') {
    return (
      <p className={styles.muted}>
        Could not reach the status API. Check{' '}
        <a href={baseUrl} target="_blank" rel="noreferrer noopener">
          the status page
        </a>{' '}
        directly.
      </p>
    );
  }

  // Groups are containers for other components; their own row adds nothing here.
  const components = data.components.filter((c) => !c.group);
  const incidents = data.incidents ?? [];
  const maintenances = data.scheduled_maintenances ?? [];

  return (
    <div className={styles.panel}>
      <StatusBadge />

      {incidents.length > 0 && (
        <div className={styles.incidents}>
          <p className={styles.sectionLabel}>Open incidents</p>
          {incidents.map((incident) => (
            <a
              key={incident.id}
              className={styles.incident}
              href={incident.shortlink}
              target="_blank"
              rel="noreferrer noopener">
              <strong>{incident.name}</strong>
              <span className={styles.muted}>
                {incident.status} · impact {incident.impact}
              </span>
            </a>
          ))}
        </div>
      )}

      {maintenances.length > 0 && (
        <div className={styles.incidents}>
          <p className={styles.sectionLabel}>Scheduled maintenance</p>
          {maintenances.map((m) => (
            <a
              key={m.id}
              className={styles.incident}
              href={m.shortlink}
              target="_blank"
              rel="noreferrer noopener">
              <strong>{m.name}</strong>
              <span className={styles.muted}>{m.status}</span>
            </a>
          ))}
        </div>
      )}

      <p className={styles.sectionLabel}>Components</p>
      <ul className={styles.list}>
        {components.map((component) => {
          const state = COMPONENT_STATE[component.status] ?? {
            label: component.status,
            tone: 'info',
          };
          return (
            <li key={component.id} className={styles.row}>
              <span className={styles.rowName}>{component.name}</span>
              <span className={clsx(styles.state, styles[`tone_${state.tone}`])}>
                <span className={styles.dot} aria-hidden="true" />
                {state.label}
              </span>
            </li>
          );
        })}
      </ul>

      <p className={styles.footnote}>
        Live from the{' '}
        <a href={baseUrl} target="_blank" rel="noreferrer noopener">
          Kakr Labs status page
        </a>
        . This panel reads the same feed on every page load — it is never a
        cached claim.
      </p>
    </div>
  );
}
