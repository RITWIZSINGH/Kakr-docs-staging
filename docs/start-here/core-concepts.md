---
title: Core Concepts
sidebar_label: Core Concepts
slug: /core-concepts
description: The five ideas — wallet, signature, verification, authority, settlement — that every other page in these docs assumes you already know.
---

PTERI is one primitive repeated everywhere: **sign, then verify**.

A wallet signs a statement of intent. A verifier checks the signature and answers yes or
no. That is the whole system. Login, step-up approval, a payment, an AI agent doing work —
none of them are separate mechanisms. They are the same two steps with different payloads.
Read the five words below and the rest of this site stops being jargon.

## The vocabulary

<Cards cols={3}>
  <Card title="Wallet" to="/docs/platform-capabilities/pteri-wallet" eyebrow="Identity anchor" icon="◈">
    Identity is not an account row. Keys are generated on the device and never leave it —
    if you control the wallet, you are the identity.
  </Card>
  <Card title="Signature" to="/docs/pteri-model/core-mental-model" eyebrow="Proof of intent" icon="✎">
    Not a login artifact but a statement of intent: this authority approves this exact
    action, at this time. Bound to the message, and non-replayable.
  </Card>
  <Card title="Verification" to="/docs/threat-model/why-determinism-matters" eyebrow="Deterministic check" icon="✓">
    The verifier asks one question — is this cryptographic proof valid, yes or no? No risk
    score, no behavioural guess, no judgement call.
  </Card>
  <Card title="Authority" to="/docs/architecture-and-security/key-custody-and-biometrics" eyebrow="What you may do" icon="⚑">
    Authority comes from private key control, not from a role a server assigned you. If
    you can sign, you have authority. If you cannot, you do not.
  </Card>
  <Card title="Settlement" to="/docs/payments-and-identity/verifiable-settlement" eyebrow="The public record" icon="⛓">
    Litecoin is the public clock and court of record: immutable, globally ordered,
    proof-of-work secured. It stores no identity and runs no contract logic.
  </Card>
</Cards>

## The one flow you will see everywhere

```text
  ┌──────────┐      ┌───────────┐      ┌──────────────┐      ┌───────────┐
  │  Wallet  │ ───▶ │ Signature │ ───▶ │ Verification │ ───▶ │  Outcome  │
  └──────────┘      └───────────┘      └──────────────┘      └───────────┘
   holds the         signs one          checks the            the action
   private key       exact action,      signature —           proceeds, or
   on-device;        with a short-      valid or not          it does not
   servers never     lived challenge    valid, nothing
   custody it        so it cannot       in between
                     be replayed
```

Every page in these docs is a variation on that line. Four concrete ones:

| Scenario | What gets signed | What the outcome is | Walkthrough |
| --- | --- | --- | --- |
| **Login** | A single-use challenge from the backend — random nonce, short expiry | The backend verifies the signature, then issues its own session or JWT | [Passwordless SaaS login](/docs/use-cases/passwordless-saas-login) |
| **Step-up approval** | A fresh challenge for the one sensitive action being requested | The role change, payout, or deletion executes only after that new signature | [Step-up authentication](/docs/use-cases/step-up-authentication) |
| **Payment** | The exact payment parameters — amount, destination, network | The transaction settles on Litecoin, where anyone can verify it | [Payments and payouts](/docs/use-cases/payments-and-payouts) |
| **Agent action** | The specific task the agent has been given authority to perform | The agent's action is attributable to its own cryptographic identity | [AI agents and workflows](/docs/use-cases/ai-agents-and-workflows) |

The backend's job is the same in all four rows: issue a challenge, verify a signature,
observe blockchain state. It never holds a key, signs for you, or recovers an identity.

<Callout type="note" title="There is no second path">

No email recovery, no SMS override, no manual admin reset. Every action goes through
**Wallet → Signature → Verification**. That is a deliberate constraint, and it is what
makes the security properties predictable. See
[The Core Mental Model](/docs/pteri-model/core-mental-model).

</Callout>

## Words we deliberately do not use

These are absent by design, not on a roadmap. Each one was left out because it would add
trust assumptions without strengthening the proof.

- **Password** — a shared secret both sides know can be phished, reused, or leaked from a
  database; a signature is never shared.
- **OTP secret** — no seed to sync and no code to intercept, because freshness comes from
  a single-use challenge instead.
- **Static API key as proof of authority** — a long-lived key grants ambient authority and
  cannot prove who approved what; authority is scoped per signed request instead.
- **Token** — nothing in identity, authority, intent, verification, or settlement requires
  issuing one.
- **NFT / RWA** — representational assets add attack surface and incentive misalignment
  without making any proof stronger.
- **OmniLite** — an extra asset layer on top of Litecoin that the trust model has no use
  for.
- **Smart contract** — there is no contract logic to audit or exploit; verification is a
  signature check.
- **IPFS** — nothing is pinned off-chain, because identity lives in the wallet rather than
  in a stored file.

The full reasoning is in [What PTERI Is NOT](/docs/pteri-model/what-pteri-is-not).

## How these docs are labelled

Not everything on this site is equally nailed down. Three inline pills tell you which
kind of statement you are reading.

| Label | What it means |
| --- | --- |
| <Pill kind="confirmed">Confirmed</Pill> | Verified against the published OpenAPI spec or against production behaviour. Build on it. |
| <Pill kind="concept">Product concept</Pill> | Architecture-level explanation. The implementation detail is intentionally omitted, so do not expect a route or a schema. |
| <Pill kind="verify">Needs verification</Pill> | Described in the docs, but the exact route, schema, or limit has not been confirmed yet. Check before you depend on it. |

A page can carry more than one. Pills appear next to the specific claim they cover, not
only at the top of a page.

## Next

<Cards cols={3}>
  <Card title="Quickstart" to="/docs/quickstart" eyebrow="5 min" icon="▶">
    Account, API key, first verified call. The five ideas above, executed.
  </Card>
  <Card title="The PTERI Model" to="/docs/pteri-model" eyebrow="Deep dive" icon="◇">
    The five constraints in full, the trust layer they produce, and what is left out.
  </Card>
  <Card title="Choose your path" to="/docs/choose-your-path" eyebrow="Router" icon="⌥">
    Pick a reading order based on what you are building.
  </Card>
</Cards>
