---
title: "FAQs & Troubleshooting"
sidebar_label: FAQs
description: Answers to the most common questions about getting started, generating addresses, checking balances, and handling API errors.
tags: [unverified]
---

<details>

<summary>How do I get started with your Litecoin as a Service (LiaaS) API ?</summary>

Getting started is simple. Sign up on [pteri.org](https://www.pteri.org/), [create an account](https://www.pteri.org/register), and generate your API key. You can then use this key to authenticate your requests to our API. [Detailed documentation is available to guide you through the integration process](/docs/quickstart)

</details>

<details>

<summary>How do I generate a Litecoin address using your API?</summary>

You can generate a Litecoin address by making a POST request to the [`/api/Address/create`](/docs/api-reference/endpoints) endpoint of our API. Per the published spec, the request carries three headers — `nodeUrlOrApiAccessKey`, `walletName`, and `encryptedPassphrase` — and a `CreateAddressdto` body with two optional properties, `label` and `type`.

An older version of this answer mentioned a `Usev2` parameter taking **true** or **yes**. No such parameter appears in the published spec, and the spec defines no response schema, so what the response body contains is not documented either. <Pill kind="verify">Needs verification</Pill>

</details>

<details>

<summary>How do I check the balance of a Litecoin address?</summary>

To check the balance of a Litecoin address, make a GET request to the [`/api/Address/address-balance`](/docs/api-reference/endpoints) endpoint with the address as a parameter. The response will include the current balance of the specified address.

</details>

<details>

<summary>How do I check the balance of a Litecoin wallet?</summary>

To check the balance of a Litecoin wallet, make a GET request to the [`/api/Wallet/balance`](/docs/api-reference/endpoints) endpoint. The wallet is identified by the `walletName` header, alongside `nodeUrlOrApiAccessKey`. The response will include the current balance of the specified wallet.

</details>

<details>

<summary>Can I integrate LiaaS API with my existing software?</summary>

Absolutely! Our API is designed to be easily integrated with existing software. We provide detailed documentation and example code to help you [get started](/docs/quickstart) quickly.

</details>

<details>

<summary>What programming languages are supported?</summary>

Our API can be accessed using any programming language that can make HTTP requests, such as Python, JavaScript, Java, Ruby, and [many others](https://documenter.getpostman.com/view/32261269/2sA3QpDDwR). We also provide [SDKs and libraries ](https://www.npmjs.com/package/liaas-js)for JavaScript developers to simplify integration.

</details>

<details>

<summary>Why do i need to reload wallets after restarting node?</summary>

When you restart your Blockchain node, the wallet is not loaded automatically for security and resource management reasons. This ensures that only explicitly requested wallets are loaded, reducing the risk of unauthorized access and resource consumption. <Pill kind="verify">Needs verification</Pill> This answer refers to a `/api/Wallet/load-wallet` endpoint taking the wallet name as a `filename` value. **That route is not in the published OpenAPI spec**, which defines 43 operations and no load-wallet among them. It may be a node-level call rather than a LiaaS API call, or it may be out of date. Confirm it before you build against it — see the [Endpoint Index](/docs/api-reference/endpoints) for what the spec does define.

</details>

<details>

<summary>Does the API support multi-signature transactions?</summary>

Yes, The multi-signature process necessitates the [signing of a signature](/docs/api-reference/endpoints), a task that can be efficiently completed by multiple addresses from distinct wallets using their respective private keys. The resulting response will encompass the signature, which can be employed to [verify the transaction](/docs/api-reference/endpoints) by all addresses participating in the signature process before it is broadcasted on the blockchain.

</details>

<details>

<summary>How do I handle errors returned by the API?</summary>

Match on the error message text. The [Developer FAQs and Error Handling](/docs/help/developer-faqs-and-errors) page lists the messages we have documented from the field, with the cause and the fix for each.

There is no status-code table to work from. The published spec documents only `200` for every operation and defines no error response schema, so which HTTP status code accompanies a failure — and whether error messages are stable strings — is not confirmed. <Pill kind="verify">Needs verification</Pill> See the [error reference](/docs/api-reference/errors) for the full picture.

</details>

## Next

<Cards cols={2}>
  <Card title="Developer FAQs" to="/docs/help/developer-faqs-and-errors" eyebrow="Help" icon="◈">
    Exact error strings the API returns, and what to change to clear them.
  </Card>
  <Card title="Error reference" to="/docs/api-reference/errors" eyebrow="API reference" icon="◇">
    How error responses are shaped and how to handle them in your integration.
  </Card>
</Cards>
