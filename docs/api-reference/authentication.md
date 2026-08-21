---
title: Authentication
sidebar_label: Authentication
description: Every LiaaS request carries an Authorization Bearer key and a Usev2 header. How to get a key and what each header does.
tags: [unverified]
---

Every call to the API carries two headers. Both are required on all 52 operations.

```
Authorization: Bearer <your-api-key>
Usev2: true
```

## Get a key

<Steps>
  <Step title="Create an account">

Register at [pteri.org/register](https://www.pteri.org/register), or sign in at
[pteri.org](https://www.pteri.org/) if you already have one.

  </Step>
  <Step title="Generate the key in the dashboard">

API keys are generated from your account dashboard. Copy the key when it is shown and store it as a
secret your application can read.

  </Step>
  <Step title="Put it in your environment">

```bash
export PTERI_API_KEY="your-key-here"
export BASE_URL="https://pteri.xyz"
```

Keep the key out of source control, out of browser bundles, and out of URL query strings.

  </Step>
</Steps>

## The two required headers

### `Authorization`

Standard bearer scheme — the word `Bearer`, a space, then your key.

```
Authorization: Bearer <your-api-key>
```

### `Usev2`

Present on every request in the collection, with a value of `true` or `yes`. It selects the v2
behaviour of the API.

```
Usev2: true
```

<Callout type="warn" title="Both are mandatory — including Usev2">

<Pill kind="verify">Needs verification</Pill>

All 52 operations in the collection send `Usev2`. What the API does if you omit it — fall back to v1
behaviour, or reject the request — is not documented. Send it on every call.

The collection uses `true` on some operations and `yes` on others, with no visible pattern. Both
appear to be accepted; confirm before relying on either.

</Callout>

## Example request

```bash
curl "$BASE_URL/api/Blocks/BlockchainInfo" \
  -H "Authorization: Bearer $PTERI_API_KEY" \
  -H "Usev2: true"
```

## The base URL

```bash
export BASE_URL="https://pteri.xyz"
```

<Callout type="warn" title="A bad key returns 404, not 401">

This will cost you an afternoon if you do not know it.

The gateway does **not** answer an unrecognised credential with `401`. It returns **`404` with an
empty body** — identical to what a non-existent path returns. Confirmed by probing every plausible
header name with an invalid value against paths known to exist.

**If a route you are sure about returns `404`, check your key before you check the path.**

</Callout>

## Other request headers

Beyond the credential pair, operations take these depending on what they touch.

| Header | Used on | What it is for |
| --- | --- | --- |
| `wallet` | 28 operations | Names the wallet the operation acts on. Must match how the wallet was created. |
| `encryptedPassphrase` | 7 operations | Unlocks an encrypted wallet for operations touching key material — creating addresses, building wallet transactions, reading a private key. |
| `mnemonics` | 3 operations | The recovery phrase. Used instead of `encryptedPassphrase` on `get-address-privatekey-v2` and to derive a wallet's default address. |
| `passPhrase` | 1 operation | Appears only on `/api/Wallet/sign-message`. |

:::warning Casing is inconsistent in the source
The collection spells the passphrase header **`encryptedPassphrase`** on three operations and
**`encryptedpassphrase`** (lowercase p) on four — the transaction builders. HTTP headers are
case-insensitive so both should work, but it is worth normalising.
<Pill kind="verify">Needs verification</Pill>
:::

## Why this differs from the OpenAPI spec

The [published OpenAPI spec](https://liaas-sdk-919521117286.europe-west1.run.app/swagger/v1/swagger.json)
describes a different credential scheme — a single `nodeUrlOrApiAccessKey` header — and different
paths for the same operations.

That spec is titled `KakrLabs-SDK-Creator` and is served by the SDK-generation service. It is what
the eleven generated clients in the [SDK monorepo](https://github.com/kakrlabs-Inc/liaas-sdk) were
built from. It is **not** the product API contract.

These docs follow the
[Postman collection](https://documenter.getpostman.com/view/32261269/2sA3QpDDwR) instead. If you are
using a generated SDK, expect its method signatures to reflect the spec rather than this page.
<Pill kind="verify">Needs verification</Pill>

## Next

<Cards cols={2}>
  <Card title="Endpoint Index" to="/docs/api-reference/endpoints" icon="◈">All 52 operations, with request bodies and real response shapes.</Card>
  <Card title="Quickstart" to="/docs/quickstart" icon="▶">From a fresh key to your first successful call.</Card>
</Cards>
