---
title: Blockchain Interaction at Scale
sidebar_label: Blockchain at Scale
description: "Litecoin access uses indexed nodes, batched reads, and asynchronous confirmation tracking, so verification never blocks on settlement."
---

Litecoin interaction is handled via:

* Indexed node access
* Batched reads where possible
* Asynchronous confirmation tracking

Key properties:

* Verification does not block on settlement
* Confirmation tracking is decoupled from request handling
* Node load is isolated from application traffic

For Enterprise customers:

* Dedicated nodes remove noisy neighbors
* Throughput is predictable and controllable

***

## Next

<Cards cols={2}>
  <Card title="Rate Limiting" to="/docs/operations/rate-limiting">How throughput is bounded before node load becomes a problem.</Card>
  <Card title="Verifiable Settlement" to="/docs/payments-and-identity/verifiable-settlement">Why confirmation can lag without weakening verification.</Card>
</Cards>
