---
title: Static API Keys & Service Secrets
sidebar_label: Static API keys
description: Why long-lived API keys and stored service secrets become obsolete when every request carries a scoped cryptographic signature.
---

When authority is cryptographic and scoped, static API keys become obsolete.

***

### Legacy API Key Model vs PTERI

| Category              | Traditional Model               | Problems                                  | PTERI Replacement                                                                      |
| --------------------- | ------------------------------- | ----------------------------------------- | -------------------------------------------------------------------------------------- |
| Authentication Method | Long-lived API keys             | Key leakage                               | **Signed requests**                               |
| Storage Model         | Stored in environment variables | Secrets exposed in logs, CI/CD, or memory | **No stored secrets**                             |
| Service Architecture  | Shared across services          | No attribution                            | **Machines have unique cryptographic identities** |
| Authorization Model   | Key grants ambient authority    | No intent verification                    | **Scoped authority per request**                  |
| Key Lifecycle         | Manual rotation required        | Difficult rotation                        | **No rotation needed (no reusable secret)**       |
| Auditability          | Key use not tied to intent      | Cannot prove who approved what            | **Deterministic verification**                    |

***

### Core Principle

> _"Machines become cryptographic identities, not secret holders."_

When every request is signed, authority is explicit, scoped, and verifiable — not embedded in static secrets.

***

## Next

<Cards cols={2}>
  <Card title="Custodial payment systems" to="/docs/comparisons/custodial-payments">What changes when payment authorization is signed rather than delegated.</Card>
  <Card title="Authentication" to="/docs/api-reference/authentication">How requests are actually authenticated against the API today.</Card>
</Cards>
