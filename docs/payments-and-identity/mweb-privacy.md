---
title: Optional MWEB Privacy
sidebar_label: MWEB Privacy
description: Litecoin MWEB adds confidential amounts and less metadata leakage, and PTERI makes it a per-transaction choice rather than a blanket policy.
---

Privacy in PTERI is **optional and explicit**, not forced.

Litecoin’s **MWEB (MimbleWimble Extension Block)** allows:

* Confidential transaction amounts
* Improved on-chain privacy
* Reduced metadata leakage

PTERI treats privacy as a **transaction-level choice**.

This means:

* Developers decide when privacy is required
* Users explicitly approve privacy usage
* Settlement remains verifiable

MWEB is used when:

* Transaction confidentiality matters
* Metadata minimization is required

And avoided when:

* Full transparency is desired
* Public auditability is required

> Privacy is a tool — not a blanket policy.

***


![](/img/assets/image-16.png)

## Next

<Cards cols={2}>
  <Card title="Verifiable Settlement" to="/docs/payments-and-identity/verifiable-settlement">What happens after a signed transaction is broadcast.</Card>
  <Card title="Payments and Payouts" to="/docs/use-cases/payments-and-payouts">Where transparency or confidentiality is the right default.</Card>
</Cards>

