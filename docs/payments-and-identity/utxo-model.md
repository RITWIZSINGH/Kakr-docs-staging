---
title: UTXO-Based Model
sidebar_label: UTXO Model
description: PTERI builds payments on Litecoin's UTXO model, where every output is independently verifiable and there is no hidden account state.
---

PTERI uses Litecoin’s **UTXO (Unspent Transaction Output)** model as the foundation for payments.

In a UTXO system:

* Value is not stored as balances
* Each transaction consumes specific outputs
* Each output can be independently verified

This provides strong guarantees:

* Clear provenance of funds
* Deterministic verification
* No hidden state or account ambiguity
* Easier auditing and reconciliation

> A UTXO either exists or it does not.\
> There is no intermediate or uncertain state.

This makes the model ideal for:

* Payments
* Automation
* Machine verification
* Infrastructure-grade systems

***


![](/img/assets/image-49.png)

## Next

<Cards cols={2}>
  <Card title="Identity-Bound Intent" to="/docs/payments-and-identity/identity-bound-intent">How one signature proves identity, intent and approval together.</Card>
  <Card title="Payments and Payouts" to="/docs/use-cases/payments-and-payouts">What this model looks like in a real payout flow.</Card>
</Cards>

