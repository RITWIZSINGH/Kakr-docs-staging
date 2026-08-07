---
title: '“Zero Trust” (Policy-Heavy) Systems'
sidebar_label: Zero-trust policy systems
description: Why probabilistic policy engines and risk scoring give way to deterministic cryptographic authorization — and what PTERI leaves alone.
---

## What PTERI Replaces — Identity & Policy Engines

When trust is cryptographic and deterministic, probabilistic policy layers become unnecessary.

***

### Policy-Driven Model vs PTERI

| Category              | Traditional Model            | Problems                  | PTERI Replacement                                                      |
| --------------------- | ---------------------------- | ------------------------- | ---------------------------------------------------------------------- |
| Identity Layer        | Identity providers           | Complex configuration     | **Proof-based verification**      |
| Authorization Model   | Policy engines               | Probabilistic outcomes    | **Deterministic yes/no outcomes** |
| Risk Controls         | Risk scoring & heuristics    | Hard to audit             | **Minimal policy surface**        |
| Automation Resilience | Human-in-the-loop safeguards | Fragile under automation  | **Machine-verifiable authority**  |
| Trust Model           | Policy-based enforcement     | Subjective interpretation | **Trust enforced by math**        |

***

### Core Principle

> _"Trust is enforced by math, not policy."_

Authorization becomes a binary cryptographic decision — not a probabilistic evaluation.

***

## What PTERI Does Not Replace

PTERI replaces trust mechanisms — not applications.

| PTERI Is Not                                                    | Why                                        |
| --------------------------------------------------------------- | ------------------------------------------ |
| **A UI framework**          | It does not define user interfaces         |
| **A business logic engine** | It does not encode application workflows   |
| **A compliance department** | It does not replace regulatory obligations |

***

### Boundary Definition

PTERI provides **cryptographic authority and verification primitives**.\
Applications, policies, and compliance layers remain external.

***

### Summary Table

| Legacy System        | Status with PTERI                               |
| -------------------- | ----------------------------------------------- |
| Passwords            | Obsolete   |
| OTP / SMS            | Obsolete   |
| API Keys             | Obsolete   |
| Custodial wallets    | Obsolete   |
| Token-based identity | Unnecessary |
| Risk-based auth      | Unnecessary |

***

## Next

<Cards cols={2}>
  <Card title="Threats eliminated" to="/docs/threat-model/threats-eliminated">Which attack classes disappear once there is no shared secret.</Card>
  <Card title="Pricing plans" to="/docs/product-and-access/pricing-plans">What the platform costs and which tier fits your workload.</Card>
</Cards>
