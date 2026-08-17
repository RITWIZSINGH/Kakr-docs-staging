/**
 * Live platform status for use inside docs pages.
 *
 * Deliberately fetched at runtime rather than baked into the build: a static
 * "All Systems Operational" compiled into HTML keeps claiming it during an
 * outage, which is exactly when someone is reading the page.
 *
 * The full-page version lives at src/pages/status.js and shares the same hook.
 */
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import {COMPONENT_STATE, INDICATOR_TONE, useStatus} from './useStatus';

/** Compact one-line badge. Use at the top of a page. */
export function StatusBadge({href}) {
  const {phase, data, baseUrl} = useStatus();
  const target = href ?? baseUrl;

  const tone = phase === 'ready' ? INDICATOR_TONE[data.status.indicator] ?? 'info' : 'idle';
  const text =
    phase === 'loading'
      ? 'Checking platform status…'
      : phase === 'error'
        ? 'Could not reach the status API'
        : data.status.description;

  return (
    <a className={clsx(styles.badge, styles[`tone_${tone}`])} href={target}>
      <span className={styles.dot} aria-hidden="true" />
      <span>{text}</span>
      <span className={styles.badgeLink} aria-hidden="true">
        ↗
      </span>
    </a>
  );
}

/** Component breakdown plus any open incidents, for embedding in a doc page. */
export default function StatusPanel() {
  const {phase, data, baseUrl} = useStatus();

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
      <StatusBadge href="/status" />

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
        Live feed — never a cached claim. See the{' '}
        <Link to="/status">full status page</Link> for incident history.
      </p>
    </div>
  );
}
