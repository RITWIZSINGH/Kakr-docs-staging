---
title: Verification Queue
sidebar_label: Verification Queue
description: Every unverified claim in these docs, in one list, with the page it appears on and what engineering has to confirm.
tags: [unverified]
---

This is the single list of everything in these docs that is **not confirmed** against the
published OpenAPI spec or production behaviour. Each item is marked in place on its own page
with a <Pill kind="verify">Needs verification</Pill> chip, and every chip links back here.

<Callout type="info" title="How to use this page">

Work top to bottom. Item 1 blocks the most pages. When engineering confirms an item, update the
page listed against it and remove the `unverified` tag from that page's frontmatter — the
[Unverified tag index](/docs/tags/unverified) shrinks automatically as you go.

</Callout>

## 1. The production base URL

**Blocks:** [Quickstart](/docs/quickstart), [Authentication](/docs/api-reference/authentication),
[Endpoint Index](/docs/api-reference/endpoints), [SDKs](/docs/sdks-and-integration)

The published spec declares no `servers` block, so the document itself names no host. Every code
example on this site uses a `{BASE_URL}` placeholder rather than guessing one.

The spec is *served* from `https://liaas-sdk-919521117286.europe-west1.run.app`, but that is the
host of the spec document, not necessarily the production API.

| Confirm | |
| --- | --- |
| Production base URL | scheme + host, no trailing slash |
| Sandbox / test base URL | if one exists |
| Whether Standard and Enterprise share a host | and whether Enterprise is per-tenant |

## 2. What the auth header actually carries

**Page:** [Authentication](/docs/api-reference/authentication)

`nodeUrlOrApiAccessKey` appears as a request header on 42 of the 43 operations in the spec. The
name implies it accepts either a node URL or an API access key, but the spec says nothing further.

| Confirm | |
| --- | --- |
| The value format | raw key, `Bearer <key>`, or a node URL |
| If both forms are accepted | which applies to which plan |
| Rotation and revocation | can a key be rotated or revoked from the dashboard? |
| Multiple active keys | allowed? do keys expire? |
| Scoping | is a key limited to endpoint groups, wallets, or environments? |
| The one exception | `/api/Utilities/get-blockchain-otp` takes it as a query parameter — is that intentional? |

## 3. The error contract

**Pages:** [Errors](/docs/api-reference/errors), [FAQs](/docs/help/faqs),
[Endpoint Index](/docs/api-reference/endpoints)

All 43 operations in the spec declare a single `200` response and nothing else. There is no
authoritative status-code list, no error schema, and no failure-to-code mapping. These docs
deliberately publish no error table rather than invent one.

| Confirm | |
| --- | --- |
| Status codes | which codes a failed request can return |
| Error body shape | field names, machine-readable code, whether messages are stable strings |
| Failure classes | are auth, validation, and blockchain failures distinguishable? |
| Non-200 vs 200 | do documented error messages arrive with a non-`200` status, or inside a `200` body? |

## 4. Response schemas

**Page:** [Endpoint Index](/docs/api-reference/endpoints)

The spec documents requests only — headers, query parameters, and request body schemas are all
present and are mirrored exactly on the Endpoint Index. No operation defines a response schema.

Until that lands, any response shape a developer observes is behaviour, not a contract.

## 5. Security claims that the spec contradicts

**Page:** [Standard API](/docs/api-reference/standard)

Three long-standing bullets on that page do not match the published surface. They are preserved
with the contradiction flagged in place, because the intent behind them may still be correct —
but the docs cannot assert them as written.

| Claim | What the spec shows |
| --- | --- |
| "No private keys are ever transmitted" | `GET /api/Address/address-private-key` and `-v2` return one; `SignMessagedto.addressPrivatKey` and `SignRawTransactiondto.addressPrivateKey` carry one in the request body |
| "Verification-only" | the surface includes wallet/address creation, `send-funds-from-wallet`, and `broadcast-transaction` |
| "API keys only grant access to verification APIs" | implies scoping; the spec describes one unscoped credential header on 42 of 43 operations |

Decide per bullet: is the route deprecated, restricted, self-hosted-only, or is the claim wrong?

:::note
`addressPrivatKey` on `SignMessagedto` is spelled without the second `e` in the published spec.
Confirm whether that typo is live in production before anyone "fixes" it in a client.
:::

## 6. Commercial terms

**Page:** [Enterprise API](/docs/api-reference/enterprise)

No rate limit, quota, throughput figure, SLA, uptime target, or support response time is
documented anywhere verifiable. The page describes the shape of the offering and states no numbers.

| Confirm | |
| --- | --- |
| Rate limits | Standard and Enterprise, and the headers that report them |
| SLA / uptime target | if one is contractually offered |
| What differs technically | the spec describes one 43-operation surface; is Enterprise only a different host? |
| A separate Enterprise spec | the page previously implied one exists — does it? |

## 7. Routes and parameters referenced but absent from the spec

**Page:** [FAQs](/docs/help/faqs)

Both were inherited from the previous docs. Neither exists in the published spec.

| Referenced | Status |
| --- | --- |
| `/api/Wallet/load-wallet` (with a `filename` value) | not among the 43 operations. A node-level call, or out of date? |
| A `Usev2` parameter on address creation, taking `true` or `yes` | no such parameter in the spec |

## 8. SDK coverage

**Page:** [SDKs & Integration](/docs/sdks-and-integration)

Eleven language directories exist in the [SDK monorepo](https://github.com/kakrlabs-Inc/liaas-sdk).
What each client actually covers is not documented in any source we can check.

| Confirm | |
| --- | --- |
| Per-language status | which clients are maintained, which are generated stubs |
| Client features | request signing, retries, pagination — claimed previously, unverifiable |
| Published packages | `liaas-js` is on npm; are the other ten published to their registries? |
| Versioning policy | the spec declares version `1.0`; how does it advance, and what marks a breaking change? |

## 9. Support and contact routes

**Pages:** [Status & Support](/docs/help/status-and-support), [Enterprise API](/docs/api-reference/enterprise)

The self-serve resources (status page, Postman collections, spec, SDK repo) are all real and
linked. Direct support is not documented.

| Confirm | |
| --- | --- |
| Support channel and owner | and response targets, if any are offered |
| `support@kakrlabs.com` | inherited from the old docs — is this live? |
| `https://kakr.org/contact` | inherited, and a different domain from `pteri.org` — correct? |

## Next

<Cards cols={2}>
  <Card title="Unverified tag index" to="/docs/tags/unverified">
    Every page carrying at least one unconfirmed claim.
  </Card>
  <Card title="Endpoint Index" to="/docs/api-reference/endpoints">
    The part that is confirmed: all 43 operations, mirrored from the spec.
  </Card>
</Cards>
