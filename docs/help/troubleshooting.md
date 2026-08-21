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

A required header or parameter is missing. The body names the offending field:

```json
{"errors": {"wallet": ["The wallet field is required."]}}
```

Every request needs `Authorization: Bearer <key>` **and** `Usev2: true`. Wallet-scoped operations
add a `wallet` header. See [Authentication](/docs/api-reference/authentication).

## I get a 404 on a route I know exists

**Check your API key first.** The gateway returns `404` with an empty body when it does not
recognise your credential — not `401`. An unrecognised key and a non-existent path look identical
from the client side.

Only once the key is confirmed good is a `404` evidence that the path is wrong. Check it against
the [Endpoint Index](/docs/api-reference/endpoints).

## The response is HTML and my JSON parser threw

Distinct from the above: the origin API (behind the gateway) answers unknown paths with `404` as
`text/html`, so `JSON.parse` throws before you can read a status. Guard for it:

```js
const ct = res.headers.get('content-type') ?? '';
if (!ct.includes('application/json')) {
  throw new Error(`Expected JSON, got ${res.status} ${ct}`);
}
```

## A wallet-scoped call fails or returns the wrong wallet

28 operations need a `wallet` header naming which wallet to act on, and it must match exactly how
the wallet was created.

The trap: `create-encrypted-wallet` appends a numeric suffix to the name you asked for. Request
`"quickstart"` and you get back `"quickstart 790621"` — **that** is the wallet name, suffix and
space included. Use the `name` from the creation response verbatim, not the one you sent.

A missing header surfaces as `400` naming the field; a wrong one usually returns `200` with
`successful: false`.

## Operations touching key material fail

Anything that creates addresses, builds wallet transactions, or reads private keys needs the wallet
unlocked with an `encryptedPassphrase` header — or on `get-address-privatekey-v2`, a `mnemonics`
header instead.

You get that passphrase from `create-encrypted-wallet`, which returns it once in its response
alongside the mnemonics. If you created the wallet with plain `createwallet` there is no passphrase
to supply, and these operations cannot unlock it — create an encrypted wallet instead.

## Wallet balance does not match the sum of its addresses

Not a bug. A wallet's balance counts only **generated** addresses. The default `ltc1` address is not
counted until your first transaction generates it for change. See the [FAQs](/docs/help/faqs) for
the full explanation.

## My credential is rejected but the key looks right

Check both required headers. `Authorization` needs the literal word `Bearer`, a space, then the
key. `Usev2: true` must also be present — it is on all 52 operations in the collection, and what
happens without it is undocumented. <Pill kind="verify">Needs verification</Pill>

Remember a rejected key surfaces as `404`, not `401`.

## I am being rate limited

Limits are enforced at the gateway per customer, and there are two of them: a per-second rate
(3 / 30 / 300 by tier) and a **monthly call quota** (30,000 on Pro, 300,000 on Enterprise). Sustained
traffic usually hits the monthly quota long before the per-second rate. See
[pricing plans](/docs/product-and-access/pricing-plans).

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
