---
title: Pricing Plans
sidebar_label: Pricing plans
description: The Identity Trust Layer and Litecoin BaaS tiers — rate limits, monthly call quotas, and what each plan includes.
---

PTERI sells two infrastructure layers, priced separately.

1. **Identity Trust Layer** — cryptographic authentication and identity verification.
2. **Litecoin Blockchain-as-a-Service (BaaS)** — blockchain infrastructure without running nodes.

Both run on Litecoin-native infrastructure with deterministic cryptographic verification and
optional MWEB privacy support. Live pricing is at [kakr.ai/pricing](https://kakr.ai/pricing) — this
page mirrors it.

## Identity Trust Layer

| Feature | Pteri Basic | Identity Growth | Identity Scale | Pteri Enterprise |
| --- | --- | --- | --- | --- |
| **Price** | $0/month | $1,500/month | $3,500/month | Custom |
| **API calls** | 3/sec | 200/sec | 500/sec | Unlimited |
| **Monthly calls** | 50 | 50,000 | 200,000 | Unlimited |
| **Litecoin Explorer** | ✔ | ✔ | ✔ | ✔ |
| **Enhanced Explorer** | ❌ | ✔ | ✔ | ✔ |
| **PTERI Playground** | ❌ | ✔ | ✔ | ✔ |
| **PTERI Intelligence** | ❌ | ✔ | ✔ | Unlimited |
| **SDK integration** | ❌ | ✔ | ✔ | ✔ |
| **Unlimited API key users** | ❌ | ✔ | ✔ | ✔ |
| **Customer-controlled payment credentials** | ❌ | ✔ | ✔ | ✔ |
| **Priority support** | ❌ | ❌ | ✔ | ✔ |
| **MWEB privacy protocol** | ❌ | ✔ | ✔ | ✔ |
| **Dedicated instance** | ❌ | ❌ | ❌ | ✔ |
| **Custom API integrations** | ❌ | ❌ | ❌ | ✔ |
| **White-label solutions** | ❌ | ❌ | ❌ | ✔ |
| **Enterprise storage** | ❌ | ❌ | ❌ | ✔ |

### Pteri Basic — $0/month

For developers starting out. **3 calls/sec, 50 calls per month.**

That monthly cap is small by design — it covers the [Quickstart](/docs/quickstart) and a first
integration, not a running application. Includes the Litecoin-powered explorer, free API testing,
developer tutorials, and the developer guide.

### Identity Growth — $1,500/month

For startups and growing teams. **200 calls/sec, 50,000 calls per month.**

Adds the enhanced Litecoin explorer, PTERI Playground, PTERI Intelligence, SDK integration,
unlimited API key users, customer-controlled payment credentials, and the MWEB privacy protocol.

### Identity Scale — $3,500/month

**Most popular.** For scaling teams and AI-agent deployments. **500 calls/sec, 200,000 calls per
month.**

Everything in Growth, plus priority support and full SDK access.

### Pteri Enterprise — Custom

Agent authorization included. Everything in Growth and Scale, plus unlimited API calls,
enterprise-grade BaaS, a dedicated instance, custom API integrations, white-label solutions,
unlimited PTERI Intelligence, and dedicated enterprise storage.

[Talk to the enterprise team](/docs/api-reference/enterprise#need-enterprise-access).

## Litecoin Blockchain-as-a-Service

Scalable Litecoin infrastructure without operating your own nodes.

| Feature | BaaS Developer | BaaS Pro | BaaS Enterprise |
| --- | --- | --- | --- |
| **Price** | $2,500/month | $6,000/month | Custom |
| **API calls** | 300/sec | 800/sec | Unlimited |
| **Monthly calls** | 100,000 | 1,000,000 | Unlimited |
| **Litecoin Explorer** | ✔ | ✔ | ✔ |
| **Enhanced Explorer** | ❌ | ✔ | ✔ |
| **SDK access** | Basic | Full suite | Full suite |
| **AI MCP deployment** | ✔ | ✔ | ✔ |
| **PTERI Playground** | ✔ | ✔ | ✔ |
| **PTERI Intelligence** | ✔ | ✔ | ✔ |
| **Support** | Community | Priority | 24/7 dedicated |
| **Unlimited API key users** | ❌ | ✔ | ✔ |
| **Node access** | ❌ | ✔ | Dedicated cluster |
| **Custom smart contracts** | ❌ | ❌ | ✔ |
| **White-label BaaS** | ❌ | ❌ | ✔ |
| **SLA guarantee** | ❌ | ❌ | ✔ |

**BaaS Developer — $2,500/month.** For startups needing Litecoin BaaS. Litecoin explorer, basic SDK
access, community support, Playground, Intelligence, AI MCP deployment.

**BaaS Pro — $6,000/month.** *Recommended.* Enhanced explorer, full SDK suite, priority support,
unlimited API key users, privacy-focused payment controls, node access, AI MCP deployment.

**BaaS Enterprise — Custom.** Everything in Developer and Pro, plus unlimited calls, a dedicated
node cluster, custom smart contracts, white-label BaaS, an SLA guarantee, dedicated enterprise
storage, and 24/7 dedicated support.

## Rate limits in practice

The per-second figure shapes your architecture; the **monthly cap** decides whether a tier is
viable at all. Pteri Basic's 50 calls per month is the one that surprises people — it is an
evaluation allowance, not a free production tier.

Limits are enforced at the API gateway, per customer. They are not advisory, so build
retry-with-backoff into any client that can burst.

What the API returns when you cross a limit is not documented yet.
<Pill kind="verify">Needs verification</Pill> See [Errors](/docs/api-reference/errors) for the
response shapes we have confirmed.

<Callout type="warn" title="kakr.ai/platform shows different numbers">

[kakr.ai/pricing](https://kakr.ai/pricing) is the real pricing page and is what this page mirrors.

[kakr.ai/platform#pricing](https://kakr.ai/platform#pricing) still advertises a different, cheaper
set of plans — Free $0 / Pro $49 / Enterprise Pteri $299, with 3, 30 and 300 calls per second. Those
numbers do not appear on the pricing page and should be corrected on the website, not here.

[pteri.org](https://www.pteri.org/) is different again: it uses the names Starter, Builder, Pro and
Enterprise, and masks the prices until you create an account.

</Callout>

## Manage your subscription

All subscriptions are managed from the developer dashboard:

[https://www.pteri.org/Developer/Dashboard/Subscriptions](https://www.pteri.org/Developer/Dashboard/Subscriptions)

From the dashboard you can upgrade or downgrade plans, manage billing, generate API keys, and
monitor usage.

## Next

<Cards cols={2}>
  <Card title="PTERI Wallet app" to="/docs/product-and-access/wallet-app">The client your users sign with, and where to download it.</Card>
  <Card title="SDKs &amp; integration" to="/docs/sdks-and-integration">Pick a language client and start calling the API.</Card>
</Cards>
