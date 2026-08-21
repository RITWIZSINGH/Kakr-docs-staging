---
title: Troubleshooting
sidebar_label: Troubleshooting
description: Symptom-first fixes for the integration problems that come up most — what you saw, what causes it, what to do.
tags: [unverified]
---

Organised by **what you observed**, not by what the API calls it. Find your symptom, not your error
code — the API's status codes do not map cleanly onto causes, which is itself the first entry below.

<Callout type="info" title="Read Errors first if you have not">

[Errors & Troubleshooting](/docs/api-reference/errors) documents the three response shapes the API
actually returns. This page assumes you know them.

</Callout>

## The request "succeeded" but nothing happened

**Almost always the real problem.** The API returns HTTP `200` for operations that ran and failed.
If you branch on the status code, a failure reads as a success.

```js
// Wrong — 200 does not mean it worked
if (res.ok) return res.json();

// Right — the envelope carries the verdict
const body = await res.json();
if (!body.successful) throw new Error(body.message);
return body.data;
```

Check `successful` on every response. The reason is in `message`.

## Every request fails with 400 before anything runs

The credential header is missing. The body names the field:

```json
{"errors": {"nodeUrlOrApiAccessKey": ["The nodeUrlOrApiAccessKey field is required."]}}
```

Send `nodeUrlOrApiAccessKey` as a **request header** on every call. The one exception is
`GET /api/Wallet/details`, which takes it as a **query parameter** instead. See
[Authentication](/docs/api-reference/authentication).

## The response is HTML and my JSON parser threw

You hit a route the API does not serve. Unknown paths return `404` as `text/html`, so
`JSON.parse` fails before you can read a status.

Check the path against the [Endpoint Index](/docs/api-reference/endpoints) — every entry there is
mirrored from the published spec and verified to exist. Paths that look plausible but are **not**
served include `/api/Wallet/load-wallet`, `/api/Utilities/SignMessage`, `/api/Utilities/VerifyMessage`
and `/api/Utilities/encode-msg`. Guard your client against non-JSON responses regardless:

```js
const ct = res.headers.get('content-type') ?? '';
if (!ct.includes('application/json')) {
  throw new Error(`Expected JSON, got ${res.status} ${ct}`);
}
```

## A wallet-scoped call fails or returns the wrong wallet

Several operations need a `walletName` header naming which wallet to act on, and it must match
exactly how the wallet was created — spelling, case, spacing. A missing header surfaces as a `400`
naming the field; a *wrong* one may return an unhelpful `200` with `successful: false`.

Some operations use a header called `wallet` instead of `walletName`. The
[Authentication](/docs/api-reference/authentication) header table lists which is which.

## Operations touching key material fail

Anything that creates addresses, sends funds, or reads private keys needs the wallet unlocked. That
means an `encryptedPassphrase` header — or on `/api/Address/address-private-key-v2`, a `mnemonics`
header instead.

Generate the encrypted form rather than sending a raw passphrase. If the wallet was created without
encryption, these operations cannot unlock it.

## Wallet balance does not match the sum of its addresses

Not a bug. A wallet's balance counts only **generated** addresses. The default `ltc1` address is not
counted until your first transaction generates it for change. See the [FAQs](/docs/help/faqs) for
the full explanation.

## My credential is rejected but the key looks right

The `nodeUrlOrApiAccessKey` header accepts **either** an API access key **or** a node URL. The key
is a JWT, sent raw — no `Bearer` prefix, no quotes, no whitespace. A JWT also expires, so a key that
worked last month may simply have aged out.

If you pass something that is neither a valid key nor a reachable node URL, the API may still return
`200` with an unhelpful parse error in `message` rather than a clean auth failure.
<Pill kind="verify">Needs verification</Pill>

## I am being rate limited

Limits are enforced at the gateway per customer, and there are two of them: a per-second rate and
a **monthly call quota**. On Pteri Basic that quota is only 50 calls a month, so it is usually the
one you hit first. See [pricing plans](/docs/product-and-access/pricing-plans).

Add retry-with-backoff to any client that can burst. The exact rejection response is not documented
yet <Pill kind="verify">Needs verification</Pill> — so treat *any* unexpected failure under load as
a possible rate-limit rejection rather than matching on a specific status.

## Nothing works and I cannot tell whose fault it is

Check [platform status](/docs/help/status-and-support) before debugging your own code. If every
component is operational, the problem is on your side.

When you do report it, include the `traceId` from the `400` body — it is the only correlation handle
the API gives you.

## Next

<Cards cols={2}>
  <Card title="Errors" to="/docs/api-reference/errors">The three response shapes, with examples.</Card>
  <Card title="Status &amp; Support" to="/docs/help/status-and-support">Live platform status and where to get help.</Card>
</Cards>
