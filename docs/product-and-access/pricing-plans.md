---
title: Pricing Plans
sidebar_label: Pricing plans
description: The Free, Pro, and Enterprise PTERI plans — API rate limits, agent identities, MFA account coverage, and what each tier includes.
tags: [unverified]
---

Three plans, priced per month. Every tier includes the same cryptographic model — the differences
are throughput, how many agent identities you can run, and how many accounts you can protect with
MFA.

Plans and prices are set on [kakr.ai](https://kakr.ai/platform#pricing). This page mirrors them;
check there before you commit to a tier.

## Plan comparison

| | **Free** | **Pro** | **Enterprise Pteri** |
| --- | --- | --- | --- |
| **Price** | $0/month | $49/month | $299/month |
| **API calls** | 3/sec | 30/sec | 300/sec |
| **Agent identities** | 1 | Up to 10 | Unlimited |
| **MFA accounts** | Up to 5 | Up to 25 | Up to 200 |
| **Self-custody wallet** | ✔ | ✔ | ✔ |
| **All platforms — Android, iOS, Web** | ✔ | ✔ | ✔ |
| **PTERI lifetime payments** | ❌ | ✔ | ✔ |
| **Verified agent badge** | ❌ | Coming soon | Coming soon |
| **Priority support** | ❌ | ✔ | ✔ |
| **Dedicated support** | ❌ | ❌ | ✔ |
| **Custom SLA** | ❌ | ❌ | ✔ |
| **White label options** | ❌ | ❌ | ✔ |

***

### Free — $0/month

For individual developers and testing. No credit card required.

**What you get**

* 3 API calls per second
* 1 agent identity
* MFA for up to 5 accounts
* Self-custody wallet access
* All platforms — Android, iOS, Web

**Best for**

* Personal testing
* A first integration
* Evaluating the platform

***

### Pro — $49/month

For developers and startups running multiple agents in production.

**What you get**

* 30 API calls per second
* Up to 10 agent identities
* MFA for up to 25 accounts
* Verified agent badge *(coming soon)*
* PTERI lifetime payments
* Priority support

**Best for**

* Developer studios
* Startups with agent fleets
* SMBs deploying AI agents

***

### Enterprise Pteri — $299/month

For organizations deploying AI agents at scale that need full coverage and support.

**What you get**

* 300 API calls per second
* Unlimited agent identities
* MFA for up to 200 accounts
* Custom SLA
* White label options
* Dedicated support

**Best for**

* Mid-market organizations
* Regulated industries
* RBI and UAE compliance needs

Talk to sales at [contact@kakr.ai](mailto:contact@kakr.ai) or through
[kakr.ai](https://kakr.ai) → Contact.

***

## Rate limits in practice

The per-second figure is the one that shapes your integration. At Free you have 3 requests per
second, which is enough to work through the [Quickstart](/docs/quickstart) and build against the
API, but not enough to serve production traffic.

The API does not document what happens when you exceed your limit — see
[Errors](/docs/api-reference/errors) for the response shapes we have confirmed, and treat
rate-limit behaviour as unverified until engineering says otherwise.

<Callout type="warn" title="kakr.ai lists a second, different set of plans">

<Pill kind="verify">Needs verification</Pill>

The plans above come from [kakr.ai/platform#pricing](https://kakr.ai/platform#pricing).
[kakr.ai/pricing](https://kakr.ai/pricing) is a separate page carrying a **different and larger**
set of tiers at very different price points — an Identity Trust Layer track
(Pteri Basic $0 · Identity Growth $1,500 · Identity Scale $3,500 · Pteri Enterprise custom) and a
Blockchain Infrastructure track (BaaS Developer $2,500 · BaaS Pro $6,000 · BaaS Enterprise custom).

The two pages disagree on plan names, on price, and on quota. The Free tier is `3/sec` on both, but
`/pricing` additionally caps it at 50 API calls per month, which `/platform` does not mention.

This page follows `/platform#pricing`. Someone needs to decide which page is canonical and retire
the other — a customer comparing $49 against $1,500 for what reads as the same product will ask.

</Callout>

## Blockchain-as-a-Service

[Litecoin BaaS](/docs/platform-capabilities/blockchain-as-a-service) is priced separately from the
identity plans above, on its own Blockchain Infrastructure track. Because of the conflict noted
above, this page does not reproduce those figures — read them from
[kakr.ai/pricing](https://kakr.ai/pricing) and confirm before quoting.
<Pill kind="verify">Needs verification</Pill>

## Manage your subscription

All subscriptions are managed from the developer dashboard:

[https://www.pteri.org/Developer/Dashboard/Subscriptions](https://www.pteri.org/Developer/Dashboard/Subscriptions)

From the dashboard you can:

* Upgrade or downgrade plans
* Manage billing
* Generate API keys
* Monitor usage

## Next

<Cards cols={2}>
  <Card title="PTERI Wallet app" to="/docs/product-and-access/wallet-app">The client your users sign with, and where to download it.</Card>
  <Card title="SDKs & integration" to="/docs/sdks-and-integration">Pick a language client and start calling the API.</Card>
</Cards>
