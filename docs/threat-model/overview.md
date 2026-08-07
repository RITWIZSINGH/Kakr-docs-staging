---
title: Threat Model Overview
sidebar_label: Overview
description: PTERI assumes hostile networks and compromised servers, and eliminates whole classes of attack by removing their prerequisites.
---

What attacks are eliminated — and why.

PTERI does not attempt to defend against every theoretical attack.\
It eliminates **entire classes of real-world attacks** by removing their prerequisites.

PTERI assumes:

* Networks are hostile
* Servers may be compromised
* Credentials will leak
* Automation will be abused
* Attackers are persistent

PTERI **does not assume**:

* Trusted servers
* Secret storage safety
* Honest intermediaries
* Manual review as a defense

Instead, PTERI relies on:

* Cryptographic proof
* Deterministic verification
* Minimal trust surfaces

***


![](/img/assets/image-19.png)

## Next

<Cards cols={2}>
  <Card title="Threats Eliminated" to="/docs/threat-model/threats-eliminated">The specific attack classes that stop working, and why.</Card>
  <Card title="Where Things Live" to="/docs/architecture-and-security/where-things-live">The trust boundaries these assumptions are built on.</Card>
</Cards>

