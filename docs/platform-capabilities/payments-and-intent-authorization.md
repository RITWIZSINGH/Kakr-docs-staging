---
title: "Payments & Intent Authorization"
sidebar_label: Payments & Intent
description: "The wallet signs the exact payment intent — amount, destination, network — binding identity, intent and authorization in one cryptographic proof."
---

Payments are not special in PTERI — they are **authenticated actions**.

A payment intent includes:

* Amount
* Destination
* Network
* Optional privacy parameters

The wallet signs the _exact intent_.

#### What this guarantees

* The payment was authorized
* The parameters were not altered
* The intent cannot be replayed
* The action is non-repudiable

There is no separation between:

* Identity
* Intent
* Authorization

They are bound in a single cryptographic proof.


![](/img/assets/image-26.png)

## Next

<Cards cols={2}>
  <Card title="Intelligence, Automation & MCP" to="/docs/platform-capabilities/intelligence-automation-and-mcp">See how agents request actions without holding keys.</Card>
  <Card title="Payments & identity" to="/docs/payments-and-identity">Go deeper on how payment intents bind to an identity.</Card>
</Cards>

