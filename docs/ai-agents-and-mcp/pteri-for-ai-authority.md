---
title: PTERI for AI Authority
sidebar_label: PTERI for AI Authority
description: PTERI treats AI agents as principals with cryptographic identity, scoped authority and revocable access instead of static secrets.
---

PTERI treats AI agents as **principals**, not tools.

A principal must have:

* Identity
* Authority
* Limits
* Accountability

#### With PTERI

AI agents gain:

* **Cryptographic identities**
* **Explicit authority** via signatures
* **Scoped permissions**
* **Revocable access**

And they lose:

* Static secrets
* Implicit trust
* Silent escalation

***

#### The new model

Instead of asking:

> “Does this API key work?”

Systems ask:

> “Does a valid signature exist for this exact intent?”

An AI agent:

1. Requests an action
2. Receives a scoped challenge
3. Obtains explicit authorization
4. Executes only what was approved

No signature → no action.

***

#### Why this matters

This model ensures:

* Every AI action is attributable
* Every action has provable intent
* Authority can be limited and revoked
* Abuse is cryptographically detectable

AI becomes **auditable**, not just powerful.

***


![](/img/assets/image-47.png)

## Next

<Cards cols={2}>
  <Card title="PTERI Intelligence and MCP" to="/docs/ai-agents-and-mcp/pteri-intelligence-and-mcp">The tool namespaces agents call, and the guarantees each one carries.</Card>
  <Card title="Compared to static API keys" to="/docs/comparisons/static-api-keys">Why signed intent beats a shared secret, point by point.</Card>
</Cards>

