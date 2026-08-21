---
title: Pricing Plans
sidebar_label: Pricing plans
description: Basic, Pro and Enterprise — API rate limits, monthly call quotas, agent identities, and MFA account coverage.
tags: [unverified]
---

Three plans. Every tier runs the same cryptographic model — what changes is throughput, how many
agent identities you can run, and how many accounts you can protect with MFA.

## Plan comparison

| | **Basic** | **Pro** | **Enterprise** |
| --- | --- | --- | --- |
| **Price** | $0/month | $49/month | $299/month |
| **API calls** | 3/sec | 30/sec | 300/sec |
| **Monthly calls** | — | 30,000 | 300,000 |
| **Agent identities** | 1 | Up to 10 | Unlimited |
| **MFA accounts** | Up to 5 | Up to 25 | Up to 200 |
| **Self-custody wallet** | ✔ | ✔ | ✔ |
| **All platforms — Android, iOS, Web** | ✔ | ✔ | ✔ |
| **Marketplace** | Browsing | Full access | Full access |
| **Verified agent badge** | ❌ | Eligible | Eligible |
| **PTERI lifetime payments** | ❌ | ✔ | ✔ |
| **Priority support** | ❌ | ✔ | ✔ |
| **Dedicated support** | ❌ | ❌ | ✔ |
| **Custom SLA** | ❌ | ❌ | ✔ |
| **White label options** | ❌ | ❌ | ✔ |

***

### Basic — $0/month

For individual developers and testing. No credit card required.

**What you get**

* 3 API calls per second
* 1 agent identity
* MFA for up to 5 accounts
* Self-custody wallet access
* Marketplace browsing
* All platforms — Android, iOS, Web

**Best for**

* Personal testing
* A first integration
* Evaluating the platform

***

### Pro — $49/month

*Recommended.* For developers and startups running multiple agents in production.

**What you get**

* 30 API calls per second
* 30,000 API calls per month
* Up to 10 agent identities
* MFA for up to 25 accounts
* Full marketplace access
* Verified agent badge eligible
* PTERI lifetime payments
* Priority support

**Best for**

* Developer studios
* Startups with agent fleets
* SMBs deploying AI agents

***

### Enterprise — $299/month

For organizations deploying AI agents at scale that need full coverage and support.

**What you get**

* 300 API calls per second
* 300,000 API calls per month
* Unlimited agent identities
* MFA for up to 200 accounts
* Full marketplace access
* Custom SLA
* White label options
* Dedicated support

**Best for**

* Mid-market organizations
* Regulated industries
* RBI and UAE compliance needs

[Talk to the enterprise team](/docs/api-reference/enterprise#need-enterprise-access).

## Rate limits in practice

Two limits apply, and they are enforced at the gateway per customer — not advisory.

- **Per-second rate** shapes how you burst. Add retry-with-backoff to any client that can exceed it.
- **Monthly quota** decides whether a tier is viable at all. Pro's 30,000 calls a month works out
  to roughly 1,000 a day; Enterprise's 300,000 to roughly 10,000 a day.

No monthly quota is published for Basic — only the 3/sec rate.
<Pill kind="verify">Needs verification</Pill> Assume it is metered somehow rather than unlimited.

What the API returns when you cross a limit is not documented.
<Pill kind="verify">Needs verification</Pill> See [Errors](/docs/api-reference/errors) for the
response shapes we have confirmed.

<Callout type="warn" title="kakr.ai/pricing sells a different, more expensive set of plans">

<Pill kind="verify">Needs verification</Pill>

The plans above are the live ones, taken from the account dashboard and matching
[kakr.ai/platform#pricing](https://kakr.ai/platform#pricing).

[kakr.ai/pricing](https://kakr.ai/pricing) is a separate page still advertising an Identity Trust
Layer track (Pteri Basic $0 · Identity Growth **$1,500** · Identity Scale **$3,500** · Enterprise
custom) and a Blockchain Infrastructure track (BaaS Developer **$2,500** · BaaS Pro **$6,000** ·
Enterprise custom). Those plans do not appear on the dashboard.

A customer landing there is quoted $1,500 for what is sold here at $49. That page needs retiring or
correcting on the website — it is not a docs fix.

[pteri.org](https://www.pteri.org/) is a third variant again: Starter / Builder / Pro / Enterprise,
with prices masked until you create an account.

</Callout>

## Litecoin Blockchain-as-a-Service

[Litecoin BaaS](/docs/platform-capabilities/blockchain-as-a-service) has no pricing on the
dashboard. The BaaS tiers listed on [kakr.ai/pricing](https://kakr.ai/pricing) belong to the same
page whose identity tiers are contradicted above, so this page does not reproduce them.
<Pill kind="verify">Needs verification</Pill> Confirm before quoting BaaS pricing to anyone.

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
