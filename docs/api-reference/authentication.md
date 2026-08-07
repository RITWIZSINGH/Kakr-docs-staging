---
title: Authentication
sidebar_label: Authentication
description: How to get a PTERI API key and pass it on every request using the nodeUrlOrApiAccessKey header.
tags: [unverified]
---

Every call to the LiaaS API carries a credential. There is one credential header, and almost every operation expects it.

## Get a key

<Steps>
  <Step title="Create an account">

Register at [https://www.pteri.org/register](https://www.pteri.org/register). If you already have one, sign in at [https://www.pteri.org/](https://www.pteri.org/).

  </Step>
  <Step title="Generate the key in the dashboard">

API keys are generated from your pteri.org account dashboard. Copy the key when it is shown and store it somewhere your application can read it as a secret.

  </Step>
  <Step title="Put it in your environment">

Keep the key out of source control. The examples below read it from `PTERI_API_KEY`.

```bash
export PTERI_API_KEY="your-key-here"
```

  </Step>
</Steps>

## The header

The credential header is `nodeUrlOrApiAccessKey`.

In the published OpenAPI spec there are 43 operations. `nodeUrlOrApiAccessKey` appears as a **request header on 42 of them**. The one exception is `GET /api/Wallet/details`, which declares no headers at all and takes `nodeUrlOrApiAccessKey` as a **query parameter** instead, alongside `walletName`.

So the rule is: send `nodeUrlOrApiAccessKey` as a header everywhere, except on `/api/Wallet/details`, where you send it in the query string.

## Example request

```bash
curl -X GET "{BASE_URL}/api/Blocks/blockchain-info" \
  -H "nodeUrlOrApiAccessKey: $PTERI_API_KEY"
```

And the one operation that takes it as a query parameter:

```bash
curl -X GET "{BASE_URL}/api/Wallet/details?nodeUrlOrApiAccessKey=$PTERI_API_KEY&walletName=my-wallet"
```

Replace `{BASE_URL}` with the host you were given. See the warning below before you hard-code one.

<Callout type="warn" title="Needs verification">

<Pill kind="verify">Needs verification</Pill>

Engineering still has to confirm all of the following. Do not treat any of it as settled:

- **The production base URL.** The OpenAPI spec declares no `servers` block, so the document itself does not name a host. `{BASE_URL}` in the examples above is a placeholder.
- **What the header value actually is.** The name `nodeUrlOrApiAccessKey` suggests it can carry either a node URL or the API access key. We do not know whether you send the raw key, a prefixed string such as `Bearer <key>`, or a node URL — and if both forms are accepted, which one applies to which plan.
- **Key rotation and revocation.** Whether a key can be rotated or revoked from the dashboard, whether more than one key can be active at once, and whether keys expire.
- **Key scoping.** Whether a key is scoped to particular endpoint groups, wallets, or environments, or grants access to everything.
- **Whether Standard and Enterprise share a host.** If they do not, the base URL above differs per plan, and possibly per Enterprise tenant.

</Callout>

## Other request headers

Beyond the credential, the spec uses five more request headers. They are not authentication — they identify the wallet the operation acts on, or unlock the key material it needs.

| Header | Appears on | What it is for |
| --- | --- | --- |
| `walletName` | 16 operations | Names the wallet the operation targets — creating an address in it, reading its balance, addresses, or transactions, or signing with it. |
| `encryptedPassphrase` | 6 operations | Unlocks an encrypted wallet for operations that touch key material: creating addresses, sending funds from a wallet, reading an address private key, and setting wallet mnemonics. |
| `mnemonics` | 4 operations | The recovery phrase. Used as the alternative to `encryptedPassphrase` on `/api/Address/address-private-key-v2`, and to derive a wallet's default address. |
| `wallet` | 3 operations | Appears in place of `walletName` on the private-key and address-screening operations. *Inferred:* it identifies the wallet, same as `walletName`; the spec does not say why the two names differ. |
| `signature` | 1 operation | The signature of a signed message, passed to `/api/Utilities/get-blockchain-otp` to obtain a blockchain OTP. |

The "what it is for" column is drawn from the endpoint summaries in the spec. Anything marked *Inferred* is our reading, not a statement from the spec — confirm it before relying on it.

## Next

<Cards cols={2}>
  <Card title="Endpoints" to="/docs/api-reference/endpoints" icon="◈">The 43 operations, grouped by resource, with the headers each one takes.</Card>
  <Card title="Quickstart" to="/docs/quickstart" icon="▶">Go from a fresh key to your first successful call.</Card>
</Cards>
