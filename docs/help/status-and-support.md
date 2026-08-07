---
title: Status & Support
sidebar_label: Status & Support
description: Where to check platform status and which resource to reach for when something is unclear or broken.
tags: [unverified]
---

When something breaks, check whether it is the platform or your integration before you write to anyone.

Start with the [Kakr Labs status page](https://kakrlabs1.statuspage.io/). If the platform is healthy there, the next stop depends on what you are stuck on — the table below points you at the primary source for each kind of question.

## Where to go

| I need to... | Go here |
| --- | --- |
| Check whether the platform is up | [Kakr Labs status page](https://kakrlabs1.statuspage.io/) |
| Confirm an exact path, header, or request body | [OpenAPI spec](https://liaas-sdk-919521117286.europe-west1.run.app/swagger/v1/swagger.json) |
| Browse every operation in one place | [Endpoint Index](/docs/api-reference/endpoints) |
| Try a request without writing code (Standard) | [Postman — Standard](https://documenter.getpostman.com/view/32261269/2sA3QpDDwR) |
| Try a request without writing code (Enterprise) | [Postman — Enterprise](https://documenter.getpostman.com/view/32261269/2sA3QterXm#intro) |
| Read or file an issue against a client library | [liaas-sdk on GitHub](https://github.com/kakrlabs-Inc/liaas-sdk) |
| Create an account or generate an API key | [pteri.org](https://www.pteri.org/) |

## The resources in full

**[Status page](https://kakrlabs1.statuspage.io/)** — incident history and current platform state. Check here first so you do not debug your own code against an outage.

**[OpenAPI spec](https://liaas-sdk-919521117286.europe-west1.run.app/swagger/v1/swagger.json)** — the machine-readable source of truth for the API surface. The [Endpoint Index](/docs/api-reference/endpoints) mirrors it, but the spec wins if they disagree.

**Postman collections** — runnable requests you can fire from the browser. There are two: [Standard](https://documenter.getpostman.com/view/32261269/2sA3QpDDwR) and [Enterprise](https://documenter.getpostman.com/view/32261269/2sA3QterXm#intro). Use the one that matches your plan.

**[liaas-sdk](https://github.com/kakrlabs-Inc/liaas-sdk)** — the client library monorepo. Each language lives in its own subdirectory. Read the source there when a client behaves differently from the spec, and open issues against that repo rather than the docs.

**[pteri.org](https://www.pteri.org/)** — account sign-up and the dashboard where API keys are generated. Its own Help / Support and "Report a Bug" sections are the route for product questions that are not about the API surface.

## Reaching a human

| Route | What it is |
| --- | --- |
| [pteri.org](https://www.pteri.org/) → Help (Support) | The product's own support entry point, including a Report a Bug page. |
| [kakr.ai](https://kakr.ai) → Contact, or `contact@kakr.ai` | The corporate site for Kakr Labs Inc. `kakr.org` redirects here. |
| [GitHub issues](https://github.com/kakrlabs-Inc/liaas-sdk/issues) | Client library bugs. Say which language directory you are using. |

<Callout type="warn" title="Response targets are not documented">

<Pill kind="verify">Needs verification</Pill>

pteri.org states that its support team is "available 24/7" and that community support exists. That
is a claim on the marketing site, not a published SLA — no response-time target, escalation path, or
per-plan support tier is documented anywhere we can check, and neither is a numeric uptime figure.
Read the status page for actual platform state.

Some older pages in this documentation set list `support@kakrlabs.com`. That address is not
published on either pteri.org or kakr.ai and we could not confirm it is monitored — prefer the
routes in the table above until someone verifies it.

</Callout>

## Next

<Cards cols={2}>
  <Card title="FAQs" to="/docs/help/faqs">Common questions about getting started, addresses, balances, and errors.</Card>
  <Card title="Errors" to="/docs/api-reference/errors">What the API returns when a request does not succeed.</Card>
</Cards>
