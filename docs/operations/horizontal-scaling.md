---
title: Horizontal Scaling
sidebar_label: Horizontal Scaling
description: "PTERI services scale horizontally behind standard load balancers, with no locking, no coordination, and no shared mutable state."
---

PTERI services scale horizontally behind standard load balancers.

Scaling characteristics:

* Verification APIs scale linearly with CPU
* No locking or coordination required
* No shared mutable state

This makes PTERI suitable for:

* High-volume authentication
* Payment-heavy platforms
* Automation and AI workloads
* Global deployments

***

## Next

<Cards cols={2}>
  <Card title="Blockchain at Scale" to="/docs/operations/blockchain-at-scale">The one dependency that does not scale linearly with CPU.</Card>
  <Card title="Blockchain-as-a-Service" to="/docs/platform-capabilities/blockchain-as-a-service">What the platform runs for you behind the load balancer.</Card>
</Cards>
