---
title: Machine-to-Machine (M2M) Services
sidebar_label: Machine-to-Machine
description: "Give each service a wallet identity and require signed intent, replacing static API keys and long-lived secrets with deterministic verification."
---

#### Problem

M2M systems rely on:

* Static API keys
* Long-lived secrets

These are copied, leaked, and abused.

#### PTERI Approach

* Each service has a wallet identity
* Requests require signed intent
* Verification is deterministic

Machines become **first-class cryptographic actors**, not privileged scripts.

***

## Next

<Cards cols={2}>
  <Card title="Quickstart" to="/docs/quickstart">Stand up a service identity and verify a signed request.</Card>
  <Card title="Versus Static API Keys" to="/docs/comparisons/static-api-keys">What a signed identity gives you that a shared key cannot.</Card>
</Cards>
