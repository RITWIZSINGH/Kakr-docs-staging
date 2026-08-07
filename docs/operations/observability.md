---
title: "Observability & Monitoring"
sidebar_label: Observability
description: "Request metrics, latency and error tracking, blockchain sync status, and rate-limit visibility. Keys, seed phrases, and biometrics are never logged."
---

PTERI infrastructure provides:

* Request-level metrics
* Latency and error tracking
* Blockchain sync status
* Rate-limit visibility

What is **not** logged:

* Private keys
* Seed phrases
* Biometric data
* Unsigned secrets

Logs are designed for:

* Operational insight
* Incident response
* Capacity planning

Not for surveillance.

***

## Next

<Cards cols={2}>
  <Card title="Enterprise Operations" to="/docs/operations/enterprise-operations">Add dedicated nodes, private networking, and custom monitoring hooks.</Card>
  <Card title="Key Custody & Biometrics" to="/docs/architecture-and-security/key-custody-and-biometrics">Why the secrets absent from logs are also absent from the server.</Card>
</Cards>
