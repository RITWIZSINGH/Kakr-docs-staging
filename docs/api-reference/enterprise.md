---
title: API Reference — Enterprise
sidebar_label: Enterprise API
description: The Enterprise API reference for dedicated Litecoin nodes, isolated infrastructure, and backend-only node access.
tags: [unverified]
---

Read this only if your organisation has an Enterprise plan with dedicated nodes provisioned. Everyone else wants the [Standard reference](/docs/api-reference/standard).

The full request and response detail lives in the Postman documenter:

[LiaaS Enterprise Postman Documentation](https://documenter.getpostman.com/view/32261269/2sA3QterXm#intro)


This page contains the **Enterprise API reference**, available **only to Enterprise customers**.

Enterprise APIs are intended for organizations that require:

* Dedicated Litecoin nodes
* High throughput
* Custom SLAs
* Private or on-premise deployments

If you are **not** an Enterprise customer, these APIs are not accessible.

<Callout type="warn" title="The commercial terms on this page are not verified">

<Pill kind="verify">Needs verification</Pill>

This page describes the shape of the Enterprise offering, not its numbers. None of the following is confirmed by any source we can check, so do not quote it to anyone or plan capacity against it:

* **Rate limits and throughput.** The free tier is documented at **3 requests per second** — both in
  our own [pricing plans](/docs/product-and-access/pricing-plans) and in the public FAQ on
  pteri.org. Above free tier, pteri.org says only that "paid plans offer higher limits", so the
  Enterprise figure is negotiated, not published.
* **SLAs and uptime.** No service level, availability target, or numeric response target is
  documented. pteri.org does claim a support team "available 24/7"; that is a marketing claim on the
  website, not a contractual commitment. The [status page](https://kakrlabs1.statuspage.io/) reports
  actual state, and is likewise not a commitment.
* **What is technically different.** The published OpenAPI spec describes one API surface with 43 operations. It does not describe a separate Enterprise surface, separate routes, or a separate spec document. Whether Enterprise differs in anything beyond the host it runs against is unconfirmed.
* **Base URLs.** Whether Standard and Enterprise share a host is unconfirmed. See [Authentication](/docs/api-reference/authentication).

Confirm all of it with whoever provisions your plan before you rely on it.

</Callout>

***

### Enterprise Access Only

⚠️ **Restricted Access**

Enterprise APIs are **not enabled by default**.

Access is granted only after:

* An Enterprise plan is provisioned
* Dedicated infrastructure is assigned
* Node-level security controls are configured

***

### What Makes Enterprise Different

Enterprise access provides:

* Dedicated Litecoin nodes
* Node-scoped operations
* Higher or custom rate limits
* Isolated infrastructure

These features are designed for **mission-critical systems**, not general usage.

***

### Security Requirements (Mandatory)

⚠️ **Enterprise Node URLs are highly sensitive**

Your Node URL must **never** appear in:

* Frontend code
* Public repositories
* Logs, screenshots, or documentation
* CI/CD pipelines

Exposing a Node URL may result in service disruption or access suspension.

***

### Required Usage Pattern

Enterprise APIs must be used **backend-only**.

client / frontend ↓ your backend ↓ Enterprise Node (via proxy) ↓ Litecoin Network

Clients must never connect directly to an Enterprise node.

***

### Enterprise Resources

* **[Open in Postman (Enterprise)](https://documenter.getpostman.com/view/32261269/2sA3QterXm#intro)** — the Enterprise Postman documenter.
* **OpenAPI spec** — the [published spec](https://liaas-sdk-919521117286.europe-west1.run.app/swagger/v1/swagger.json) is the only one we can point at. Whether a separate Enterprise spec document exists is unconfirmed. <Pill kind="verify">Needs verification</Pill>

***

### Authority Model

Even at the Enterprise level:

* APIs do **not** grant signing authority
* Wallets remain the sole source of authorization
* Kakr infrastructure verifies — it never controls

Enterprise increases **capacity and isolation**, not trust assumptions.

***

### Need Enterprise Access?

If you require:

* Dedicated nodes
* Private infrastructure
* Custom SLAs
* Security onboarding

👉 **Contact Sales / Talk to Enterprise**\
📧 [contact@kakr.ai](mailto:contact@kakr.ai) \
🌐 [https://kakr.ai](https://kakr.ai) → Contact

The address previously listed here was `support@kakrlabs.com`, alongside `https://kakr.org/contact`.
`kakr.org` redirects to `kakr.ai`, whose published address is `contact@kakr.ai`; the `kakrlabs.com`
address appears on neither site. <Pill kind="verify">Needs verification</Pill> Confirm which mailbox
sales actually monitors.

***

## Next

<Cards cols={2}>
  <Card title="Authentication" to="/docs/api-reference/authentication">What header every request carries, and where the key comes from.</Card>
  <Card title="Endpoints" to="/docs/api-reference/endpoints">The operations available, grouped by resource.</Card>
</Cards>
