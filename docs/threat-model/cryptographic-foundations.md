---
title: Cryptographic Foundations
sidebar_label: Cryptographic Foundations
description: The primitives behind PTERI — secp256k1 signing, nonce-based challenge–response, Litecoin UTXO settlement and hash-based integrity.
---

PTERI relies only on **well-established cryptographic primitives**.

There are no experimental algorithms.

***

#### Key Generation & Signing

* Elliptic Curve Cryptography (secp256k1)
* Hardware-backed key storage where available
* Keys are generated locally on the device
* Private keys are non-exportable

***

#### Challenge–Response Authentication

* Cryptographically random nonces
* Explicit expiration windows
* Single-use enforcement
* Deterministic verification

***

#### Transaction Verification

* Litecoin proof-of-work consensus
* UTXO-based validation
* Optional MWEB privacy guarantees
* Public, independently verifiable settlement

***

#### Hashing & Integrity

* Cryptographic hash functions for message integrity
* Signed payloads are tamper-evident
* Any modification invalidates verification

***


![](/img/assets/image-36.png)

## Next

<Cards cols={2}>
  <Card title="Why Determinism Matters" to="/docs/threat-model/why-determinism-matters">Why a yes/no proof beats a risk score.</Card>
  <Card title="Payments & Identity" to="/docs/payments-and-identity">Where UTXO validation and signed intent meet.</Card>
</Cards>

