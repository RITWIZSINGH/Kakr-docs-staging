---
slug: /quickstart
title: Quickstart
sidebar_label: Quickstart
description: From a pteri.org signup to a verified Litecoin API call — an API key, a real wallet, and a real address, in about five minutes.
tags: [unverified]
---

By the end of this page you will have an API key from your pteri.org dashboard, a live
connectivity check against the Litecoin blockchain, and a real wallet with a real address
created through the LiaaS API. Every step is a single copy-pasteable command. Nothing here
is a sandbox mock — these are the same routes you will call in production.

<Callout type="warn" title="Before you start">

One value in these examples is a placeholder you must replace: **the base URL** — the host
and scheme that go in front of every `/api/...` path. <Pill kind="verify">Needs verification</Pill>

The published OpenAPI spec declares no `servers` block, so we will not print a hostname here
and imply it is the production one. Get the exact base URL for your account from your
**pteri.org dashboard**, alongside the API key, and use it wherever these examples say
`{BASE_URL}`. Standard and Enterprise may not share a host — if you are on Enterprise
running against dedicated nodes, use the host issued with your nodes.

Everything else on this page — the routes, the header names, the JSON property names — comes
straight from the spec.

</Callout>

## Five minutes, seven steps

<Steps>
  <Step title="Create an account">

Sign up at **[pteri.org/register](https://www.pteri.org/register)**. Confirm your email and
sign in. Free to create; you do not need to talk to anyone to reach the next step.

  </Step>
  <Step title="Generate an API key">

From the account dashboard, generate an API key. Copy it somewhere safe as soon as it is
shown, and note the base URL displayed with it — you need both in the next step.

Treat the key like a password: it belongs in an environment variable or a secret manager,
never in source control, a browser bundle, or a URL query string.

  </Step>
  <Step title="Put the key and host in your shell">

```bash
# The key you generated in step 2.
export PTERI_API_KEY="paste-your-api-key-here"

# The base URL from your dashboard — scheme + host, no trailing slash.
export BASE_URL="{BASE_URL}"
```

Run these in the same terminal you will use for the rest of the page. Every command below
reads `$PTERI_API_KEY` and `$BASE_URL`, so you never have to paste the key again.

  </Step>
  <Step title="Verify connectivity">

This is the cheapest call in the whole spec: read-only, no body, no wallet, one header. If
it works, your host is right and your key is accepted.

```bash
curl -i "$BASE_URL/api/Blocks/blockchain-info" \
  -H "nodeUrlOrApiAccessKey: $PTERI_API_KEY"
```

`nodeUrlOrApiAccessKey` is the authentication header, and it is required on 42 of the 43
operations in the spec. As the name suggests it carries either an API access key or a node
URL. Whether the value should be the raw key, a `Bearer`-prefixed string, or a node URL for
your deployment is not settled in the spec. <Pill kind="verify">Needs verification</Pill>
Start with the raw key exactly as the dashboard shows it.

A `200` with a JSON body of Litecoin block information means you are through. `200` is the
only status code the spec documents, so we will not tell you which code a failure returns.
<Pill kind="verify">Needs verification</Pill> Read the failure the way `curl -i` shows it: a
connection or DNS error means `$BASE_URL` is wrong, and a response that comes back but
carries no block information means the host is reachable and the header value is the thing
to fix. Fix it here — every later step uses the same two values.

  </Step>
  <Step title="Create a wallet">

The wallet is the thing that holds keys and, in the PTERI model, the thing that *is* the
identity. `CreateWalletRequest` takes exactly one property, `walletName`.

```bash
export WALLET_NAME="quickstart-wallet"

curl -i -X POST "$BASE_URL/api/Wallet/create" \
  -H "nodeUrlOrApiAccessKey: $PTERI_API_KEY" \
  -H "Content-Type: application/json" \
  -d "{\"walletName\": \"$WALLET_NAME\"}"
```

Per the spec, `/api/Wallet/create` produces a wallet that is **not encrypted** and **cannot
be imported** into other wallets. That is fine for this walkthrough. For anything you intend
to keep, use one of the siblings instead — `/api/Wallet/create-encrypted-wallet`,
`/api/Wallet/create-importable-wallet`, or
`/api/Wallet/create-importable-encrypted-wallet` — all of which take the same
`CreateWalletRequest` body.

Keep whatever the response returns. Wallet creation is the one step here you cannot repeat
your way out of.

  </Step>
  <Step title="Create an address in that wallet">

Addresses live inside a wallet, so this call identifies the wallet through headers rather
than the body. The body is `CreateAddressdto`, which has two optional properties: `label`
and `type`.

```bash
export ENCRYPTED_PASSPHRASE="{ENCRYPTED_PASSPHRASE}"

curl -i -X POST "$BASE_URL/api/Address/create" \
  -H "nodeUrlOrApiAccessKey: $PTERI_API_KEY" \
  -H "walletName: $WALLET_NAME" \
  -H "encryptedPassphrase: $ENCRYPTED_PASSPHRASE" \
  -H "Content-Type: application/json" \
  -d '{"label": "quickstart"}'
```

Two things the spec does not pin down. <Pill kind="verify">Needs verification</Pill>

- **`encryptedPassphrase`** is listed as a header on this route, but the wallet you created
  in step 5 is unencrypted, so what belongs in this header for that case is not documented.
  If you hit an error here, create the wallet with `/api/Wallet/create-encrypted-wallet` and
  use the passphrase you set there.
- **`type`** is an accepted body property, but the set of valid address-type values is not
  enumerated in the spec. This example omits it and takes the default.

Copy the address out of the response — you need it for the last step.

  </Step>
  <Step title="Check the balance">

```bash
export LTC_ADDRESS="paste-the-address-from-step-6"

curl -i "$BASE_URL/api/Address/address-balance?address=$LTC_ADDRESS" \
  -H "nodeUrlOrApiAccessKey: $PTERI_API_KEY"
```

This route returns the confirmed and the unconfirmed balance. A brand-new address has never
received anything, so both will be zero — that zero is the point. It came back from a real
query against the Litecoin chain for an address that did not exist ten seconds ago.

  </Step>
</Steps>

<details>

<summary>Alternative: the same first two calls in Node</summary>

No dependencies — Node 18+ has `fetch` built in. Set `PTERI_API_KEY` and `BASE_URL` in the
environment first, exactly as in step 3.

```js
const BASE_URL = process.env.BASE_URL;
const KEY = process.env.PTERI_API_KEY;

// 1. Connectivity check.
const info = await fetch(`${BASE_URL}/api/Blocks/blockchain-info`, {
  headers: { nodeUrlOrApiAccessKey: KEY },
});
console.log("blockchain-info:", info.status);

// 2. Create a wallet.
const wallet = await fetch(`${BASE_URL}/api/Wallet/create`, {
  method: "POST",
  headers: {
    nodeUrlOrApiAccessKey: KEY,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ walletName: "quickstart-wallet" }),
});
console.log("wallet/create:", wallet.status);
```

There is an official JavaScript client published on npm as
[`liaas-js`](https://www.npmjs.com/package/liaas-js). <Pill kind="verify">Needs verification</Pill>
Its exact method names and signatures are not part of our verified facts, so this page will
not guess at them. Read the source in the `liaas-js` directory of the
[LiaaS SDK monorepo](https://github.com/kakrlabs-Inc/liaas-sdk) — it also carries clients for
Python, Go, Java, C#, Ruby, PHP, TypeScript, Dart, Rust, and Kotlin.

</details>

## What just happened

You did three different kinds of thing, and the order matters.

**Step 4 proved the channel.** One header, one read. Before you create anything, you confirm
that the host is reachable and the key is accepted. Every failure after this point is about
your request, not your setup.

**Step 5 created the identity anchor.** A wallet in PTERI is not a balance — it is a
container for keys. The keys are what let you produce signatures later, which is the entire
basis on which anything gets authorized.

**Steps 6 and 7 made it addressable and observable.** The address is the public half: a thing
you can hand out, receive against, and query. The balance call is verification of the
cheapest sort — anyone can check it, and nobody has to trust your word for it.

That shape is the whole platform in miniature: **sign, then verify.** Here the signing was
implicit, done for you by the wallet. The interesting version is explicit — you hold a
private key, you sign a message with `/api/Address/sign-message`, and anyone with the public
address checks it with `/api/Address/verify-message` without ever needing the secret. Same
primitive underneath login, admin approvals, machine-to-machine calls, and payment
authorization. Nothing shared, nothing to phish, nothing to replay.

## Next

<Cards cols={3}>
  <Card title="Core Concepts" to="/docs/core-concepts" eyebrow="3 min" icon="◇">
    Wallet, signature, verification, authority, settlement — the five ideas the rest of the
    docs assume you have.
  </Card>
  <Card title="Authentication" to="/docs/api-reference/authentication" eyebrow="Reference" icon="⚿">
    What <code>nodeUrlOrApiAccessKey</code> is, where the key comes from, and how to handle it
    safely in production.
  </Card>
  <Card title="Choose your path" to="/docs/choose-your-path" eyebrow="Router" icon="⌥">
    Reading tracks by what you are building — login, payments, agents, or an enterprise review.
  </Card>
</Cards>
