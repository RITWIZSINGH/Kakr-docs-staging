/**
 * Standalone status page at /status.
 *
 * Atlassian Statuspage stays the engine — the team posts incidents there and
 * subscribers are notified from there. This is purely the presentation layer,
 * reading the public v2 API, so the look is ours without owning any of the
 * incident tooling.
 *
 * It also survives a product outage: this deploys to Vercel while the API runs
 * on Cloud Run, so they cannot fail together.
 */
import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {
  COMPONENT_STATE,
  INDICATOR_TONE,
  groupComponents,
  useStatus,
} from '@site/src/components/StatusPanel/useStatus';
import styles from './status.module.css';

const POLL_MS = 60_000;

function formatTime(date) {
  if (!date) return null;
  return date.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
}

function formatDate(value) {
  if (!value) return null;
  return new Date(value).toLocaleString(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  });
}

function ComponentRow({component}) {
  const state = COMPONENT_STATE[component.status] ?? {
    label: component.status,
    tone: 'info',
  };
  return (
    <li className={styles.row}>
      <span className={styles.rowName}>
        {component.name}
        {component.description ? (
          <span className={styles.rowDesc}>{component.description}</span>
        ) : null}
      </span>
      <span className={clsx(styles.state, styles[`tone_${state.tone}`])}>
        <span className={styles.dot} aria-hidden="true" />
        {state.label}
      </span>
    </li>
  );
}

function IncidentCard({incident, tone = 'warn'}) {
  const updates = incident.incident_updates ?? [];
  return (
    <article className={clsx(styles.incident, styles[`incidentTone_${tone}`])}>
      <header className={styles.incidentHead}>
        <h3 className={styles.incidentTitle}>{incident.name}</h3>
        <span className={styles.incidentMeta}>
          {incident.status}
          {incident.impact && incident.impact !== 'none'
            ? ` · impact ${incident.impact}`
            : ''}
        </span>
      </header>
      <p className={styles.incidentDate}>
        {formatDate(incident.started_at ?? incident.created_at)}
        {incident.resolved_at ? ` → resolved ${formatDate(incident.resolved_at)}` : ''}
      </p>
      {updates.length > 0 && (
        <ol className={styles.updates}>
          {updates.map((update) => (
            <li key={update.id}>
              <span className={styles.updateStatus}>{update.status}</span>
              <span className={styles.updateBody}>{update.body}</span>
              <span className={styles.updateTime}>{formatDate(update.created_at)}</span>
            </li>
          ))}
        </ol>
      )}
      {incident.shortlink && (
        <a
          className={styles.incidentLink}
          href={incident.shortlink}
          target="_blank"
          rel="noreferrer noopener">
          Permalink ↗
        </a>
      )}
    </article>
  );
}

export default function StatusPage() {
  const {phase, data, history, baseUrl, fetchedAt, reload} = useStatus({
    pollMs: POLL_MS,
    withHistory: true,
  });

  const indicator = phase === 'ready' ? data.status.indicator : null;
  const tone = indicator ? INDICATOR_TONE[indicator] ?? 'info' : 'idle';
  const headline =
    phase === 'loading'
      ? 'Checking status…'
      : phase === 'error'
        ? 'Status unavailable'
        : data.status.description;

  const {standalone, groups} = phase === 'ready' ? groupComponents(data.components) : {standalone: [], groups: []};
  const openIncidents = phase === 'ready' ? data.incidents ?? [] : [];
  const maintenances = phase === 'ready' ? data.scheduled_maintenances ?? [] : [];

  // Open incidents are already shown above; history repeats them otherwise.
  const openIds = new Set(openIncidents.map((i) => i.id));
  const pastIncidents = (history ?? []).filter((i) => !openIds.has(i.id));

  return (
    <Layout
      title="Platform status"
      description="Live operational status for the PTERI platform, API, and supporting services.">
      <main className={styles.main}>
        <header className={clsx(styles.hero, styles[`heroTone_${tone}`])}>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>Kakr Labs · Platform status</p>
            <h1 className={styles.headline}>
              <span className={clsx(styles.heroDot, styles[`tone_${tone}`])} aria-hidden="true" />
              {headline}
            </h1>
            <div className={styles.heroMeta}>
              {fetchedAt && <span>Checked at {formatTime(fetchedAt)}</span>}
              <button type="button" className={styles.refresh} onClick={reload}>
                Refresh
              </button>
              <span className={styles.heroMetaDim}>Auto-refreshes every minute</span>
            </div>
          </div>
        </header>

        <div className={styles.body}>
          {phase === 'error' && (
            <p className={styles.error}>
              The status feed could not be reached. This page reads{' '}
              <a href={`${baseUrl}/api/v2/summary.json`} target="_blank" rel="noreferrer noopener">
                the public status API
              </a>{' '}
              — try it directly, or open{' '}
              <a href={baseUrl} target="_blank" rel="noreferrer noopener">
                the status page
              </a>
              .
            </p>
          )}

          {openIncidents.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Active incidents</h2>
              {openIncidents.map((incident) => (
                <IncidentCard key={incident.id} incident={incident} tone="danger" />
              ))}
            </section>
          )}

          {maintenances.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Scheduled maintenance</h2>
              {maintenances.map((m) => (
                <IncidentCard key={m.id} incident={m} tone="info" />
              ))}
            </section>
          )}

          {phase === 'ready' && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Services</h2>

              {standalone.length > 0 && (
                <ul className={styles.list}>
                  {standalone.map((c) => (
                    <ComponentRow key={c.id} component={c} />
                  ))}
                </ul>
              )}

              {groups.map((group) => (
                <div key={group.id} className={styles.group}>
                  <p className={styles.groupLabel}>{group.name}</p>
                  <ul className={styles.list}>
                    {group.children.map((c) => (
                      <ComponentRow key={c.id} component={c} />
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          )}

          {pastIncidents.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Past incidents</h2>
              {pastIncidents.map((incident) => (
                <IncidentCard key={incident.id} incident={incident} tone="muted" />
              ))}
            </section>
          )}

          {phase === 'ready' && pastIncidents.length === 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Past incidents</h2>
              <p className={styles.empty}>No incidents reported.</p>
            </section>
          )}

          <footer className={styles.footer}>
            <div>
              <a
                className={styles.subscribe}
                href={`${baseUrl}/#subscribe`}
                target="_blank"
                rel="noreferrer noopener">
                Subscribe to updates
              </a>
              <p className={styles.footNote}>
                Get notified by email when an incident opens or resolves.
              </p>
            </div>
            <p className={styles.footNote}>
              This page reads the public{' '}
              <a href={baseUrl} target="_blank" rel="noreferrer noopener">
                Kakr Labs status feed
              </a>{' '}
              directly, so it is never out of date with the source. Back to the{' '}
              <Link to="/docs/help/status-and-support">docs</Link>.
            </p>
          </footer>
        </div>
      </main>
    </Layout>
  );
}
