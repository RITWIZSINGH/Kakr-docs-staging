---
title: The Core Mental Model
sidebar_label: Core Mental Model
description: "PTERI's five constraints: wallet is identity, private key is authority, signature is intent, Litecoin settles, and servers never custody."
---

PTERI is intentionally built on **five strict rules**.

These rules are not guidelines.\
They are **constraints**.

They limit what the system can do — and that is what makes it secure.

***

#### Rule 1 — Wallet = Identity

In PTERI, **identity is not an account**.

There is no:

* Username
* Email-based identity
* Database-backed user record

Identity exists **only** as a wallet.

> If you control the wallet, you are the identity.

Lose access to the wallet, and the identity is gone — just like losing a physical key.

There is no backdoor recovery by Kakr.

***

#### Rule 2 — Private Key = Authority

Authority is not granted by servers.

Authority is not assigned by roles.

Authority is proven by **private key control**.

> If you can sign, you have authority.\
> If you cannot sign, you do not.

This rule eliminates:

* Privilege escalation
* Implicit trust
* Admin overrides

***

#### Rule 3 — Signature = Intent

A signature in PTERI is not a login artifact.

It is a **statement of intent**.

When a wallet signs something, it means:

> “This authority approves this exact action, at this time.”

Because signatures are:

* Cryptographically bound to the message
* Non-replayable
* Verifiable by anyone

Intent becomes **provable**, not assumed.

***

#### Rule 4 — Litecoin = Verification & Settlement

Litecoin plays two roles in PTERI:

1. **Verification layer**
2. **Settlement layer**

It provides:

* A public, immutable record
* A global ordering of events
* Proof-of-work security
* Optional privacy via MWEB

Litecoin is not used for:

* Identity storage
* Metadata broadcasting
* Smart contract logic

> Litecoin is the system’s **public clock and court of record**.

***

#### Rule 5 — Server = Verifier, Not Custodian

Servers in PTERI are deliberately constrained.

They may:

* Issue challenges
* Verify signatures
* Observe blockchain state
* Enforce rate limits and policies

They may **never**:

* Hold private keys
* Sign on behalf of users
* Recover identities
* Move funds

> If a server can steal, the system is broken.\
> PTERI prevents this structurally.

***


![](/img/assets/image-30.png)


#### 🚫 No Alternate Trust Paths

There are **no fallback mechanisms** such as:

* Email recovery
* SMS overrides
* Manual admin resets
* Secret API keys

Every action flows through the same path:

**Wallet → Signature → Verification**

## Next

<Cards cols={2}>
  <Card title="Universal Trust Layer" to="/docs/pteri-model/universal-trust-layer">How one sign-and-verify primitive covers every actor and action.</Card>
  <Card title="Architecture and Security" to="/docs/architecture-and-security">How these constraints are enforced in the running system.</Card>
</Cards>

