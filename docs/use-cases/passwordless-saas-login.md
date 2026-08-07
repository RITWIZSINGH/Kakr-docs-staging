---
title: Passwordless SaaS Login
sidebar_label: Passwordless SaaS Login
description: "Replace passwords, email resets, and OTP codes with a challenge the wallet signs and the backend verifies before issuing a session."
---

How PTERI is applied in real systems.

<Callout type="info">

This section shows **how PTERI’s single trust model is applied across different scenarios**, without changing primitives or introducing special cases.

</Callout>

Each use case uses the same flow: **Wallet → Signature → Verification → Outcome**

***

#### Problem

Traditional SaaS login relies on:

* Passwords
* Email resets
* MFA add-ons

These increase friction and expand the attack surface.

#### PTERI Approach

* User requests login
* Backend issues a challenge
* Wallet signs the challenge
* Backend verifies and issues session/JWT

There are:

* No passwords to store
* No recovery emails
* No OTP codes

Login becomes a **cryptographic proof of authority**.

***

## Next

<Cards cols={2}>
  <Card title="Quickstart" to="/docs/quickstart">Get a key and run the challenge-and-verify loop yourself.</Card>
  <Card title="Authentication Flow" to="/docs/architecture-and-security/authentication-flow">The full challenge, signature, and verification sequence.</Card>
</Cards>
