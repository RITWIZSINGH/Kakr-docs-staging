---
title: "Payments & Payouts"
sidebar_label: "Payments & Payouts"
description: "The wallet signs the exact payment parameters and the transaction settles on Litecoin, proving identity, intent, and authorization together."
---

#### Problem

Payment systems often separate:

* Authentication
* Authorization
* Settlement

This creates ambiguity and intermediaries.

#### PTERI Approach

* Payment intent is created
* Wallet signs exact parameters
* Transaction is broadcast and settled on Litecoin

Identity, intent, and authorization are proven **together**.

This works for:

* User payments
* Merchant payouts
* Automated disbursements

***

## Next

<Cards cols={2}>
  <Card title="Quickstart" to="/docs/quickstart">Sign and submit your first transaction.</Card>
  <Card title="Verifiable Settlement" to="/docs/payments-and-identity/verifiable-settlement">How settlement stays provable after the signature.</Card>
</Cards>
