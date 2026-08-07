---
title: Where Things Live
sidebar_label: Where Things Live
description: PTERI keeps keys, biometrics and signing on the user device, while Kakr infrastructure handles verification only.
---

Security in PTERI starts with **strict separation of responsibilities**.

Every component has a narrow role.\
No component is trusted with more than it absolutely needs.

***

#### On the User Device

The user device is the **only place where authority exists**.

It holds:

* Private keys
* Seed phrase
* Biometric enforcement
* Cryptographic signing

These elements never leave the device.

The device is treated as a **hard trust boundary**.

> If the device cannot be compromised, authority cannot be stolen.

***

#### On Kakr Infrastructure (Google Cloud)

Kakr infrastructure is **verification-only**.

It handles:

* Verification APIs
* Blockchain indexing
* Rate limiting
* Observability and monitoring

It does **not** hold:

* Private keys
* Seed phrases
* Biometrics
* Signing capability

Kakr infrastructure can **observe and verify**, but it cannot impersonate, recover, or override users.

> **Kakr never stores secrets.**\
> Not by policy — by design.


![](/img/assets/image-39.png)

## Next

<Cards cols={2}>
  <Card title="Authentication Flow" to="/docs/architecture-and-security/authentication-flow">See how the device and the backend actually talk to each other.</Card>
  <Card title="Threat Model" to="/docs/threat-model">What this separation of responsibilities buys you in attack terms.</Card>
</Cards>

