// @ts-check
import 'dotenv/config';
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PTERI Documentation',
  tagline: 'Cryptographic proof of authority — for humans and AI agents.',
  customFields: {
    gaMeasurementId: 'G-1653V7W1ZT',
    // HubSpot form target, read from .env (or from the host's environment on Vercel).
    // Public identifiers — see the note in .env.
    portalId: process.env.PORTAL_ID,
    formId: process.env.FORM_ID,
    // Status source. Anything serving the Statuspage v2 `/api/v2/summary.json`
    // shape works here, so self-hosting later is a one-line change.
    statusPageUrl: process.env.STATUS_PAGE_URL || 'https://kakrlabs1.statuspage.io',
  },
  favicon: 'favicon.ico',
  headTags: [
    { tagName: 'link', attributes: { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' } },
    { tagName: 'link', attributes: { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' } },
    { tagName: 'link', attributes: { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' } },
    { tagName: 'link', attributes: { rel: 'manifest', href: '/site.webmanifest' } },
  ],

  url: 'https://docs.pteri.org', // change to your real docs domain before deploying
  baseUrl: '/',

  organizationName: 'RITWIZSINGH',
  projectName: 'Kakrlabs_documentation',

  // Warn instead of failing the build while you're still cleaning up links
  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: '/docs',
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // routeBasePath: '/',  // uncomment to serve docs at site root instead of /docs
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'KakrLabs',
          src: 'img/logo.png',
        },
        items: [
          { to: '/docs/quickstart', label: 'Quickstart', position: 'left' },
          {
            type: 'dropdown',
            label: 'Build',
            position: 'left',
            items: [
              { to: '/docs/platform-capabilities', label: 'Platform Capabilities' },
              { to: '/docs/api-reference', label: 'API Reference' },
              { to: '/docs/api-reference/endpoints', label: 'Endpoint Index' },
              { to: '/docs/sdks-and-integration', label: 'SDKs & Integration' },
              { to: '/docs/ai-agents-and-mcp', label: 'AI Agents & MCP' },
            ],
          },
          {
            type: 'dropdown',
            label: 'Security',
            position: 'left',
            items: [
              { to: '/docs/architecture-and-security', label: 'Architecture & Security' },
              { to: '/docs/threat-model', label: 'Threat Model' },
              { to: '/docs/operations-and-scaling', label: 'Operations & Scaling' },
            ],
          },
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'All docs',
          },
          { to: '/docs/help', label: 'Help', position: 'right' },
          {
            href: 'https://github.com/kakrlabs-Inc/liaas-sdk',
            position: 'right',
            className: 'navbar-github-link',
            'aria-label': 'KakrLabs SDKs on GitHub',
            title: 'KakrLabs SDKs on GitHub',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Start here',
            items: [
              { label: 'Quickstart', to: '/docs/quickstart' },
              { label: 'Core Concepts', to: '/docs/core-concepts' },
              { label: 'Choose your path', to: '/docs/choose-your-path' },
            ],
          },
          {
            title: 'Build',
            items: [
              { label: 'API Reference', to: '/docs/api-reference' },
              { label: 'Endpoint Index', to: '/docs/api-reference/endpoints' },
              { label: 'SDKs & Integration', to: '/docs/sdks-and-integration' },
              { label: 'AI Agents & MCP', to: '/docs/ai-agents-and-mcp' },
            ],
          },
          {
            title: 'Trust',
            items: [
              { label: 'Architecture & Security', to: '/docs/architecture-and-security' },
              { label: 'Threat Model', to: '/docs/threat-model' },
              { label: 'Operations & Scaling', to: '/docs/operations-and-scaling' },
              { label: 'Use Cases', to: '/docs/use-cases' },
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'Pricing & access', to: '/docs/product-and-access' },
              { label: 'Help & support', to: '/docs/help' },
              { label: 'Status', href: 'https://kakrlabs1.statuspage.io/' },
              { label: 'SDKs on GitHub', href: 'https://github.com/kakrlabs-Inc/liaas-sdk' },
              { label: 'pteri.org', href: 'https://www.pteri.org' },
              { label: 'Privacy Policy', to: '/privacy-policy' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} KakrLabs.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.vsDark,
        additionalLanguages: ['bash', 'json'],
      },
    }),
};

export default config;
