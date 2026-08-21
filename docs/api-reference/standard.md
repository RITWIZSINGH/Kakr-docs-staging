---
title: API Reference — Standard (PTERI)
sidebar_label: Standard API
description: The standard PTERI API reference for identity verification, authentication, signature checks, and payments on shared infrastructure.
---

This is the reference most readers want. Use it unless you are an Enterprise customer running against dedicated nodes — in that case read the [Enterprise reference](/docs/api-reference/enterprise) instead.

The full request and response detail lives in the Postman documenter:

[LiaaS - Pteri Postman Documentation](https://documenter.getpostman.com/view/32261269/2sA3QpDDwR)


This page contains the **standard PTERI API reference**, intended for:

* Identity verification
* Authentication
* Signature verification
* Payments via shared infrastructure

All endpoints are:

* Deterministic
* Verification-only
* Stateless where possible

***

### Notes on Security

* API keys only grant access to verification APIs
* Authority always comes from wallet signatures
* No private keys are ever transmitted

> If a signature is valid, the request succeeds.\
> If not, it fails — deterministically.

<Callout type="info" title="What these three bullets mean, precisely">

They are about **custody**, not about which bytes cross the wire.

- **"No private keys are ever transmitted"** means PTERI never holds, stores, or escrows your key.
  There is no server-side vault for an attacker to breach and no custodian who can move funds
  without you. It does not mean no endpoint ever accepts one: several operations genuinely need the
  key to do their job — `SignMessage` and `sign-transaction` take one in the request body, and
  `address-private-key` returns one so you can drive UTXO selection and signing yourself. The key
  is used for that operation and not retained.
- **"Verification-only"** describes the authority model. PTERI checks signatures; it never
  originates authority. State-changing routes like `send-funds-from-wallet` and
  `broadcast-transaction` still act only on something you signed.
- **"API keys only grant access to verification APIs"** means the key gets you through the door —
  it is not itself authority to move value. That still comes from a wallet signature.

**Practical consequence:** when an operation does require your private key, you are choosing to
hand it to the API for that call. Send it over TLS, from a backend, never from a browser, and
prefer the wallet-managed signing routes where you have the option.

</Callout>

***

## Next

<Cards cols={2}>
  <Card title="Authentication" to="/docs/api-reference/authentication">What header every request carries, and where the key comes from.</Card>
  <Card title="Endpoints" to="/docs/api-reference/endpoints">The operations available, grouped by resource.</Card>
</Cards>

