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

<Callout type="warn" title="Two things the spec does not give you">

<Pill kind="verify">Needs verification</Pill>

- **No `servers` block.** The spec declares no host, so a generated client will have no base URL baked in. You must configure one. The URL above is where the spec document is *served*; do not assume it is the production API host.
- **No versioning policy.** How the spec version advances, and whether breaking changes get a new version, is not documented anywhere we can verify.

</Callout>

### Official SDKs

There are eleven language directories in the SDK monorepo. What each client covers, and whether it handles things like retries or pagination for you, is not documented in our verified sources — read the source in the directory you plan to use. <Pill kind="verify">Needs verification</Pill>

* [**Node.js**](https://github.com/kakrlabs-Inc/liaas-sdk/tree/main/liaas-js) &#x20;
* [**Python**](https://github.com/kakrlabs-Inc/liaas-sdk/tree/main/liaas-python)
* [**Go**](https://github.com/kakrlabs-Inc/liaas-sdk/tree/main/liaas-go-lang)
* [**Java**](https://github.com/kakrlabs-Inc/liaas-sdk/tree/main/liaas-java)
* [**C# (.NET)**](https://github.com/kakrlabs-Inc/liaas-sdk/tree/main/liaas-csharp)
* [**Ruby**](https://github.com/kakrlabs-Inc/liaas-sdk/tree/main/liaas-ruby)
* [**PhP**](https://github.com/kakrlabs-Inc/liaas-sdk/tree/main/liaas-php)
* [**TypeScript**](https://github.com/kakrlabs-Inc/liaas-sdk/tree/main/liaas-typescript)
* [**Dart**](https://github.com/kakrlabs-Inc/liaas-sdk/tree/main/liaas-dart)
* [**Rust**](https://github.com/kakrlabs-Inc/liaas-sdk/tree/main/liaas-rust)
* [**Kotlin**](https://github.com/kakrlabs-Inc/liaas-sdk/tree/main/liaas-kotlin)       &#x20;

If your language isn’t listed, generate a client from our OpenAPI spec (above) or open a request in GitHub.

***

## Next

<Cards cols={2}>
  <Card title="Authentication" to="/docs/api-reference/authentication">How your client identifies itself on every request.</Card>
  <Card title="Endpoints" to="/docs/api-reference/endpoints">The full operation list your generated client will expose.</Card>
</Cards>
