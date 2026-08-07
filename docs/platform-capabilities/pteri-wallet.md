---
title: "PTERI Wallet — Self-Custody Identity"
sidebar_label: PTERI Wallet
description: "The PTERI Wallet generates keys on the device, stores them in hardware-backed storage and signs locally; keys never leave the device."
---

At the center of PTERI is the **PTERI Wallet**.

The wallet is not an accessory.\
It is the **identity anchor**.

#### The mental model

A passport locked in your pocket is identity.\
A photocopy stored in someone else’s database is not.

The PTERI Wallet enforces this distinction at the architectural level.

#### What the wallet does

* Generates cryptographic keys **on the device**
* Stores keys in hardware-backed secure storage
* Uses biometrics to **gate key usage**, not key storage
* Signs messages, challenges, and transactions locally

#### What the wallet never does

* Keys never leave the device
* Seed phrases are never uploaded
* Biometrics are never transmitted
* Kakr never sees secrets

This is enforced by design, not policy.

> **Not your keys, not your coin** is not a slogan here — it is a constraint.


![](/img/assets/image-24.png)

## Next

<Cards cols={2}>
  <Card title="Blockchain-as-a-Service" to="/docs/platform-capabilities/blockchain-as-a-service">See what the infrastructure side does once the wallet holds the keys.</Card>
  <Card title="The PTERI model" to="/docs/pteri-model">Read the trust model the wallet is built to enforce.</Card>
</Cards>

