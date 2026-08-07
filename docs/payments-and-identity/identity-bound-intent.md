---
title: Identity-Bound Intent
sidebar_label: Identity-Bound Intent
description: One wallet signature proves identity, intent and authorization at once, and the signed parameters cannot be altered or replayed afterwards.
---

In traditional systems:

* Identity is verified first
* Payments happen later
* Intent is inferred

In PTERI, these steps are **collapsed into one cryptographic action**.

A payment intent includes:

* Sender address
* Recipient address
* Amount
* Network parameters
* Optional privacy flags

The wallet signs this intent directly.

This means:

* Identity (wallet control)
* Intent (what is being done)
* Authorization (approval)

are all proven **simultaneously**.

> A valid signature proves _who approved what_, with no ambiguity.

There is no way to:

* Alter parameters after signing
* Replay an intent
* Separate payment from identity

***


![](/img/assets/image-18.png)

## Next

<Cards cols={2}>
  <Card title="Optional MWEB Privacy" to="/docs/payments-and-identity/mweb-privacy">Decide per transaction whether amounts stay confidential.</Card>
  <Card title="Payments and Intent Authorization" to="/docs/platform-capabilities/payments-and-intent-authorization">The platform capability this primitive powers.</Card>
</Cards>

