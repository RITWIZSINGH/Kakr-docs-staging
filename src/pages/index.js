import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

/** The four questions people actually arrive with. Each maps to a real reading track. */
const paths = [
  {
    icon: '⌘',
    title: 'Replace passwords in my app',
    desc: 'Passwordless login and step-up approval, backed by a signature instead of a shared secret.',
    to: '/docs/choose-your-path#replace-passwords',
    start: 'Identity & Authentication',
    startTo: '/docs/platform-capabilities/identity-and-authentication',
  },
  {
    icon: '◎',
    title: 'Give my AI agents real authority',
    desc: 'Agents that hold scoped cryptographic authority over MCP — not a broad API key in an env var.',
    to: '/docs/choose-your-path#ai-authority',
    start: 'Why AI systems are insecure',
    startTo: '/docs/ai-agents-and-mcp/why-ai-systems-are-insecure',
  },
  {
    icon: '◈',
    title: 'Move money on Litecoin',
    desc: 'Wallets, addresses, UTXOs and verifiable settlement through the LiaaS API — without running a node.',
    to: '/docs/choose-your-path#move-money',
    start: 'Blockchain-as-a-Service',
    startTo: '/docs/platform-capabilities/blockchain-as-a-service',
  },
  {
    icon: '⛨',
    title: 'Evaluate the security model',
    desc: 'Where keys live, which attack classes disappear by construction, and what is explicitly out of scope.',
    to: '/docs/choose-your-path#evaluate-security',
    start: 'Threat model overview',
    startTo: '/docs/threat-model/overview',
  },
];

const steps = [
  {
    n: '01',
    title: 'Get a key',
    desc: 'Create an account on pteri.org and generate an API access key.',
  },
  {
    n: '02',
    title: 'Make one call',
    desc: 'Hit a read-only endpoint to confirm your key and connectivity work.',
  },
  {
    n: '03',
    title: 'Create a wallet',
    desc: 'Create a wallet and its first address — that wallet is the identity anchor.',
  },
];

const map = [
  {
    label: 'Build',
    items: [
      ['Platform Capabilities', '/docs/platform-capabilities'],
      ['API Reference', '/docs/api-reference'],
      ['SDKs & Integration', '/docs/sdks-and-integration'],
      ['AI Agents & MCP', '/docs/ai-agents-and-mcp'],
    ],
  },
  {
    label: 'Understand',
    items: [
      ['Foundations', '/docs/foundations'],
      ['The PTERI Model', '/docs/pteri-model'],
      ['Payments & Identity', '/docs/payments-and-identity'],
      ['Comparisons', '/docs/comparisons'],
    ],
  },
  {
    label: 'Trust & operate',
    items: [
      ['Architecture & Security', '/docs/architecture-and-security'],
      ['Threat Model', '/docs/threat-model'],
      ['Operations & Scaling', '/docs/operations-and-scaling'],
      ['Help & Support', '/docs/help'],
    ],
  },
];

const resources = [
  ['OpenAPI spec', 'https://liaas-sdk-919521117286.europe-west1.run.app/swagger/v1/swagger.json'],
  ['Postman collection', 'https://documenter.getpostman.com/view/32261269/2sA3QpDDwR'],
  ['SDKs on GitHub', 'https://github.com/kakrlabs-Inc/liaas-sdk'],
  ['Status page', 'https://kakrlabs1.statuspage.io/'],
];

export default function Home() {
  return (
    <Layout
      title="PTERI Documentation"
      description="Cryptographic proof of authority — for humans and AI agents. Start with the 5-minute quickstart.">
      <main className={styles.main}>
        {/* ------------------------------------------------------------ hero */}
        <header className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>PTERI · Universal Trust Layer</p>
              <h1 className={styles.title}>
                Identity by <span className={styles.strike}>assertion</span>{' '}
                <span className={styles.accent}>proof</span>.
              </h1>
              <p className={styles.subtitle}>
                If a secret can be typed, it can be phished. If it can be stored,
                it can be breached. PTERI replaces shared-secret trust with
                cryptographic proof of authority — for humans and AI agents.
              </p>
              <div className={styles.actions}>
                <Link className={styles.primaryBtn} to="/docs/quickstart">
                  Start the 5-minute quickstart
                </Link>
                <Link className={styles.ghostBtn} to="/docs/choose-your-path">
                  Not sure where to start?
                </Link>
              </div>
              <p className={styles.heroFoot}>
                New to the idea?{' '}
                <Link to="/docs/core-concepts">Read Core Concepts first</Link> —
                three minutes, five ideas.
              </p>
            </div>

            <aside className={styles.terminal} aria-label="Example first request">
              <div className={styles.terminalBar}>
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.terminalName}>your first call</span>
              </div>
              <pre className={styles.terminalBody}>
                <code>
                  <span className={styles.c}># 1 · export your key</span>
                  {'\n'}export PTERI_API_KEY=<span className={styles.s}>"…"</span>
                  {'\n\n'}
                  <span className={styles.c}># 2 · confirm it works</span>
                  {'\n'}curl <span className={styles.f}>-H</span>{' '}
                  <span className={styles.s}>
                    "nodeUrlOrApiAccessKey: $PTERI_API_KEY"
                  </span>
                  {' \\'}
                  {'\n'}
                  {'  '}
                  <span className={styles.s}>
                    "$BASE_URL/api/Blocks/blockchain-info"
                  </span>
                  {'\n\n'}
                  <span className={styles.c}># 3 · create the identity anchor</span>
                  {'\n'}curl <span className={styles.f}>-X</span> POST{' '}
                  <span className={styles.f}>-H</span>{' '}
                  <span className={styles.s}>
                    "nodeUrlOrApiAccessKey: $PTERI_API_KEY"
                  </span>
                  {' \\'}
                  {'\n'}
                  {'  '}
                  <span className={styles.s}>"$BASE_URL/api/Wallet/create"</span>
                </code>
              </pre>
              <Link className={styles.terminalLink} to="/docs/quickstart">
                Full quickstart, step by step →
              </Link>
            </aside>
          </div>
        </header>

        {/* ----------------------------------------------------------- paths */}
        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>What do you want to do?</h2>
            <p className={styles.sectionSub}>
              Pick one. Each is a short, ordered reading path — not a pile of links.
            </p>
          </div>
          <div className={styles.pathGrid}>
            {paths.map((p) => (
              <div key={p.title} className={styles.pathCard}>
                <span className={styles.pathIcon} aria-hidden="true">
                  {p.icon}
                </span>
                <h3 className={styles.pathTitle}>{p.title}</h3>
                <p className={styles.pathDesc}>{p.desc}</p>
                <div className={styles.pathLinks}>
                  <Link className={styles.pathPrimary} to={p.to}>
                    See the path →
                  </Link>
                  <Link className={styles.pathSecondary} to={p.startTo}>
                    or jump to {p.start}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ----------------------------------------------------------- steps */}
        <section className={styles.stepsSection}>
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Three steps to your first call</h2>
            <p className={styles.sectionSub}>
              The quickstart walks through each one with copy-pasteable requests.
            </p>
          </div>
          <ol className={styles.stepRow}>
            {steps.map((s) => (
              <li key={s.n} className={styles.stepItem}>
                <span className={styles.stepNum}>{s.n}</span>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepDesc}>{s.desc}</p>
              </li>
            ))}
          </ol>
          <Link className={styles.primaryBtn} to="/docs/quickstart">
            Open the quickstart
          </Link>
        </section>

        {/* ------------------------------------------------------------- map */}
        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>The whole map</h2>
            <p className={styles.sectionSub}>
              Everything else, grouped by what you are trying to get out of it.
            </p>
          </div>
          <div className={styles.mapGrid}>
            {map.map((col) => (
              <div key={col.label} className={styles.mapCol}>
                <p className={styles.mapLabel}>{col.label}</p>
                <ul className={styles.mapList}>
                  {col.items.map(([label, to]) => (
                    <li key={to}>
                      <Link to={to}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={styles.resourceRow}>
            {resources.map(([label, href]) => (
              <a
                key={href}
                className={styles.resource}
                href={href}
                target="_blank"
                rel="noreferrer noopener">
                {label} ↗
              </a>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
