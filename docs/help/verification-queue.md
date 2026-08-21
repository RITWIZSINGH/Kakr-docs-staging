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

## Open — still need an answer

### 1. Response schemas for all 43 operations

**Page:** [Endpoint Index](/docs/api-reference/endpoints)

The spec documents requests fully — headers, query parameters, request body schemas — and **no**
operation defines a response. The envelope is known to be `{ successful, message, data }`; what sits
inside `data` is undocumented for every single one of the 43.

A developer calling `/api/Wallet/balance` cannot know the field name or type of the balance without
calling it and reading what comes back. Same for `address-details`, `transaction-details`, and the
rest.

The cheapest fix is adding `responses` to the OpenAPI spec — the Endpoint Index regenerates from it
automatically.

### 2. API key lifecycle and scoping

**Page:** [Authentication](/docs/api-reference/authentication)

The value format is known — a JWT, sent raw, no `Bearer` prefix. Its lifecycle is not.

| Confirm | |
| --- | --- |
| Expiry | A JWT has an `exp`. How long, and what should a client do when it passes? |
| Rotation and revocation | Possible from the dashboard? |
| Multiple keys | Can more than one be active at once? |
| Scoping | One key for every operation, or limited per endpoint group or wallet? |

### 3. Two error-contract questions

**Pages:** [Errors](/docs/api-reference/errors), [Troubleshooting](/docs/help/troubleshooting)

Three response shapes are documented from live probes. What remains is intent, plus one defect.

| Confirm | |
| --- | --- |
| Is `200` + `successful: false` deliberate? | Returning failures with a success status will trip up any client that branches on the status code. |
| Rate-limit rejection shape | Enforcement is confirmed. The response when you cross a limit is not — `429`, or a `200` envelope? |
| **Leaked internals** | A bad credential returns `The JSON value could not be converted to KakrLabs_SDK_Creator.Core.DTOs.Blocks.Data`, exposing internal namespaces to unauthenticated callers. Should be sanitised. |

### 4. Which endpoints does the gateway actually expose?

**Pages:** [Endpoint Index](/docs/api-reference/endpoints), [SDKs](/docs/sdks-and-integration)

[gcp.pteri.org/docs](https://gcp.pteri.org/docs) documents roughly a dozen `/api/Utilities/`
operations — `SignMessage`, `VerifyMessage`, `otp`, `totp`, `encode-msg`, `Encrypt`,
`Generate-passphrase`. The published spec contains only two Utilities operations, so the two
sources disagree about the surface.

We cannot settle this from outside. The gateway returns `404` for an unrecognised key, so an
unauthenticated probe cannot tell a missing route from a rejected credential.

| Confirm | |
| --- | --- |
| Do the Utilities signing routes exist? | If so, the spec is missing them and the Endpoint Index is incomplete. |
| Which spec is current? | The published one declares 43 operations and no Utilities signing routes. |
| Is there a newer spec URL? | The GCP docs link none, and `/swagger/v2/` is a 404. |

### 5. kakr.ai/pricing sells plans that do not exist

**Page:** [Pricing Plans](/docs/product-and-access/pricing-plans)

Resolved: Basic $0 / Pro $49 / Enterprise $299 are the live plans, confirmed from the account
dashboard. The docs mirror them.

Still live and contradicting that:
[kakr.ai/pricing](https://kakr.ai/pricing) advertises Identity Growth at **$1,500** and Identity
Scale at **$3,500**, plus a BaaS track at **$2,500** and **$6,000**. None of those appear on the
dashboard. A prospect landing on that page is quoted $1,500 for something sold at $49.

| Fix | Where |
| --- | --- |
| Retire or correct `kakr.ai/pricing` | Website |
| Decide whether BaaS has separate pricing at all | Product |
| Publish a monthly quota for Basic, or confirm there is none | Product |
| Align `pteri.org` naming (Starter / Builder / Pro / Enterprise) | Website |

:::note
The dashboard copy lists Enterprise as "300,000 API calls **per second**" directly under
"300 API calls per second". That is a typo in the source — the docs read it as per *month*, matching
Pro's 30,000/month. Worth fixing on the dashboard.
:::

### 6. Support commitments

**Pages:** [Status & Support](/docs/help/status-and-support),
[Enterprise API](/docs/api-reference/enterprise)

Resolved: `support.kakr.ai` is the front door for every plan, and the enterprise form handles
commercial enquiries. What remains:

| Confirm | |
| --- | --- |
| The "24/7" claim | pteri.org states support is available 24/7. Contractual, or marketing? |
| Response targets | None published for any tier. |
| SLA / uptime | Pteri Enterprise advertises a "Custom SLA" with no target attached. |

### 7. SDK ownership

**Page:** [SDKs & Integration](/docs/sdks-and-integration)

All eleven clients are OpenAPI Generator 7.14.0 output, and Kakr's own Marketplace docs say "No
prebuilt SDK yet". So the position is clear — what is unclear is the plan.

| Confirm | |
| --- | --- |
| Which clients are supported? | All eleven, or are some unmaintained artefacts? |
| Publishing plan | Python is absent from PyPI. Deliberate? |
| npm drift | `liaas-js` (Nov 2024) and `pteri-sdk` (Feb 2026) are two packages of different ages from one repo. Which is current? |
| Generator defaults | The C# client still ships under `Org.OpenAPITools`. |
| Versioning policy | The spec has declared `1.0` since publication. |

### 8. Statuspage dashboard hygiene

Not a docs change — these are edits in the Atlassian dashboard, and they surface on
[/status](/status) and in the docs status panel.

| Task | Why |
| --- | --- |
| Monitor `docs.kakr.ai` | The component currently reads `https://docs.kakrlabs.com`, which no longer resolves. Note the live host is `docs.kakr.ai` — plural; `doc.kakr.ai` does not resolve. |
| Rename `www.kakr.org` and `pteri.kakr.org` | Both redirect to `kakr.ai`. |
| Delete the sample incident | "This is an example incident" from Feb 2024 still renders in the public incident history, complete with Atlassian's template copy. |

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
| Free-tier rate limit | **3 requests per second** — the one figure every source agrees on (kakr.ai/platform, kakr.ai/pricing, and the pteri.org FAQ) | Three sources |
| Current plans and prices | Free $0 · Pro $49 · Enterprise Pteri $299, with per-tier rate limits of 3/30/300 per second | kakr.ai/platform#pricing |
| Are prices public? | On kakr.ai, yes. On pteri.org they are masked until you create an account — the two sites behave differently | Both sites |
| How are keys issued? | On registration, from the account dashboard. Free tier, no credit card | pteri.org FAQ |
| Which base URL should developers use? | **`pteri.xyz`** — confirmed by the team and verified working in Postman with a valid key. | Team |
| Why did unauthenticated probes of `pteri.xyz` 404? | The gateway returns **`404` for an unrecognised key**, not `401` — so a rejected credential is indistinguishable from a missing route. Documented as a troubleshooting trap. | Team + probe |
| Are rate limits enforced? | **Yes** — gateway-enforced per customer, both a per-second rate and a monthly quota. | Team |
| Which pricing page is canonical? | **kakr.ai/pricing.** The docs now mirror its Identity and BaaS tracks. | Team |
| Where do non-Enterprise customers get help? | **support.kakr.ai** — knowledge base, AI chat, ticket submission, any plan. | Team, verified live |
| Do the "no private keys transmitted" claims hold? | **Yes, as written about custody.** PTERI never stores or escrows a key. Some operations legitimately accept or return one — signing, UTXO selection — and use it transiently. Reworded on the Standard page rather than flagged. | Team |
| Is `kakr.org` valid? | It **redirects to kakr.ai**, which publishes `contact@kakr.ai`. Entity is Kakr Labs Inc. | Live fetch |
| Which docs domain is live? | **`docs.kakr.ai`** — returns 200. Both `docs.kakrlabs.com` and `docs.pteri.org` fail to resolve. The site config previously declared the dead `docs.pteri.org` as its canonical URL. | Live fetch |
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
