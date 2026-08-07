---
title: "PTERI Intelligence & MCP"
sidebar_label: "Intelligence & MCP"
description: PTERI Intelligence exposes wallet, transaction, MWEB, message and observation tools to AI systems through the Model Context Protocol.
---

PTERI Intelligence is the **automation and agent layer** of the platform.

It exposes capabilities through **Model Context Protocol (MCP)** so AI systems can interact with PTERI in a **structured, safe, and auditable** way.

***

#### Why MCP

MCP provides:

* Strongly typed tools
* Explicit schemas
* Predictable execution
* Clear separation of intent and action

This prevents:

* Prompt-level ambiguity
* Tool misuse
* Accidental overreach

***

#### Tool categories

PTERI Intelligence exposes tools in the following namespaces:

**`wallet.*`**

* Address discovery
* Balance queries
* UTXO inspection

**`tx.*`**

* Transaction construction
* Transaction signing
* Transaction broadcasting

**`mweb.*`**

* Confidential transaction operations
* Privacy-preserving transfers

**`message.*`**

* Message signing
* Signature verification

**`observe.*`**

* Transaction status
* Confirmation tracking
* Network observation

Each category maps directly to **explicit capabilities**, not generalized power.

***

#### Tool guarantees

Every MCP tool:

* Has a strict input schema
* Requires explicit authority
* Produces deterministic output
* Can be logged and audited

Tools cannot:

* Escalate permissions
* Access private keys
* Execute outside their scope

### What This Enables


![](/img/assets/image-48.png)


With PTERI Intelligence, developers can safely build:

* AI payment agents
* Autonomous financial workflows
* Secure trading bots
* AI-driven admin systems
* Machine-to-machine services

All without introducing static secrets.

> AI systems stop being privileged insiders — and become accountable actors.

## Next

<Cards cols={2}>
  <Card title="AI Agents and Workflows" to="/docs/use-cases/ai-agents-and-workflows">Worked use cases for agent-driven payments and admin flows.</Card>
  <Card title="API Reference" to="/docs/api-reference">The Standard and Enterprise endpoints these tools sit on top of.</Card>
</Cards>

