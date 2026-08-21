---
slug: /quickstart
title: Quickstart
sidebar_label: Quickstart
description: From signup to a real Litecoin wallet and address in about five minutes, with the exact requests and the responses you should see back.
---

By the end of this page you will have an API key, a live connectivity check against the Litecoin
chain, and a real encrypted wallet with a real address. Five requests, all copy-pasteable. Nothing
here is a sandbox mock.

Every request and response below is taken from the
[Postman collection](https://documenter.getpostman.com/view/32261269/2sA3QpDDwR).

<Callout type="warn" title="A bad key looks exactly like a wrong URL">

The gateway returns **`404` with an empty body** when it does not recognise your key — not `401`.
That is the same response a non-existent path gives.

If any call below returns `404`, check `$PTERI_API_KEY` before you doubt the route. Every path here
is real.

</Callout>

## Five minutes, six steps

<Steps>
  <Step title="Create an account">

Sign up at **[pteri.org/register](https://www.pteri.org/register)**. Free, no credit card, and you
do not need to talk to anyone to reach the next step.

  </Step>
  <Step title="Generate an API key">

From the account dashboard, generate an API key. Copy it as soon as it is shown.

Treat it like a password: environment variable or secret manager, never source control, never a
browser bundle, never a URL query string.

  </Step>
  <Step title="Put the key and host in your shell">

```bash
export PTERI_API_KEY="paste-your-api-key-here"
export BASE_URL="https://pteri.xyz"
```

Every command below reads these two, so you never paste the key again.

  </Step>
  <Step title="Verify connectivity">

The cheapest call there is: read-only, no body, no wallet.

```bash
curl "$BASE_URL/api/Blocks/BlockchainInfo" \
  -H "Authorization: Bearer $PTERI_API_KEY" \
  -H "Usev2: true"
```

Those two headers go on **every** request — see
[Authentication](/docs/api-reference/authentication).

You should get back the chain tip:

```json
{
  "successful": true,
  "message": "successful operation",
  "data": {
    "result": {
      "chain": "main",
      "blocks": 2690280,
      "bestblockhash": "8311a2fb820a7e55a944afa3ce891bbdcae19ca54b01d18ae3510847eaba74ee",
      "difficulty": 37047324
    }
  }
}
```

If it fails: **`404` empty body** means the key was rejected. **Connection error** means `$BASE_URL`
is wrong. **`200` with `"successful": false`** means you are authenticated and the call itself
failed — read `message`.

  </Step>
  <Step title="Create an encrypted wallet">

Create the wallet **encrypted**. The response hands you the `encryptedPassphrase` you need in the
next step, so this saves you a detour.

```bash
curl -X POST "$BASE_URL/api/Wallet/create-encrypted-wallet" \
  -H "Authorization: Bearer $PTERI_API_KEY" \
  -H "Usev2: true" \
  -H "Content-Type: application/json" \
  -d '{"wallet_name": "quickstart"}'
```

```json
{
  "successful": true,
  "message": "successfully created encrypted wallet with mnemonics and encrypted passphrase",
  "data": {
    "name": "quickstart 790621",
    "warning": "",
    "mnemonics": "inject edge multiply athlete rookie wood bargain reopen device range estate join",
    "encryptedPassphrase": "RZuP/t0ECZmaLgogbcTlqVRTG+2vlRE7QfgT8bNkvn4VLapBoIOxhgRcELdcJWoe…"
  }
}
```

<Callout type="danger" title="Save all three fields now">

`name`, `mnemonics` and `encryptedPassphrase` are returned **once**. The mnemonics are the only way
to recover the wallet — nobody can reissue them for you. Note that `name` comes back with a numeric
suffix appended; use that exact string as the `wallet` header from here on.

</Callout>

```bash
export WALLET="quickstart 790621"          # the returned name, verbatim
export ENCRYPTED_PASSPHRASE="RZuP/t0ECZ…"  # the returned encryptedPassphrase
```

  </Step>
  <Step title="Create an address, then read its balance">

Addresses live inside a wallet, so this call identifies the wallet through headers.

```bash
curl -X POST "$BASE_URL/api/Address/createAddress" \
  -H "Authorization: Bearer $PTERI_API_KEY" \
  -H "Usev2: true" \
  -H "wallet: $WALLET" \
  -H "encryptedPassphrase: $ENCRYPTED_PASSPHRASE" \
  -H "Content-Type: application/json" \
  -d '{"label": "quickstart", "addressType": "3"}'
```

```json
{
  "successful": true,
  "message": "successfully created address",
  "data": {
    "privateKey": "T5GbU1zHBRmizjRwogkA5q9SpvBVnPNfc7Rb3G7Z68Wjruj9GoQW",
    "address": "MTbYA3YVCB8trdFu2dTiheSmiHaSTkEJ4P"
  }
}
```

The response includes the address's **private key**. Handle it accordingly — see
[key custody](/docs/architecture-and-security/key-custody-and-biometrics).

Now read the balance:

```bash
export LTC_ADDRESS="MTbYA3YVCB8trdFu2dTiheSmiHaSTkEJ4P"

curl "$BASE_URL/api/Address/Address-balance?Address=$LTC_ADDRESS" \
  -H "Authorization: Bearer $PTERI_API_KEY" \
  -H "Usev2: true"
```

```json
{ "successful": true, "message": "successfully retrieved address balance",
  "data": { "confirmed": 0, "unconfirmed": 0 } }
```

Both zero — that zero is the point. It came back from a real query against Litecoin for an address
that did not exist a minute ago.

  </Step>
</Steps>

## What just happened

**Step 4 proved the channel.** Two headers, one read. Every failure after that point is about your
request, not your setup.

**Step 5 created the identity anchor.** A wallet in PTERI is not a balance — it is the thing that
holds keys and, in the trust model, the thing that *is* the identity. The mnemonics are the root of
that identity, which is why they are shown once and never again.

**Step 6 derived an address and queried the chain.** The address is a public identifier anyone can
verify against Litecoin; the private key that came with it never has to leave your side again.

Everything else in these docs is a variation on that sequence:
**wallet → signature → verification → outcome**.

## Watch the envelope, not the status code

The one thing that catches people out:

```js
// Wrong — a failed operation still returns HTTP 200
if (res.ok) return res.json();

// Right
const body = await res.json();
if (!body.successful) throw new Error(body.message);
return body.data;
```

## Next

<Cards cols={3}>
  <Card title="Core Concepts" to="/docs/core-concepts" icon="◇">The five ideas the rest of the docs assume.</Card>
  <Card title="Endpoint Index" to="/docs/api-reference/endpoints" icon="◈">All 52 operations with real response shapes.</Card>
  <Card title="Choose your path" to="/docs/choose-your-path" icon="⌥">Pick a reading track for what you are building.</Card>
</Cards>
