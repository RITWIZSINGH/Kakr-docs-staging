---
title: "Rate Limiting & Abuse Protection"
sidebar_label: Rate Limiting
description: "Rate limiting is applied at the gateway, per key and plan, and at infrastructure level. It protects availability, not signing authority."
---

Rate limiting is applied at multiple layers:

* API gateway level
* Per-key and per-plan limits
* Infrastructure-level protections

Important distinction:

* Rate limiting protects **availability**
* It does not protect **authority**

Even if limits are exceeded:

* No signing authority is exposed
* No identity can be impersonated
* No funds can be moved

> Abuse affects throughput, not security.

***

## Next

<Cards cols={2}>
  <Card title="Failure Modes" to="/docs/operations/failure-modes">What the system does when a limit or a dependency is hit.</Card>
  <Card title="Threats Eliminated" to="/docs/threat-model/threats-eliminated">The attacks that stop working once authority is cryptographic.</Card>
</Cards>
