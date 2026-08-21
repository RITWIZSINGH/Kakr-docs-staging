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

Eleven language directories live in the [SDK monorepo](https://github.com/kakrlabs-Inc/liaas-sdk).

| Language | Directory | On a package registry? |
| --- | --- | --- |
| JavaScript | [liaas-js](https://github.com/kakrlabs-Inc/liaas-sdk/tree/main/liaas-js) | npm [`liaas-js`](https://www.npmjs.com/package/liaas-js) — v2.0.4 |
| TypeScript | [liaas-typescript](https://github.com/kakrlabs-Inc/liaas-sdk/tree/main/liaas-typescript) | npm [`pteri-sdk`](https://www.npmjs.com/package/pteri-sdk) — v1.1.2 |
| Python | [liaas-python](https://github.com/kakrlabs-Inc/liaas-sdk/tree/main/liaas-python) | **Not on PyPI** — install from source |
| Go | [liaas-go-lang](https://github.com/kakrlabs-Inc/liaas-sdk/tree/main/liaas-go-lang) | Source only |
| Java | [liaas-java](https://github.com/kakrlabs-Inc/liaas-sdk/tree/main/liaas-java) | Source only |
| C# (.NET) | [liaas-csharp](https://github.com/kakrlabs-Inc/liaas-sdk/tree/main/liaas-csharp) | Source only |
| Ruby | [liaas-ruby](https://github.com/kakrlabs-Inc/liaas-sdk/tree/main/liaas-ruby) | Source only |
| PHP | [liaas-php](https://github.com/kakrlabs-Inc/liaas-sdk/tree/main/liaas-php) | Source only |
| Dart | [liaas-dart](https://github.com/kakrlabs-Inc/liaas-sdk/tree/main/liaas-dart) | Source only |
| Rust | [liaas-rust](https://github.com/kakrlabs-Inc/liaas-sdk/tree/main/liaas-rust) | Source only |
| Kotlin | [liaas-kotlin](https://github.com/kakrlabs-Inc/liaas-sdk/tree/main/liaas-kotlin) | Source only |

The "Source only" rows are what we could find on the public registries — npm and PyPI were checked
directly. Absence there is not proof a package does not exist under another name.
<Pill kind="verify">Needs verification</Pill>

### What these clients actually are

Set expectations before you pick one up. All eleven directories are
[OpenAPI Generator](https://openapi-generator.tech) 7.14.0 output, generated from the same spec:

- **No base URL is baked in.** Because the spec has no `servers` block, every generated client
  defaults to `http://localhost` — confirmed in the JavaScript `ApiClient` and the TypeScript
  `runtime.ts`. You must configure the host yourself on every client.
- **Generator defaults are still in place.** The C# client, for instance, ships under the
  `Org.OpenAPITools` namespace rather than a KakrLabs one.
- **They are transport, not a framework.** Retries, request signing and pagination helpers are not
  part of generator output, so do not assume they are there. Read the directory you plan to use.
- **Kakr's own Marketplace docs say there is no SDK.** The Pteri-Auth documentation at
  [gcp.pteri.org/docs](https://gcp.pteri.org/docs) states plainly, under Examples: *"No prebuilt SDK
  yet."* Read the directories below as generated transport you can build on, not as supported
  clients.
- **The two npm packages have diverged in age.** `liaas-js` was last published in November 2024;
  `pteri-sdk` in February 2026. The repository itself was last pushed in December 2025, so what is
  on npm and what is in the repo are not necessarily the same code.

One file is hand-written rather than generated: `liaas-typescript/apis/WalletConnector.ts`, a
browser SDK that opens the PTERI web wallet in a popup to connect and sign. It is the only client
code with real hosts compiled in — a relay at `https://pteriwalletapixx121.pteri.org/relay` and the
wallet origin `https://pteri-web-wallet-919521117286.europe-west1.run.app`. That is a separate
subsystem from the REST API; it is not a LiaaS base URL.

If your language isn't listed, generate a client from the OpenAPI spec above, or open a request on
the repo.

***

## Next

<Cards cols={2}>
  <Card title="Authentication" to="/docs/api-reference/authentication">How your client identifies itself on every request.</Card>
  <Card title="Endpoints" to="/docs/api-reference/endpoints">The full operation list your generated client will expose.</Card>
</Cards>
