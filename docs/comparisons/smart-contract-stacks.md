---
title: Smart-Contract–Centric Web3 Stacks
sidebar_label: Smart-contract stacks
description: Why tokens, contract logic, and programmable on-chain state are unnecessary when cryptographic authority is the foundation.
---

When cryptographic authority is the foundation, tokens and complex on-chain logic become unnecessary.

***

### Token-Based Model vs PTERI

| Category            | Traditional Model                     | Problems                  | PTERI Replacement                                                              |
| ------------------- | ------------------------------------- | ------------------------- | ------------------------------------------------------------------------------ |
| Identity Primitive  | Tokens represent identity and access  | Identity leakage          | **No tokens**                             |
| Execution Model     | Complex smart contracts               | Large attack surface      | **No smart contracts**                    |
| On-Chain Design     | On-chain logic and metadata           | Poor UX, heavy state      | **Minimal on-chain footprint**            |
| Incentive Structure | Speculation-first incentives          | Misaligned priorities     | **Utility-first cryptographic authority** |
| Verification        | Logic embedded in contracts           | Hard to audit and upgrade | **Off-chain deterministic verification**  |
| System Complexity   | Multiple layers of programmable state | Increased failure modes   | **Cryptography only**                     |

***

### Core Principle

> _"Cryptography is kept. Everything else is removed."_

Authority is proven by signature.\
Execution is verified deterministically.\
No tokens. No speculative layers. No unnecessary state.

***

## Next

<Cards cols={2}>
  <Card title="Zero-trust policy systems" to="/docs/comparisons/zero-trust-policy-systems">The last comparison, plus the list of what PTERI does not replace.</Card>
  <Card title="What PTERI is not" to="/docs/pteri-model/what-pteri-is-not">The boundaries of the model, stated directly.</Card>
</Cards>
