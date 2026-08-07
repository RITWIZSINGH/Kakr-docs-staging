/**
 * Global MDX components for the PTERI docs.
 *
 * Registered in src/theme/MDXComponents.js, so every .md/.mdx page can use these
 * without an import. Keep this set small — a component that only one page needs
 * belongs in that page, not here.
 */
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

/* ---------------------------------------------------------------- Cards --- */

export function Cards({children, cols = 2}) {
  return (
    <div className={clsx(styles.cards, cols === 3 && styles.cards3)}>
      {children}
    </div>
  );
}

export function Card({title, to, href, eyebrow, icon, children}) {
  const target = to ?? href;
  const Wrapper = target ? Link : 'div';
  const props = target ? (to ? {to} : {href}) : {};

  return (
    <Wrapper {...props} className={clsx(styles.card, target && styles.cardLink)}>
      {icon ? <span className={styles.cardIcon} aria-hidden="true">{icon}</span> : null}
      {eyebrow ? <span className={styles.cardEyebrow}>{eyebrow}</span> : null}
      <span className={styles.cardTitle}>{title}</span>
      {children ? <span className={styles.cardBody}>{children}</span> : null}
      {target ? <span className={styles.cardArrow} aria-hidden="true">→</span> : null}
    </Wrapper>
  );
}

/* ------------------------------------------------------------- Callout --- */

const CALLOUT_LABEL = {
  info: 'Note',
  note: 'Note',
  ok: 'Confirmed',
  warn: 'Heads up',
  danger: 'Do not ship',
};

export function Callout({type = 'info', title, children}) {
  const kind = CALLOUT_LABEL[type] ? type : 'info';
  return (
    <aside className={clsx(styles.callout, styles[`callout_${kind}`])}>
      <p className={styles.calloutTitle}>{title ?? CALLOUT_LABEL[kind]}</p>
      <div className={styles.calloutBody}>{children}</div>
    </aside>
  );
}

/* ---------------------------------------------------------------- Pill --- */

/**
 * Status chip. `verify` pills double as a link into the `unverified` tag page, so
 * a reviewer can jump from any single flagged claim to the full outstanding list.
 */
export function Pill({kind = 'concept', children}) {
  const known = ['confirmed', 'concept', 'verify', 'beta', 'live'].includes(kind)
    ? kind
    : 'concept';
  const className = clsx(styles.pill, styles[`pill_${known}`]);

  if (known === 'verify') {
    return (
      <Link
        to="/docs/tags/unverified"
        className={clsx(className, styles.pillLink)}
        title="Unverified — see every open verification item">
        {children ?? 'Needs verification'}
      </Link>
    );
  }

  return <span className={className}>{children}</span>;
}

/* --------------------------------------------------------------- Steps --- */

export function Steps({children}) {
  return <ol className={styles.steps}>{children}</ol>;
}

export function Step({title, children}) {
  return (
    <li className={styles.step}>
      {title ? <p className={styles.stepTitle}>{title}</p> : null}
      <div className={styles.stepBody}>{children}</div>
    </li>
  );
}

/* ------------------------------------------------------------ Endpoint --- */

export function Endpoint({method = 'GET', path, note, children}) {
  const verb = String(method).toUpperCase();
  const known = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'].includes(verb)
    ? verb
    : 'GET';

  return (
    <details className={styles.endpoint}>
      <summary className={styles.endpointHead}>
        <span className={clsx(styles.method, styles[`method_${known}`])}>
          {verb}
        </span>
        <code className={styles.endpointPath}>{path}</code>
        {note ? <span className={styles.endpointNote}>{note}</span> : null}
      </summary>
      <div className={styles.endpointBody}>{children}</div>
    </details>
  );
}
