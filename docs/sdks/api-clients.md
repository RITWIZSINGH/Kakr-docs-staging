---
title: Litecoin LiaaS API – API Clients
sidebar_label: API clients
description: The OpenAPI spec, status page, Postman collections, and the eleven official LiaaS SDKs you can drop into your language of choice.
tags: [unverified]
---

### Quick links

* **OpenAPI spec:** [Go to OpenAPI Spec](https://liaas-sdk-919521117286.europe-west1.run.app/swagger/v1/swagger.json)
* **Status page:** [Check Status](https://kakrlabs1.statuspage.io/)
* **Postman collection (Standard):** [LiaaS – PTERI Postman documentation](https://documenter.getpostman.com/view/32261269/2sA3QpDDwR)
* **Postman collection (Enterprise):** [LiaaS Enterprise Postman documentation](https://documenter.getpostman.com/view/32261269/2sA3QterXm#intro)

Our approach follows the OpenAPI standard and a language-first SDK strategy similar to other modern platforms.

### OpenAPI

The Litecoin LiaaS API is described with **OpenAPI 3.0+**. You can point generators at our schema to produce a type-safe client in your preferred language.

* **Spec URL:** [OpenAPI Spec](https://liaas-sdk-919521117286.europe-west1.run.app/swagger/v1/swagger.json)
* **Spec identity:** the document declares OpenAPI 3.0, title `KakrLabs-SDK-Creator`, version `1.0`, and 43 operations. Read the version out of the spec itself rather than pinning to a number written here.

<Callout type="warn" title="No versioning policy">

<Pill kind="verify">Needs verification</Pill>

The spec declares version `1.0` and has done since publication. How that version advances, and
whether a breaking change gets a new one, is not documented anywhere we can verify.

</Callout>

### Official SDKs

**Only one published client actually works against the product API.** We verified this by
intercepting each client's outbound request and comparing it to the Postman collection — no API key
needed, since a client built against the wrong contract fails on the host, the paths and the auth
header regardless of credentials.

| Package | Verdict | Why |
| --- | --- | --- |
| npm [`liaas-js`](https://www.npmjs.com/package/liaas-js) **v2.0.4** | <Pill kind="confirmed">Works</Pill> | Hand-written. Correct host, paths, `Authorization: Bearer` + `Usev2`, and wallet headers. |
| npm [`pteri-sdk`](https://www.npmjs.com/package/pteri-sdk) **v1.1.2** | <Pill kind="verify">Does not work</Pill> | Generated from the SDK-Creator spec. Sends `nodeUrlOrApiAccessKey`, never `Authorization`. |
| [`liaas-python`](https://github.com/kakrlabs-Inc/liaas-sdk/tree/main/liaas-python) | <Pill kind="verify">Does not work</Pill> | Same generated contract, and not published to PyPI. |
| The other eight language directories | <Pill kind="verify">Unverified</Pill> | Same generator output; assume the same problem until tested. |

Counter-intuitively, the **older** package is the working one. `liaas-js` was published in November
2024 and `pteri-sdk` in February 2026, so picking "the newest" gets you the broken client.

### Use this one

```bash
npm install liaas-js
```

```js
const LiaaS = require('liaas-js');
const client = new LiaaS(process.env.PTERI_API_KEY);

// Pass the key as the first argument to every method.
const balance = await client.walletBalance(process.env.PTERI_API_KEY, 'my-wallet');
```

It defaults to `https://pteri.xyz/api` with no configuration, exposes about 60 methods, and handles
the `wallet` and `encryptedPassphrase` headers for you. Pass a **node URL** instead of a key as that
first argument and it targets that node directly, sending no auth headers — the Enterprise path.

<Callout type="warn" title="It turns a rejected key into a confusing message">

<Pill kind="verify">Needs verification</Pill>

`liaas-js` converts any `404` into
`"<method> is currently unavailable on the node you are attempting to access."`

Because [a rejected API key also returns `404`](/docs/api-reference/authentication), a bad key reads
as though the service is down. If you see that message, check your key before you check the status
page.

</Callout>

### Why the generated clients do not work

They were produced by [OpenAPI Generator](https://openapi-generator.tech) 7.14.0 from the
[published spec](https://liaas-sdk-919521117286.europe-west1.run.app/swagger/v1/swagger.json), which
describes the SDK-Creator service rather than the product API. Three consequences, all fatal:

- **Wrong auth.** They send `nodeUrlOrApiAccessKey`; the gateway wants `Authorization: Bearer` plus
  `Usev2`. No amount of configuration fixes this — the header name is baked into every operation.
- **Wrong paths.** `/api/Wallet/balance` instead of `/api/Wallet/get-wallet-balance`,
  `/api/Address/create` instead of `/api/Address/createAddress`, and so on throughout.
- **No base URL.** The spec declares no `servers` block, so they default to `http://localhost`.

The Python package also carries the generator's default namespace, `openapi_client`, rather than a
KakrLabs one.

### Re-checking this yourself

`scripts/verify-sdks.mjs` in the docs repo re-runs the whole check:

```bash
npm install liaas-js pteri-sdk
node scripts/verify-sdks.mjs
```

It exits non-zero if a client that is supposed to work has drifted. Worth running after any SDK
release.

If your language isn't listed, generate a client from the OpenAPI spec above, or open a request on
the repo.

***

## Next

<Cards cols={2}>
  <Card title="Authentication" to="/docs/api-reference/authentication">How your client identifies itself on every request.</Card>
  <Card title="Endpoints" to="/docs/api-reference/endpoints">The full operation list your generated client will expose.</Card>
</Cards>
