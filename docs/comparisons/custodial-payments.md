---
title: Custodial Payment Systems
sidebar_label: Custodial payments
description: How signed payment intent and UTXO settlement on Litecoin remove custody risk, reversal logic, and intermediary trust.
---

When identity and payment authorization are cryptographically unified, intermediaries become unnecessary.

***

### Legacy Custodial Model vs PTERI

<table><thead><tr><th width="179">Category</th><th>Traditional Model</th><th>Problems</th><th>PTERI Replacement</th></tr></thead><tbody><tr><td>Fund Control</td><td>Funds held by intermediaries</td><td>Custody risk</td><td><strong>Self-custody</strong></td></tr><tr><td>Fraud Handling</td><td>Fraud detection after the fact</td><td>Reversibility assumptions</td><td><strong>Signed payment intent</strong></td></tr><tr><td>Dispute Model</td><td>Dispute-based resolution</td><td>Operational overhead</td><td><strong>Deterministic settlement</strong></td></tr><tr><td>Automation</td><td>Manual review and approval layers</td><td>Limited automation</td><td><strong>Native machine execution</strong></td></tr><tr><td>Settlement</td><td>Platform-mediated clearing</td><td>Global settlement friction</td><td><strong>UTXO-based settlement on Litecoin</strong></td></tr><tr><td>Identity Link</td><td>Identity separate from payment authorization</td><td>Weak attribution</td><td><strong>Identity and payment provably linked</strong></td></tr></tbody></table>

***

### Core Principle

> _"Identity and payment authorization are provably linked."_

When payment intent is signed, custody, reversal logic, and intermediary trust are no longer required.

***

## Next

<Cards cols={2}>
  <Card title="Smart-contract stacks" to="/docs/comparisons/smart-contract-stacks">Why tokens and on-chain logic are not part of the model either.</Card>
  <Card title="Identity-bound intent" to="/docs/payments-and-identity/identity-bound-intent">How a payment gets tied to the identity that approved it.</Card>
</Cards>
