---
title: Password-Based Authentication
sidebar_label: Passwords
description: What PTERI replaces in the password stack — stored credentials, recovery secrets, MFA add-ons — and why none of it is needed.
---

What PTERI replaces — and why it is no longer needed.

<Callout type="info">

This section compares PTERI with legacy and modern alternatives, and explains **which systems become obsolete** once cryptographic authority is the foundation.

</Callout>

PTERI does not coexist with multiple trust models.\
It **collapses them into one**.

***

### Legacy Model vs PTERI

| Category                    | Traditional Model                     | Problems                                                       | PTERI Replacement                                                          |
| --------------------------- | ------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Authentication              | Passwords stored or hashed on servers | Phishing, credential reuse                                     | **No passwords**                      |
| Account Recovery            | Email or SMS-based recovery           | Recovery channels can be hijacked (SIM swap, email compromise) | **No recovery secrets**               |
| Multi-Factor Authentication | MFA layered on top as a patch         | Adds complexity, still relies on shared secrets                | **No MFA add-ons**                    |
| Credential Storage          | Centralized databases of credentials  | Database breach exposure                                       | **No credential databases**           |
| Operational Complexity      | Multiple systems layered together     | Complex recovery flows, high operational overhead              | **Single wallet signature primitive** |

***

### What Changes Fundamentally

| Legacy Assumption           | In PTERI                                                                           |
| --------------------------- | ---------------------------------------------------------------------------------- |
| Secrets must be stored      | **No secrets stored on servers**              |
| Credentials prove identity  | **Cryptographic signature proves identity**   |
| Authentication is layered   | **Authentication is native to the primitive** |
| More layers = more security | **Fewer trust surfaces = stronger security**  |

***

### Core Principle

> _"If there is no secret, there is nothing to steal."_

Wallet signature replaces the entire legacy authentication stack.

***

## Next

<Cards cols={2}>
  <Card title="OTP, SMS, and authenticator apps" to="/docs/comparisons/otp-and-authenticator-apps">The same argument applied to one-time codes and shared seeds.</Card>
  <Card title="Why identity fails in Web2" to="/docs/foundations/why-identity-fails-in-web2">The background on why the stored-secret model breaks down.</Card>
</Cards>
