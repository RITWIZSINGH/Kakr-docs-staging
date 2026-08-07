---
title: "Admin Approval & Privileged Operations"
sidebar_label: Admin Approval
description: "Each admin is a wallet with scoped permissions, and every privileged action requires signed intent. No shared secrets, and a clear audit trail."
---

#### Problem

Admin access is often:

* Shared across teams
* Protected by static credentials
* Hard to audit

#### PTERI Approach

* Each admin is a wallet
* Permissions are scoped
* Actions require signed intent

This provides:

* Non-repudiation
* Clear audit trails
* No shared secrets

Admins are simply **identities with higher authority**, not exceptions.

***

## Next

<Cards cols={2}>
  <Card title="Quickstart" to="/docs/quickstart">Create a wallet identity and verify a signed action.</Card>
  <Card title="Universal Trust Layer" to="/docs/pteri-model/universal-trust-layer">Why an admin is a scope, not a separate trust system.</Card>
</Cards>
