---
title: API Reference — Standard (PTERI)
sidebar_label: Standard API
description: The standard PTERI API reference for identity verification, authentication, signature checks, and payments on shared infrastructure.
tags: [unverified]
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

<Callout type="warn" title="Read the three bullets above against the spec">

<Pill kind="verify">Needs verification</Pill>

Those bullets describe the intended product posture. The published OpenAPI spec does not match all of them, and we cannot resolve the difference from the spec alone:

* **"No private keys are ever transmitted"** does not hold across the whole surface as published. `GET /api/Address/address-private-key` and `GET /api/Address/address-private-key-v2` return an address private key, and `POST /api/Address/sign-message` and `POST /api/Transactions/sign-transaction` take one in the request body (`addressPrivatKey` and `addressPrivateKey` respectively). Whether those routes are deprecated, restricted, or intended only for self-hosted nodes is not documented.
* **"Verification-only"** does not describe every operation. The spec includes state-changing routes — creating wallets and addresses, sending funds, broadcasting transactions.
* **"API keys only grant access to verification APIs"** implies key scoping. Nothing in the spec describes a scope mechanism; there is one credential header, `nodeUrlOrApiAccessKey`, on 42 of 43 operations.

Confirm the intended posture with engineering before you design around any of it. In the meantime, treat the [Endpoint Index](/docs/api-reference/endpoints) as the accurate description of what the API accepts.

</Callout>

***

## Next

<Cards cols={2}>
  <Card title="Authentication" to="/docs/api-reference/authentication">What header every request carries, and where the key comes from.</Card>
  <Card title="Endpoints" to="/docs/api-reference/endpoints">The operations available, grouped by resource.</Card>
</Cards>

