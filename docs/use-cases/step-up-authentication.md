---
title: Step-Up Authentication for Sensitive Actions
sidebar_label: Step-Up Authentication
description: "Require a fresh challenge and a new wallet signature before role changes, payouts, or deletions execute. Nothing is ever already trusted."
---

#### Problem

Sensitive actions (role changes, payouts, deletions) often rely on:

* Re-entering passwords
* SMS or email confirmations

These are weak under automation and phishing.

#### PTERI Approach

* Generate a fresh challenge
* Require a new wallet signature
* Verify before executing the action

Each high-risk action requires **explicit, local approval**.

There is no concept of “already trusted”.

***

## Next

<Cards cols={2}>
  <Card title="Quickstart" to="/docs/quickstart">Issue a challenge and verify a signature end to end.</Card>
  <Card title="Identity-Bound Intent" to="/docs/payments-and-identity/identity-bound-intent">Why a signature covers the exact action, not the session.</Card>
</Cards>
