---
title: Errors & Troubleshooting
sidebar_label: Errors
description: The error messages the LiaaS API actually returns, what causes each one, and how to report a problem.
tags: [unverified]
---

Three response shapes, confirmed against the live API and the published
[Postman collection](https://documenter.getpostman.com/view/32261269/2sA3QpDDwR). These are the
ones your error handling has to cope with.

<Callout type="warn" title="Observed, not contractual">

<Pill kind="verify">Needs verification</Pill>

These shapes come from live unauthenticated probes, not from a published contract. They are
accurate as observed, but engineering has not committed to them, and the spec does not describe
them. Do not treat them as stable until it does.

</Callout>

## The three response shapes

### 1. A required header or parameter is missing → `400`

Content type is `application/problem+json` — the standard
[RFC 9110 problem detail](https://www.rfc-editor.org/rfc/rfc9110#section-15.5.1) that ASP.NET Core
emits for model validation. Field names map to the parameter that failed.

```json
{
  "type": "https://tools.ietf.org/html/rfc9110#section-15.5.1",
  "title": "One or more validation errors occurred.",
  "status": 400,
  "errors": {
    "wallet": ["The wallet field is required."]
  },
  "traceId": "00-c5d97c3b0ab034f8600d17e42c1641ee-670c24216d838de4-01"
}
```

Keep the `traceId`. It is the only correlation handle the API gives you, and it is what support
will ask for.

### 2. The request is well-formed but fails → `200` with `successful: false`

This is the shape that catches people out. **Application-level failures come back with HTTP `200`.**
Checking the status code alone will read a failure as a success.

```json
{
  "successful": false,
  "message": "…human-readable failure text…",
  "data": null
}
```

On success the same envelope carries `"successful": true` and a populated `data`. Branch on
`successful`, not on the status code.

The messages in the table further down arrive in this `message` field.

:::warning For engineering
Observed `message` values leak internal type names — a bad credential produced
`The JSON value could not be converted to KakrLabs_SDK_Creator.Core.DTOs.Blocks.Data`. That
discloses internal namespaces to any unauthenticated caller and should be sanitised.
:::

### 3. Unknown route → `404` as HTML

A path the API does not serve returns `404` with `text/html`, not JSON. A client that assumes every
response parses as JSON will throw here rather than surfacing a clean 404.

### Summary

| Situation | Status | Content type | Branch on |
| --- | --- | --- | --- |
| Missing required header or parameter | `400` | `application/problem+json` | `errors` object |
| Operation ran and failed | `200` | `application/json` | `successful === false` |
| Operation ran and succeeded | `200` | `application/json` | `successful === true` |
| Route does not exist | `404` | `text/html` | status code |

Still unconfirmed: whether an *invalid* (as opposed to missing) key has its own status, whether
rate-limit rejections return `429`, and whether `message` strings are stable enough to match on.

## Known error messages

These are real messages, already documented from support and developer questions. Match on the message text.

| Message | Likely cause | What to do |
| --- | --- | --- |
| `Error creating transaction (wallet may be locked or fees may not be sufficient).` | An incorrect or encrypted passphrase was supplied. | Check that the passphrase is correct, that the wallet is not locked, and that there are sufficient fees available for the transaction. |
| `Object reference not set to an instance of an object.` | The input parameters are incorrect or incomplete. | Verify every parameter before making the request — values must be valid and required objects properly initialised. |
| `Error with selected inputs for the send transaction.` | The specified address does not hold enough funds to create the transaction. | Make sure the address holds enough balance to cover both the transaction amount and the associated fees. |
| `Wallet file verification failed: Error loading wallet <your wallet name>. Duplicate -wallet filename specified.` | The wallet you are trying to load is already loaded. | Check whether the wallet is already loaded and do not reload it. |
| `No full public key for address <one of your address>` | One of the addresses provided does not belong to the specified wallet. | Ensure every address used for multi-signature belongs to the same wallet before proceeding. |

Balance questions — why a wallet balance can differ from the sum of its address balances, and what counts as a generated address — are answered in the [FAQs](/docs/help/faqs), not here. They are expected behaviour, not errors.

## How to report a problem

Before you file anything, check whether it is us:

- **Status page** — [https://kakrlabs1.statuspage.io/](https://kakrlabs1.statuspage.io/). Check here first for an active incident.

If the status page is clear, report it:

- **SDK issues** — open an issue on the SDK monorepo at [https://github.com/kakrlabs-Inc/liaas-sdk](https://github.com/kakrlabs-Inc/liaas-sdk). Say which language directory you are using.

Include the endpoint path, the method, the exact message text, and roughly when it happened. Never paste an API key, passphrase, mnemonic, or private key into an issue.

## Next

<Cards cols={2}>
  <Card title="FAQs" to="/docs/help/faqs" icon="?">Wallet and address behaviour that looks like a bug but is not.</Card>
  <Card title="Endpoints" to="/docs/api-reference/endpoints" icon="◈">The operations available, and the headers each one takes.</Card>
</Cards>
