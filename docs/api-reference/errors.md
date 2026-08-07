---
title: Errors & Troubleshooting
sidebar_label: Errors
description: The error messages the LiaaS API actually returns, what causes each one, and how to report a problem.
tags: [unverified]
---

There is no error-code table on this page. That is deliberate — read the warning first, then use the message table below, which is built from errors we have seen and documented in the field.

<Callout type="warn" title="Needs verification">

<Pill kind="verify">Needs verification</Pill>

**The published OpenAPI spec documents only `200 OK` for every operation.** All 43 operations declare a single `200` response and nothing else. The spec therefore gives us no authoritative list of status codes, no error response schema, and no mapping from failure to code.

We will not invent one. Until engineering publishes the real error contract, treat the following as unknown:

- Which HTTP status codes a failed request can return.
- The shape of an error response body — field names, whether there is a machine-readable code, whether messages are stable strings.
- Whether authentication failures, validation failures, and blockchain-level failures are distinguishable from each other.
- Whether any of the messages below arrive with a non-`200` status, or inside a `200` body.

</Callout>

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
