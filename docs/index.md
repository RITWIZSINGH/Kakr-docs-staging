---
slug: /
title: Welcome
sidebar_label: Welcome
sidebar_position: 0
description: Cryptographic proof of authority for humans and AI agents. Start with the quickstart, then pick a reading path.
---

PTERI replaces shared-secret trust — passwords, OTPs, static API keys — with a single
primitive: **sign, then verify**. This is the developer documentation for building on it.

<Callout type="info" title="If you only read one page">

Go to the **[Quickstart](/docs/quickstart)**. It takes about five minutes and ends with a
real wallet and address created through the API. Everything else on this site explains
what you just did and how far it goes.

</Callout>

## Start here

<Cards cols={3}>
  <Card title="Quickstart" to="/docs/quickstart" eyebrow="5 min" icon="▶">
    Account → API key → your first verified call. Copy-pasteable the whole way.
  </Card>
  <Card title="Core Concepts" to="/docs/core-concepts" eyebrow="3 min" icon="◇">
    Five ideas — wallet, signature, verification, authority, settlement. Read this if the
    rest of the docs feel like jargon.
  </Card>
  <Card title="Choose your path" to="/docs/choose-your-path" eyebrow="Router" icon="⌥">
    Ordered reading tracks, one per thing you might be building.
  </Card>
</Cards>

## The problem, in three lines

> If a secret can be typed, it can be phished.
> If it can be stored, it can be breached.
> If it can be forwarded, it can be replayed.

The internet was designed to move information — not value, and not identity. Identity was
bolted on later through passwords, SMS codes, and centralized databases: mechanisms that
prove *what someone knows*, never *who someone is*. PTERI removes the shared secret
entirely, so the attacks that depend on one have nothing left to steal.

![PTERI overview](/img/assets/image-33.png)

## How these docs are organised

The sidebar follows the order you will actually need things.

| Section | What lives there | Go when you want to… |
| --- | --- | --- |
| **Start here** | Quickstart, Core Concepts, Choose your path | Orient yourself and make a first call |
| **Build** | [Platform Capabilities](/docs/platform-capabilities), [API Reference](/docs/api-reference), [SDKs](/docs/sdks-and-integration), [AI Agents & MCP](/docs/ai-agents-and-mcp) | Write code against the platform |
| **Understand** | [Foundations](/docs/foundations), [The PTERI Model](/docs/pteri-model), [Payments & Identity](/docs/payments-and-identity), [Comparisons](/docs/comparisons) | Know *why* it is built this way |
| **Trust & operate** | [Architecture & Security](/docs/architecture-and-security), [Threat Model](/docs/threat-model), [Operations & Scaling](/docs/operations-and-scaling) | Review the security model, or run it in production |
| **Ship** | [Use Cases](/docs/use-cases), [Product & Access](/docs/product-and-access) | See worked examples and get access |
| **Help** | [FAQs, error messages, status](/docs/help) | Something is not working |

## How pages are labelled

Not everything here is equally settled. Where a claim has not been confirmed against the
published spec or production behaviour, the page says so in place rather than sounding
more certain than it is.

| Label | Meaning |
| --- | --- |
| <Pill kind="confirmed">Confirmed</Pill> | Verified against the published OpenAPI spec or production behaviour. |
| <Pill kind="concept">Product concept</Pill> | Architecture-level explanation. Implementation detail intentionally left out. |
| <Pill kind="verify">Needs verification</Pill> | Documented, but the exact route, schema, or limit still has to be confirmed by engineering. |

Every "Needs verification" chip links to the [Unverified tag index](/docs/tags/unverified), and the
[Verification Queue](/docs/help/verification-queue) collects every open item in one prioritised
list — search for **unverified** to find either.

## Next

<Cards cols={2}>
  <Card title="Quickstart" to="/docs/quickstart">
    The five-minute path from signup to a working request.
  </Card>
  <Card title="Choose your path" to="/docs/choose-your-path">
    Prefer to read before you type? Pick a track.
  </Card>
</Cards>
