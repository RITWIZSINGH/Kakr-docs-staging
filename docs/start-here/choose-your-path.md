---
title: Choose your path
sidebar_label: Choose your path
slug: /choose-your-path
description: "Pick a reading track by what you are building: passwordless login, AI agent authority, Litecoin payments, a security review, or a production rollout."
---

There are five common reasons people land here. Pick the one that matches what you are building, read the track in order, and skip the rest. Every track is a real reading path, not a table of contents.

<Cards cols={2}>
  <Card title="Replace passwords in my app" to="#replace-passwords" eyebrow="~10 min" icon="◈">
    Passwordless login, backed by a signature instead of a shared secret.
  </Card>
  <Card title="Give my AI agents real authority" to="#ai-authority" eyebrow="~7 min" icon="◆">
    Scoped, revocable, provable agent identity instead of a stored API key.
  </Card>
  <Card title="Move money on Litecoin" to="#move-money" eyebrow="~6 min" icon="◇">
    Signed intent that settles on a public ledger you can verify yourself.
  </Card>
  <Card title="Evaluate the security model" to="#evaluate-security" eyebrow="~8 min" icon="▣">
    For a CTO or security reviewer deciding whether this holds up.
  </Card>
  <Card title="Run this in production" to="#run-in-production" eyebrow="~12 min" icon="▤">
    Scaling, failure behaviour, monitoring, and who owns which failure.
  </Card>
</Cards>

## Replace passwords in my app {#replace-passwords}

**For you if:** you own a login screen and you are tired of resets, OTP delivery, and credential-stuffing traffic.

1. [Identity & Authentication](/docs/platform-capabilities/identity-and-authentication) — what replaces the password, at a glance.
2. [Authentication Flow](/docs/architecture-and-security/authentication-flow) — the canonical challenge, signature, and verification sequence.
3. [Passwordless SaaS Login](/docs/use-cases/passwordless-saas-login) — the same flow applied to a real session-issuing login.
4. [Step-Up Authentication](/docs/use-cases/step-up-authentication) — re-verify before the actions that actually matter.
5. [API Reference: Authentication](/docs/api-reference/authentication) — the calls you write to make it work.

**Read time:** about 10 minutes.

## Give my AI agents real authority {#ai-authority}

**For you if:** you have agents that need to do things, and a static key in an environment variable is the only thing standing between them and your production data.

1. [Why AI Systems Are Insecure Today](/docs/ai-agents-and-mcp/why-ai-systems-are-insecure) — the problem, stated precisely.
2. [PTERI for AI Authority](/docs/ai-agents-and-mcp/pteri-for-ai-authority) — agents as principals with scoped, revocable identity.
3. [PTERI Intelligence & MCP](/docs/ai-agents-and-mcp/pteri-intelligence-and-mcp) — the tools an agent gets over the Model Context Protocol.
4. [AI Agents & Autonomous Workflows](/docs/use-cases/ai-agents-and-workflows) — what a bounded agent workflow looks like end to end.
5. [Machine-to-Machine Services](/docs/use-cases/machine-to-machine) — the same model when the caller is a service, not an agent.

**Read time:** about 7 minutes.

## Move money on Litecoin {#move-money}

**For you if:** you are building payouts, settlement, or any flow where a transaction has to be provably authorized.

1. [Blockchain-as-a-Service](/docs/platform-capabilities/blockchain-as-a-service) — node access, indexing, and broadcasting, without custody.
2. [UTXO Model](/docs/payments-and-identity/utxo-model) — why there is no hidden account balance to reconcile.
3. [Identity-Bound Intent](/docs/payments-and-identity/identity-bound-intent) — one signature that proves who, what, and approved.
4. [Verifiable Settlement](/docs/payments-and-identity/verifiable-settlement) — how anyone confirms a payment without trusting us.
5. [Payments & Payouts](/docs/use-cases/payments-and-payouts) — the assembled flow.

**Read time:** about 6 minutes.

## Evaluate the security model {#evaluate-security}

**For you if:** you are a CTO or security reviewer and you need to know what this actually removes, and what it does not.

1. [Where Things Live](/docs/architecture-and-security/where-things-live) — the trust boundary, drawn explicitly.
2. [Key Custody & Biometrics](/docs/architecture-and-security/key-custody-and-biometrics) — what never leaves the device.
3. [Threat Model Overview](/docs/threat-model/overview) — the assumptions the model is built on.
4. [Threats Eliminated by Design](/docs/threat-model/threats-eliminated) — attack classes that fail structurally, not by mitigation.
5. [Threats Explicitly Out of Scope](/docs/threat-model/out-of-scope) — read this one before you decide. It is the honest half.
6. [Cryptographic Foundations](/docs/threat-model/cryptographic-foundations) — the primitives underneath the claims.

**Read time:** about 8 minutes.

## Run this in production {#run-in-production}

**For you if:** the decision is made and now you have to operate it, scale it, and explain it to whoever carries the pager.

1. [Stateless by Design](/docs/operations/stateless-by-design) — why there is no session state to lose.
2. [Horizontal Scaling](/docs/operations/horizontal-scaling) — adding instances behind a standard load balancer.
3. [Failure Modes & Degradation](/docs/operations/failure-modes) — what happens when verification is unavailable.
4. [Observability & Monitoring](/docs/operations/observability) — what to watch, and what is never logged.
5. [Operational Responsibility Model](/docs/operations/responsibility-model) — who owns wallets, signing, verification, settlement, and your business logic.
6. [Pricing Plans](/docs/product-and-access/pricing-plans) — which tier your workload needs.

**Read time:** about 12 minutes.

## Still not sure?

Start by making one call work. The concepts land faster once something has verified.

<Cards cols={2}>
  <Card title="Quickstart" to="/docs/quickstart" eyebrow="Do it first" icon="▶">
    Get a key and make your first verified call.
  </Card>
  <Card title="FAQs" to="/docs/help/faqs" eyebrow="Common questions" icon="?">
    The questions most people ask before they commit.
  </Card>
</Cards>
