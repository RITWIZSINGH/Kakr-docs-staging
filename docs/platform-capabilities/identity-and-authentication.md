---
title: "Identity & Authentication"
sidebar_label: Identity & Auth
description: "PTERI replaces passwords, SMS OTPs and static API keys with a challenge–response signature approved by biometrics and verified by the backend."
---

PTERI replaces traditional authentication mechanisms entirely.

There are no:

* Passwords
* SMS OTPs
* Authenticator apps
* Static API keys

#### The new model

Authentication becomes a **challenge–response signature**.

1. A system issues a challenge
2. The wallet receives the challenge
3. The user approves via biometrics
4. The wallet signs the challenge
5. The backend verifies the signature

That’s it.

There is no secret to steal and no code to replay.

#### Who this works for

The same model applies to:

* End users
* Admins
* Internal services
* Machines
* AI agents

Identity is no longer tied to a UI flow — it is tied to authority.


![](/img/assets/d1-old-vs-pteri.png)

## Next

<Cards cols={2}>
  <Card title="Payments & Intent Authorization" to="/docs/platform-capabilities/payments-and-intent-authorization">See the same signature model applied to moving value.</Card>
  <Card title="Architecture & security" to="/docs/architecture-and-security">Look at how challenge–response is verified end to end.</Card>
</Cards>

