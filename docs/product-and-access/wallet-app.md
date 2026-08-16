---
title: PTERI Wallet App
sidebar_label: Wallet app
description: The PTERI Wallet keeps private keys on the device and signs challenges for login, payments, and identity-bound intent.
tags: [unverified]
---

The PTERI Wallet is the core client application used for identity verification, authentication, and transaction authorization within the PTERI platform.

Unlike traditional wallets, the PTERI Wallet functions as a **universal trust device** used for:

* Identity verification
* Secure authentication
* Transaction approvals
* Cryptographic authorization

All private keys are generated and stored **locally on the user’s device**.

***

## Key Capabilities

### Cryptographic Authentication

Users authenticate by signing challenges with their wallet keys.

This replaces traditional authentication systems such as:

* Passwords
* SMS codes
* Authenticator apps

Authentication becomes **cryptographic proof of authority**.

***

### Self-Custody Identity

The wallet ensures:

* Keys remain on the user device
* Biometrics protect key access
* No centralized storage of credentials

The platform infrastructure can **verify signatures but cannot impersonate users**.

***

### Payments & Authorization

The wallet can authorize:

* Litecoin transactions
* Payment approvals
* Identity-bound intent signing

This allows a single wallet to secure:

* login
* payments
* AI agent authority
* API access

***

## Download PTERI Wallet

### iOS

Download from the Apple App Store


[https://apps.apple.com/in/app/pteri-wallet/id6751649780](https://apps.apple.com/in/app/pteri-wallet/id6751649780)


***

### Android

Download from Google Play


[https://play.google.com/store/apps/details?id=org.kakr.pteri&hl=en_IN&pli=1](https://play.google.com/store/apps/details?id=org.kakr.pteri&hl=en_IN&pli=1)


***

### Direct Resources

Official Website


[https://www.pteri.org](https://www.pteri.org)


Developer Documentation


You are reading it — start at the [Quickstart](/docs/quickstart).

The previous link here pointed at `https://docs.kakrlabs.com`, which no longer resolves.
<Pill kind="verify">Needs verification</Pill> Confirm whether that domain is meant to be retired or
restored, and which host these docs will finally live on.


***

## Developer Integration

Applications integrate with PTERI by verifying wallet signatures.

Typical flow:

User → signs challenge in wallet\
App → sends signature to PTERI API\
API → verifies signature\
Access granted

This removes the need for passwords or shared secrets.

***

## Security Principles

PTERI Wallet follows strict security principles:

* Private keys never leave the device
* Hardware-backed storage when available
* Deterministic verificationt
* Litecoin blockchain settlement

The wallet acts as the **user's root of authority** for identity, authentication, and payments.

***

## Next

<Cards cols={2}>
  <Card title="PTERI Wallet capabilities" to="/docs/platform-capabilities/pteri-wallet">Where the wallet sits in the wider platform.</Card>
  <Card title="Key custody & biometrics" to="/docs/architecture-and-security/key-custody-and-biometrics">How keys are stored and gated on the device.</Card>
</Cards>
