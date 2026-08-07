---
title: Operational Responsibility Model
sidebar_label: Responsibility Model
description: "Who owns what: wallets and keys, device signing, Kakr verification APIs, Litecoin settlement, and application business logic."
---

| Component         | Responsibility        |
| ----------------- | --------------------- |
| Wallet & Keys     | User / Organization   |
| Signing & Intent  | User Device           |
| Verification APIs | Kakr Infrastructure   |
| Settlement        | Litecoin Network      |
| Business Logic    | Application Developer |

Clear responsibility boundaries prevent:

* Ambiguous failures
* Hidden dependencies
* Security misunderstandings

***

## Next

<Cards cols={2}>
  <Card title="Use Cases" to="/docs/use-cases">See these boundaries applied to login, payments, admin, and agents.</Card>
  <Card title="Where Things Live" to="/docs/architecture-and-security/where-things-live">The architectural view behind the responsibility table.</Card>
</Cards>
