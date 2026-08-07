---
title: OTP, SMS, and Authenticator Apps
sidebar_label: OTP & authenticator apps
description: Why time-based codes, shared seeds, and SMS delivery add no security value once intent is signed cryptographically.
---

When cryptographic intent is signed directly, time-based codes and shared secrets become unnecessary.

***

### Legacy OTP Model vs PTERI

| Category              | Traditional Model                      | Problems                                      | PTERI Replacement                                                                |
| --------------------- | -------------------------------------- | --------------------------------------------- | -------------------------------------------------------------------------------- |
| Authentication Method | Time-based codes (TOTP/SMS OTP)        | Code replay                                   | **Explicit cryptographic approval**         |
| Secret Model          | Shared seeds between server and device | Shared secrets can be extracted or duplicated | **No shared seeds**                         |
| Telecom Dependency    | SMS-based verification                 | SIM swap attacks                              | **No telecom dependency**                   |
| Session Authorization | Code proves temporary access           | Does not prove specific intent                | **Single-use cryptographic challenges**     |
| User Experience       | Manual code entry                      | UX friction, added failure modes              | **Local biometric gating**                  |
| Security Model        | One-time code validates login          | Codes can be phished and reused within window | **Intent is signed and bound to challenge** |

***

### Core Principle

> _"OTP becomes unnecessary when intent is signed."_

When approval is cryptographic, explicit, and single-use, time-based codes add no security value.

***

## Next

<Cards cols={2}>
  <Card title="Static API keys" to="/docs/comparisons/static-api-keys">The machine-side equivalent — long-lived secrets and why they go away.</Card>
  <Card title="Authentication flow" to="/docs/architecture-and-security/authentication-flow">See what a signed challenge actually looks like end to end.</Card>
</Cards>
