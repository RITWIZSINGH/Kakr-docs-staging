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

**[pteri.org](https://www.pteri.org/)** — account sign-up and the dashboard where API keys are generated.

<Callout type="warn" title="Support channels are not documented yet">

<Pill kind="verify">Needs verification</Pill>

The resources above are all self-serve. Which support channel to use for a direct request, who owns it, and how quickly anyone responds are not confirmed here, so this page makes no claim about them. It also states no uptime figure or service level — read the status page for actual platform state.

</Callout>

## Next

<Cards cols={2}>
  <Card title="FAQs" to="/docs/help/faqs">Common questions about getting started, addresses, balances, and errors.</Card>
  <Card title="Errors" to="/docs/api-reference/errors">What the API returns when a request does not succeed.</Card>
</Cards>
