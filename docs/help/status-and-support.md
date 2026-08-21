---
title: Status & Support
sidebar_label: Status & Support
description: Where to check platform status and which resource to reach for when something is unclear or broken.
tags: [unverified]
---

When something breaks, check whether it is the platform or your integration before you write to anyone.

## Platform status, right now

<StatusPanel />

If everything above is operational, the problem is on your side — the table below points you at the primary source for each kind of question.

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
| Ask a question or raise a ticket | [support.kakr.ai](https://support.kakr.ai) |

## The resources in full

**[Status page](https://kakrlabs1.statuspage.io/)** — incident history and current platform state. Check here first so you do not debug your own code against an outage.

**[OpenAPI spec](https://liaas-sdk-919521117286.europe-west1.run.app/swagger/v1/swagger.json)** — the machine-readable source of truth for the API surface. The [Endpoint Index](/docs/api-reference/endpoints) mirrors it, but the spec wins if they disagree.

**Postman collections** — runnable requests you can fire from the browser. There are two: [Standard](https://documenter.getpostman.com/view/32261269/2sA3QpDDwR) and [Enterprise](https://documenter.getpostman.com/view/32261269/2sA3QterXm#intro). Use the one that matches your plan.

**[liaas-sdk](https://github.com/kakrlabs-Inc/liaas-sdk)** — the client library monorepo. Each language lives in its own subdirectory. Read the source there when a client behaves differently from the spec, and open issues against that repo rather than the docs.

**[pteri.org](https://www.pteri.org/)** — account sign-up and the dashboard where API keys are generated. Its own Help / Support and "Report a Bug" sections are the route for product questions that are not about the API surface.

## Reaching a human

| Route | Use it for |
| --- | --- |
| **[support.kakr.ai](https://support.kakr.ai)** | **Start here, on any plan.** Knowledge base, AI chat assistant, and ticket submission. |
| [Submit a ticket](https://support.kakr.ai) | Anything that needs a person to look at your account. |
| [Enterprise contact form](/docs/api-reference/enterprise#need-enterprise-access) | Dedicated nodes, custom SLA, security onboarding, procurement. |
| [GitHub issues](https://github.com/kakrlabs-Inc/liaas-sdk/issues) | Client library bugs. Say which language directory you are using. |
| [contact@kakr.ai](mailto:contact@kakr.ai) | General company enquiries. `kakr.org` redirects to `kakr.ai`. |

`support.kakr.ai` is the front door regardless of plan — Free and paid customers alike. The
enterprise form is for commercial conversations, not for debugging.

<Callout type="warn" title="Response targets are not published">

<Pill kind="verify">Needs verification</Pill>

pteri.org states support is "available 24/7" alongside community support. No response-time target,
escalation path, or per-plan support tier is published anywhere we can check, and neither is a
numeric uptime figure. Read the status panel above for actual platform state.

</Callout>

## Next

<Cards cols={2}>
  <Card title="FAQs" to="/docs/help/faqs">Common questions about getting started, addresses, balances, and errors.</Card>
  <Card title="Errors" to="/docs/api-reference/errors">What the API returns when a request does not succeed.</Card>
</Cards>
