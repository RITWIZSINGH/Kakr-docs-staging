---
title: Threats Eliminated by Design
sidebar_label: Threats Eliminated
description: Why phishing, SIM swaps, database breaches, API key leakage and replay attacks fail structurally in PTERI instead of being mitigated.
---

The following attacks are **structurally eliminated**, not mitigated.

***

#### Phishing

**Why it works elsewhere:**\
Attackers steal credentials and replay them.

**Why it fails in PTERI:**

* There are no reusable secrets
* Signatures are bound to challenges
* Challenges are single-use and time-bound

> A phished signature cannot be reused.

***

#### SIM Swap Attacks

**Why it works elsewhere:**\
Identity is bound to phone numbers.

**Why it fails in PTERI:**

* No SMS-based identity
* No telecom dependency
* No recovery via phone number

***

#### Database Breaches

**Why it works elsewhere:**\
Databases store credentials or hashes.

**Why it fails in PTERI:**

* No passwords stored
* No credential databases
* No secrets at rest on servers

A breached database yields **nothing usable**.

***

#### API Key Leakage

**Why it works elsewhere:**\
Static keys grant ambient authority.

**Why it fails in PTERI:**

* API keys only access verification APIs
* Authority always requires a signature
* Keys cannot approve actions

Leaked API keys cannot move funds or authenticate users.

***

#### Replay Attacks

**Why it works elsewhere:**\
Tokens or sessions can be reused.

**Why it fails in PTERI:**

* Challenges are nonce-based
* Challenges expire
* Signatures are bound to a specific intent

Replays are rejected deterministically.

***


![](/img/assets/image-35.png)

## Next

<Cards cols={2}>
  <Card title="Out of Scope" to="/docs/threat-model/out-of-scope">The risks PTERI does not claim to remove.</Card>
  <Card title="Authentication Flow" to="/docs/architecture-and-security/authentication-flow">The challenge–response sequence these defences rest on.</Card>
</Cards>

