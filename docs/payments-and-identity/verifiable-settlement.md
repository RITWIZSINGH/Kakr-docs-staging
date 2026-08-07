---
title: Verifiable Settlement
sidebar_label: Verifiable Settlement
description: Signed transactions settle on the Litecoin ledger, so any party can verify existence, signature and settlement without trusting Kakr Labs.
---

Once a signed transaction is submitted:

* It is broadcast to the Litecoin network
* It is validated by proof-of-work
* It becomes part of the public ledger

Settlement in PTERI is:

* Publicly verifiable
* Deterministic
* Non-reversible by intermediaries

Any party can independently verify:

* That the transaction exists
* That it was correctly signed
* That it was settled on-chain

There is no reliance on:

* Internal databases
* Custodial confirmations
* Trust in Kakr Labs infrastructure

> The blockchain is the final arbiter.

***

### How Payments and Identity Come Together

In PTERI:

* Payments are not separate from identity
* Identity is not verified by credentials
* Authorization is not implicit

Everything reduces to: **UTXO + Signature + Verification**

This allows:

* Human payments
* Machine-to-machine payments
* AI agent execution
* Global, automated settlement

All using the same primitive.

***


![](/img/assets/image-17.png)

## Next

<Cards cols={2}>
  <Card title="eSIM Identity and Device Migration" to="/docs/payments-and-identity/esim-identity">Bind a Web2 account to a wallet and an eSIM, then move devices safely.</Card>
  <Card title="Why Determinism Matters" to="/docs/threat-model/why-determinism-matters">The reasoning behind deterministic, independently checkable settlement.</Card>
</Cards>

