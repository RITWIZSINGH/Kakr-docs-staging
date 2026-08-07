---
title: Why Identity Fails in Web2
sidebar_label: Why Identity Fails
description: Web2 identity accepts a shared secret as proof of who you are, so it breaks under phishing, SIM swaps, and database breaches.
---

Web2 identity is based on **assertion**, not proof.

The implicit contract is simple:

> “I know the password, therefore I am the user.”

The system accepts this claim without verifying:

* Who controls the device
* Who controls the cryptographic key
* Whether the intent is legitimate

This is equivalent to letting anyone who knows the right sentence walk into a locked building.

#### Why this model fails

Because the system cannot cryptographically distinguish _who_ is making the claim, it:

* Breaks under phishing
* Breaks under SIM swaps
* Breaks under database breaches
* Breaks under automation and AI-driven attacks

Security teams respond with:

* CAPTCHAs
* Risk scoring
* Behavioral analysis
* Manual review

These are **probabilistic defenses**, not guarantees.

> Identity must be **proven**, not asserted.


![](/img/assets/image-31.png)

## Next

<Cards cols={2}>
  <Card title="Why Payments Fail" to="/docs/foundations/why-payments-fail">The same assertion problem, applied to money and intent.</Card>
  <Card title="The Core Mental Model" to="/docs/pteri-model/core-mental-model">The five constraints PTERI uses to replace asserted identity with proof.</Card>
</Cards>

