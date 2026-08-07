---
title: Stateless by Design
sidebar_label: Stateless by Design
description: "PTERI verification services keep no session affinity, per-user memory, or hidden state, so any instance can serve any request."
---

Running PTERI in production.

<Callout type="info">

This section explains how PTERI operates at scale, how it behaves under load, and what guarantees it provides in real-world production environments.

</Callout>

PTERI is designed as **infrastructure**, not an application.\
Operational simplicity and predictability are first-class goals.

***

PTERI verification services are **stateless** wherever possible.

This means:

* No session affinity
* No per-user server memory
* No hidden state between requests

Each request contains everything needed for verification:

* The message or intent
* The signature
* The context (challenge, address, scope)

As a result:

* Requests can be handled by any instance
* Horizontal scaling is trivial
* Failover does not affect correctness

> If a verifier goes down, another can immediately replace it.

***

## Next

<Cards cols={2}>
  <Card title="Horizontal Scaling" to="/docs/operations/horizontal-scaling">See what statelessness buys you when you add instances.</Card>
  <Card title="Where Things Live" to="/docs/architecture-and-security/where-things-live">Check which parts of the system hold state at all.</Card>
</Cards>
