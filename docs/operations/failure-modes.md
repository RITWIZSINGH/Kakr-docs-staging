---
title: "Failure Modes & Degradation"
sidebar_label: Failure Modes
description: "PTERI fails safely: if verification is unavailable nothing is approved, and there are no fallbacks, bypasses, or emergency overrides."
---

PTERI is designed to **fail safely**.

#### If verification services are unavailable:

* No action can be verified
* No action is approved
* No fallback or bypass exists

#### If blockchain access is delayed:

* Intents can still be created and signed
* Submission and confirmation are retried
* Final settlement waits for network availability

There are no “emergency overrides”.

> If the system cannot verify authority, it does nothing.

***

## Next

<Cards cols={2}>
  <Card title="Observability" to="/docs/operations/observability">See a degradation happening instead of guessing at it.</Card>
  <Card title="Why Determinism Matters" to="/docs/threat-model/why-determinism-matters">The reason a failed verification can only mean "no".</Card>
</Cards>
