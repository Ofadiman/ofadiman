# Szymon Jaworski | Software Engineer

I build the Agent Management UI in Splunk Enterprise with React and TypeScript. What I care about most is making changes safe to ship, whether a person or an AI agent wrote them:

- **E2E tests that run in CI.** I created a Cypress E2E suite of 100+ tests that runs against a freshly provisioned Splunk environment for changes to both the UI and its backend services.
- **Unit and integration tests as a safety net.** Over 1,000 Cypress component tests keep line coverage at 95.8%. As agents write more of the code, tests are how their changes get verified, so I hold the bar at 95%+.
- **Strict quality gates.** I configure strict TypeScript, ESLint, Prettier, and Stylelint, all enforced in CI.
- **Developer tooling.** I maintain a Docker Compose environment that runs the whole stack locally: Splunk, and the forwarders and OpenTelemetry collectors it manages. Engineers develop against it, and AI agents use it to test their changes on a live system.
- **High-quality AI output.** I write and maintain the `AGENTS.md` and topic guides that tell coding agents how the codebase works and what to run before a change is done.

## Contact

- GitHub: [Ofadiman](https://github.com/ofadiman)
- LinkedIn: [Szymon Jaworski](https://www.linkedin.com/in/szymon-jaworski-674112205/)

## Why would you want to work with me?

- I consistently maintain clear and thorough documentation, ensuring shorter onboarding time for new team members and streamlined execution of infrequent tasks, ultimately improving team efficiency.
- As a versatile programmer with expertise in frontend, backend, and devops tasks, I can quickly adapt to project requirements and contribute effectively across various stages of the development process.
- Passionate about sharing my knowledge with colleagues, I have created and delivered presentations on topics such as "[JavaScript Code Generators](https://github.com/Ofadiman/code-generation-tools-comparison)," "[Functional Programming in TypeScript](https://docs.google.com/presentation/d/1M2KLkeMSEQOIgr579c9B52ZExHKjTMCOm60wnpg4AWY/edit#slide=id.p)," and "APIs for Non-Technical People," fostering a culture of continuous learning within the team.
- By leveraging AI tools, I enhance my development speed, generate innovative ideas, and produce higher quality documentation, ensuring that I deliver efficient and cutting-edge solutions in the rapidly evolving tech landscape.

## My professional experience

### [Splunk](https://www.linkedin.com/company/splunk/)

**Software Engineer** | 11.2023 - Ongoing

- Frontend tech lead for Agent Management in Splunk Enterprise since January 2026. I set the technical direction, scope work for other engineers, partner with product management, design, and product security, and handle customer issues that cross the UI and the backend.
- Built the UI for remote configuration of OpenTelemetry Collectors with configuration sets, shipped in Splunk Enterprise 10.6, and co-authored its design. I worked spec-first with AI agents: I drafted the specification and component design with OpenSpec, had agents implement it, then refined the result over six weeks of review and testing.
- Built the app content previewer in Splunk Enterprise 10.4 end to end: the design, the Go API, the React UI, integration tests, and the security review. Administrators browse deployment app files in the browser instead of logging in to the server. It was the team's first feature built almost entirely by AI agents.
- Built the server class configuration viewer in Splunk Enterprise 10.4, both the Go endpoints and the UI. It shows the merged `serverclass.conf` settings that btool resolves, without SSH access to the host.
- Built the frontend of the effective configuration view on the agent details page, which shows the merged btool output of an agent's configuration files such as `inputs.conf` and `outputs.conf`. I virtualized its list so it stays fast for configurations thousands of lines long.
- Built the new server class wizard, which replaced separate flows for creating a server class, assigning apps, and assigning agents with one guided flow that previews the result.
- One of the main frontend engineers on the React and TypeScript rewrite of the legacy deployment server UI, shipped as Agent Management in Splunk Enterprise 9.4. I built the agents table, the applications pages, data fetching, and type-safe routing, and wrote the initial OpenAPI specification for the new Go backend.
- Drove the removal of the legacy UI in Splunk Enterprise 10.1 across three codebases, and recreated its test scenarios in the Cypress E2E suite.
- Stack: React, TypeScript, TanStack Query, Zod, Splunk UI, Storybook, Cypress, Go, OpenAPI, Docker.

### [TVN Warner Bros. Discovery](https://www.linkedin.com/company/166545/)

**Software Engineer** | 12.2022 - 10.2023

- Migrated the CI/CD of the [React](https://react.dev/) component library from [Jenkins](https://www.jenkins.io/) to [GitHub Actions](https://github.com/features/actions), which sped up builds and cut pipeline maintenance.
- Implemented user-interaction analytics for server-side rendered [React](https://react.dev/) applications with [Google Tag Manager](https://developers.google.com/tag-platform/tag-manager/web) and [Google Analytics 4](https://developers.google.com/analytics/devguides/collection/ga4).
- Added [OpenTelemetry](https://opentelemetry.io/) distributed tracing to [Go](https://go.dev/) applications built on [Gin](https://gin-gonic.com/) and [Node.js](https://nodejs.org/en) applications built on [Fastify](https://www.fastify.io/), to help find performance bottlenecks.
- Built [React](https://react.dev/) components that follow the company's design system.

### [NeuroSYS](https://www.linkedin.com/company/1064681/)

**Software Engineer** | 03.2022 - 11.2022

- Built two core backend services for a SaaS platform that controls access to IoT devices: a booking system for reserving and renting spaces, and an API for issuing permission-based virtual keys to devices such as smart doors.
- Stack: [TypeScript](https://www.typescriptlang.org/), [Node.js](https://nodejs.org/en), [Nest.js](https://nestjs.com/), [PostgreSQL](https://www.postgresql.org/). Patterns: DDD, CQRS, Event Sourcing.

### [Netguru](https://www.linkedin.com/company/2488424/)

**Software Engineer** | 04.2021 - 02.2022

- Built the backend of a payment processing microservice with a direct SEPA integration.
- Built a REST API with admin features for creating fundraising campaigns for non-governmental organizations.
- Built an internal [Slack](https://api.slack.com/bot-users) chatbot that automates employees' everyday tasks.
- Provisioned [AWS](https://aws.amazon.com/) infrastructure with [Terraform](https://www.terraform.io/), including S3 buckets and Cognito user pools.
- Stack: [TypeScript](https://www.typescriptlang.org/), [Node.js](https://nodejs.org/en), [Koa.js](https://koajs.com/), [Nest.js](https://nestjs.com/), [GraphQL](https://graphql.org/), [Serverless Framework](https://www.serverless.com/), [PostgreSQL](https://www.postgresql.org/), [MongoDB](https://www.mongodb.com/). Patterns: DDD, CQRS, Event Sourcing.

### [Rumblefish](https://www.linkedin.com/company/18421191/)

**Junior Software Engineer** | 07.2020 - 03.2021

- Built the mobile app of a SaaS CRM system on top of its existing platform.
- Built an admin panel for managing all of the application's resources, with charts for data visualization.
- Stack: [React](https://react.dev/), [React Native](https://reactnative.dev/), [Redux](https://redux.js.org/), [Redux Toolkit](https://redux-toolkit.js.org/), [TypeScript](https://www.typescriptlang.org/), [Node.js](https://nodejs.org/en), [Nest.js](https://nestjs.com/), [PostgreSQL](https://www.postgresql.org/), [AWS](https://aws.amazon.com/).

## Languages

- Native proficiency in Polish.
- Full professional proficiency in English, with significant experience working with clients from countries such as France, Norway, and the USA; skilled in clearly articulating progress, challenges, and thought processes while collaborating with diverse teams.
