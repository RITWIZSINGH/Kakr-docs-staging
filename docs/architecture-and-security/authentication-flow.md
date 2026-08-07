---
title: Authentication Flow
sidebar_label: Authentication Flow
description: The canonical PTERI login sequence — challenge, biometric approval, signature, and server-side verification with no shared secret.
---

This is the **canonical authentication flow** used throughout PTERI.

Every login, approval, or authorization is a variation of this sequence.

***

#### Step-by-step flow

1. The application requests authentication
2. The backend generates a challenge
   * Random nonce
   * Short expiry
3. The wallet receives the challenge
4. The user approves via biometrics
5. The wallet signs the challenge
6. The signature is sent to the backend
7. The backend verifies the signature
8. The backend issues its own session or JWT

At no point does the backend:

* Receive a secret
* Store reusable credentials
* Gain signing authority

***

#### Why this works

* Challenges are single-use
* Signatures are non-replayable
* Authority is proven, not assumed
* Compromised servers cannot impersonate users

> Authentication becomes a **cryptographic event**, not a credential exchange.


![](/img/assets/image-45.png)

## Next

<Cards cols={2}>
  <Card title="Key Custody & Biometrics" to="/docs/architecture-and-security/key-custody-and-biometrics">Where the signing key lives and what unlocks it.</Card>
  <Card title="Threats Eliminated" to="/docs/threat-model/threats-eliminated">Why challenge–response kills phishing and replay attacks.</Card>
</Cards>

