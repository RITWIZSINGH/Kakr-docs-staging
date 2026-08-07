---
title: "Key Custody & Biometrics"
sidebar_label: Key Custody
description: Private keys live in the Secure Enclave or a hardware Keystore, biometrics gate key usage locally, and Kakr never receives them.
---

Key custody is the most critical security property of PTERI.

It is enforced at the **hardware level**.

***

#### Where keys live

* iOS: Secure Enclave
* Android: Hardware-backed Keystore

These environments ensure:

* Keys cannot be exported
* Keys cannot be read by apps
* Keys can only be used via approved operations

***

#### Role of biometrics

Biometrics in PTERI:

* Do **not** identify the user
* Do **not** leave the device
* Do **not** replace cryptography

They serve one purpose only:

> **Gating key usage.**

Biometrics answer:

> “Is the legitimate device holder present right now?”

They do **not** answer:

> “Who is this person globally?”

***

#### What Kakr never receives

* Biometric data
* Biometric hashes
* Biometric signals

All biometric enforcement happens locally.

***

#### No recovery, no override

Because Kakr never has keys:

* Kakr cannot recover identities
* Kakr cannot reset wallets
* Kakr cannot bypass biometrics
* Kakr cannot sign on behalf of users

This is an explicit tradeoff:

* Slightly more responsibility for users
* Vastly stronger security guarantees

> Authority that cannot be stolen is authority worth protecting.


![](/img/assets/image-40.png)

## Next

<Cards cols={2}>
  <Card title="Threat Model Overview" to="/docs/threat-model/overview">The assumptions this custody model is designed against.</Card>
  <Card title="Payments & Identity" to="/docs/payments-and-identity">How device-held authority carries through to settlement.</Card>
</Cards>

