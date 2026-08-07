---
title: Verification Queue
sidebar_label: Verification Queue
description: Every unverified claim in these docs, what we resolved from public sources, and what only engineering can answer.
tags: [unverified]
---

This is the single list of everything in these docs that was **not confirmed** against the published
OpenAPI spec. Each open item is marked in place on its own page with a
<Pill kind="verify">Needs verification</Pill> chip, and every chip links back here.

A research pass has since closed several of these against public sources — the SDK repository, the
npm and PyPI registries, pteri.org, kakr.ai, and live unauthenticated probes of the API itself. The
findings are in [Resolved from public sources](#resolved) at the bottom, with the method for each so
you can re-check any of them.

<Callout type="warn" title="What 'resolved' means here">

Resolved means *observed*, not *ratified*. A live probe tells you how the API behaves today; it does
not tell you what engineering intends to support. Anything below still needs a human to say "yes,
that is the contract" before it becomes a promise to customers.

</Callout>

## Open — only engineering can answer these

### 1. Is the Cloud Run host the intended public base URL?

**Pages:** [Quickstart](/docs/quickstart), [Authentication](/docs/api-reference/authentication),
[Endpoint Index](/docs/api-reference/endpoints), [SDKs](/docs/sdks-and-integration)

`https://liaas-sdk-919521117286.europe-west1.run.app` demonstrably serves the API. What is unclear is
whether it is *meant* to be the address customers hard-code — it is a raw Cloud Run URL, and the spec
declares no `servers` block to bless it.

| Confirm | |
| --- | --- |
| Is this the intended public host? | Or is a branded domain planned? |
| Sandbox / test host | Does a separate one exist? |
| Standard vs Enterprise | Same host? Enterprise dedicated nodes are addressed by passing a node URL in the credential header, so the base URL may be per-tenant. |

### 2. API key lifecycle and scoping

**Page:** [Authentication](/docs/api-reference/authentication)

The value format is now known (see [Resolved](#resolved)). Its lifecycle is not.

| Confirm | |
| --- | --- |
| Expiry | The key is a JWT, so it presumably has an `exp`. What is it, and what should a client do on expiry? |
| Rotation and revocation | Possible from the dashboard? |
| Multiple keys | Can more than one be active at once? |
| Scoping | One key for all 43 operations, or limited to endpoint groups, wallets, or environments? |

### 3. Is the observed error contract the intended one?

**Pages:** [Errors](/docs/api-reference/errors), [FAQs](/docs/help/faqs)

Three response shapes are now documented from live probes. Two questions remain, and one is a bug.

| Confirm | |
| --- | --- |
| Is `200` + `successful: false` deliberate? | Returning application failures with a success status is unusual and will trip up clients that branch on status code. |
| Rate-limit rejections | Does exceeding 3 req/s return `429`, or a `200` envelope? |
| Message stability | Are `message` strings stable enough for clients to match on? |
| **Leaked internals** | A bad credential returns `The JSON value could not be converted to KakrLabs_SDK_Creator.Core.DTOs.Blocks.Data`. That exposes internal namespaces to unauthenticated callers and should be sanitised. |

### 4. Response schemas

**Page:** [Endpoint Index](/docs/api-reference/endpoints)

The spec documents requests fully — headers, query parameters, request body schemas — and mirrors
onto the Endpoint Index exactly. No operation defines a response schema, and no status beyond `200`.

The envelope is now known to be `{ successful, message, data }`. The shape of `data` **per operation**
is not. Until the spec carries it, any response body a developer sees is behaviour, not a contract.

### 5. Security claims that the spec contradicts

**Page:** [Standard API](/docs/api-reference/standard)

This one is a policy decision, not something research can settle. Three long-standing bullets do not
match the published surface. They are preserved with the contradiction flagged in place.

| Claim | What the spec shows |
| --- | --- |
| "No private keys are ever transmitted" | `GET /api/Address/address-private-key` and `-v2` return one; `SignMessagedto.addressPrivatKey` and `SignRawTransactiondto.addressPrivateKey` carry one in the request body |
| "Verification-only" | The surface includes wallet/address creation, `send-funds-from-wallet`, and `broadcast-transaction` |
| "API keys only grant access to verification APIs" | Implies scoping; the spec describes one unscoped credential header on 42 of 43 operations |

Decide per bullet: is the route deprecated, restricted, self-hosted-only, or is the claim wrong?

:::note
`addressPrivatKey` on `SignMessagedto` is spelled without the second `e` in the published spec.
Confirm whether that typo is live in production before anyone "fixes" it in a client.
:::

### 6. Pricing: the docs and the website disagree

**Page:** [Pricing Plans](/docs/product-and-access/pricing-plans)

| Confirm | |
| --- | --- |
| Are paid prices public? | pteri.org masks them (`████/mo`) behind account creation; these docs print `$1,500` and `$3,500`. |
| Which plan names are current? | pteri.org: *Starter · Builder · Pro · Enterprise*. These docs: *PTERI Basic · Identity Growth · Identity Scale · PTERI Enterprise*, plus separate BaaS tiers. |
| Paid-tier rate limits | Free tier is corroborated at 3 req/s. The per-tier figures in these docs (200/sec, 500/sec, 300/sec, 800/sec) appear nowhere public. |
| "Unlimited" | Used for Enterprise throughout. Is it genuinely uncapped, or fair-use? |

### 7. Support commitments

**Pages:** [Status & Support](/docs/help/status-and-support),
[Enterprise API](/docs/api-reference/enterprise)

| Confirm | |
| --- | --- |
| The "24/7" claim | pteri.org states support is available 24/7. Is that contractual, and does it hold per plan? |
| Response targets | None published. Is there one? |
| `support@kakrlabs.com` | Appears in these docs, on neither pteri.org nor kakr.ai. Live and monitored? |
| SLA / uptime | No availability target is published anywhere. Is one offered to Enterprise? |

### 8. SDK ownership

**Page:** [SDKs & Integration](/docs/sdks-and-integration)

The clients are generator output (see [Resolved](#resolved)). What is unclear is the intent.

| Confirm | |
| --- | --- |
| Which clients are supported? | All eleven, or are some unmaintained generator artefacts? |
| Publishing plan | Python has no PyPI package. Deliberate, or an oversight? |
| npm drift | `liaas-js` (Nov 2024) and `pteri-sdk` (Feb 2026) are two packages of different ages from one repo. Which is current? |
| Generator defaults | The C# client still ships under the `Org.OpenAPITools` namespace. Intentional? |
| Versioning policy | The spec has declared version `1.0` since publication. How does it advance? |

## Resolved from public sources {#resolved}

Each row states what was checked and how, so you can reproduce it.

### Confirmed against the live API

| Question | Finding | How |
| --- | --- | --- |
| Does the Cloud Run host serve the API, or just the spec? | **It serves the API.** | `GET /api/Blocks/blockchain-info` with no credential returns a validation error naming `nodeUrlOrApiAccessKey` |
| What happens when the credential header is missing? | **`400`**, `application/problem+json`, RFC 9110 validation problem with an `errors` object and a `traceId` | Same probe |
| What happens when a request runs and fails? | **`200`** with `{"successful": false, "message": "…", "data": null}` — failures arrive inside a success status | Probe with an invalid credential |
| Is there a response envelope? | Yes: `{ successful, message, data }` | Same |
| What does an unknown route return? | **`404`** as `text/html`, not JSON | Probe of a made-up path |
| Does `/api/Wallet/load-wallet` exist? | **No** — `404`, identical to a made-up path | Direct probe |
| Does a `Usev2` parameter exist? | **No** — absent from all 43 operations in the spec | Spec inspection |

### Confirmed from the SDK repository

| Question | Finding | How |
| --- | --- | --- |
| What does the credential header carry? | An access key **or** a node URL. The key is a **JWT** (`eyJhbGciOi…`), sent raw with **no `Bearer` prefix** | Repo README shows `"eyJhbGciOi...bA OR https://liaasnode.com"` |
| Do the SDKs bake in a base URL? | **No.** All default to `http://localhost` | `liaas-js/src/ApiClient.js`, `liaas-typescript/runtime.ts` |
| What are the clients? | OpenAPI Generator **7.14.0** output for all eleven languages | `openapitools.json`, `.openapi-generator/VERSION` |
| Do they include retries / signing / pagination? | Not as generator output. The C# client still uses the `Org.OpenAPITools` namespace | Repo tree |
| Is there hand-written client code? | One file: `liaas-typescript/apis/WalletConnector.ts`, a browser wallet-connect SDK with real hosts compiled in (`pteriwalletapixx121.pteri.org/relay`, `pteri-web-wallet-…run.app`) | File contents |

### Confirmed from registries and websites

| Question | Finding | How |
| --- | --- | --- |
| Which SDKs are published? | npm `liaas-js` v2.0.4 (Nov 2024) and npm `pteri-sdk` v1.1.2 (Feb 2026). **Nothing on PyPI** | Registry APIs |
| Free-tier rate limit | **3 requests per second** — corroborated by both these docs and the public pteri.org FAQ | pteri.org |
| Are paid prices public? | **No** — pteri.org masks them until you create a free account | pteri.org |
| Public plan names | Starter · Builder · Pro · Enterprise | pteri.org |
| How are keys issued? | On registration, from the account dashboard. Free tier, no credit card | pteri.org FAQ |
| Is `kakr.org` valid? | It **redirects to kakr.ai**, which publishes `contact@kakr.ai`. Entity is Kakr Labs Inc. | Live fetch |
| Support claim | pteri.org states a 24/7 support team plus community support and a Report a Bug page | pteri.org FAQ |

## Next

<Cards cols={2}>
  <Card title="Unverified tag index" to="/docs/tags/unverified">
    Every page carrying at least one unconfirmed claim.
  </Card>
  <Card title="Errors" to="/docs/api-reference/errors">
    The three response shapes, as observed against the live API.
  </Card>
</Cards>
