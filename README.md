# Szymon Jaworski | Software Engineer

I build the Agent Management UI in Splunk Enterprise with React and TypeScript. AI agents write all of my code through Claude Code and Codex, so what I care about most is making their changes safe to ship:

- **E2E tests that run in CI.** I created a Cypress E2E suite of 100+ tests that runs against a freshly provisioned Splunk environment for changes to both the UI and its backend services.
- **Unit and integration tests as a safety net.** Over 1,000 Cypress component tests keep line coverage at 95.8%. As agents write more of the code, tests are how their changes get verified, so I hold the bar at 95%+.
- **Strict quality gates.** I configure strict TypeScript, ESLint, Prettier, and Stylelint, all enforced in CI.
- **Developer tooling.** I maintain a Docker Compose environment that runs the whole stack locally: Splunk, and the forwarders and OpenTelemetry collectors it manages. Engineers develop against it, and AI agents use it to test their changes on a live system.
- **High-quality AI output.** I write and maintain the `AGENTS.md` and topic guides that tell coding agents how the codebase works and what to run before a change is done.

## Contact

- GitHub: [Ofadiman](https://github.com/ofadiman)
- LinkedIn: [Szymon Jaworski](https://www.linkedin.com/in/szymon-jaworski-674112205/)

## My professional experience

### [Splunk](https://www.linkedin.com/company/splunk/)

**Software Engineer** | Nov 2023 – present

- Frontend tech lead for Agent Management in Splunk Enterprise since January 2026. I set the technical direction, scope work for other engineers, partner with product management, design, and product security, and handle customer issues that cross the UI and the backend.
- Review code from engineers at every level, from interns to senior engineers, and guide interns and junior engineers through building features.
- Own my team's AI transformation work since February 2026: making our codebases easy for AI agents to work in through agent instruction files, skills and slash commands, AI code review, and agentic automation in CI. I set its direction and get the team involved.
- AI agents widened what I can ship on my own: besides the React UI, I now build the Go backend endpoints too, such as those behind the content previewer and the server class configuration viewer. In my first year with agents I added 2.4 times as many lines as the year before (about 52,600 versus 22,200, counting code, tests, docs, and tooling but not generated files), and five times as much Go.
- Built the UI for remote configuration of OpenTelemetry Collectors with configuration sets, shipped in Splunk Enterprise 10.6, and co-authored its design. I worked spec-first with AI agents: I drafted the specification and component design with OpenSpec, had agents implement it, then refined the result over six weeks of review and testing.
- Built the app content previewer in Splunk Enterprise 10.4 end to end: the design, the Go API, the React UI, integration tests, and the security review. Administrators browse deployment app files in the browser instead of logging in to the server. It was the team's first feature built almost entirely by AI agents.
- Built the server class configuration viewer in Splunk Enterprise 10.4, both the Go endpoints and the UI. It shows the merged `serverclass.conf` settings that btool resolves, without SSH access to the host.
- Built the frontend of the effective configuration view on the agent details page, which shows the merged btool output of an agent's configuration files such as `inputs.conf` and `outputs.conf`. I virtualized its list so it stays fast for configurations thousands of lines long.
- Built the new server class wizard, which replaced separate flows for creating a server class, assigning apps, and assigning agents with one guided flow that previews the result.
- One of the main frontend engineers on the React and TypeScript rewrite of the legacy deployment server UI, shipped as Agent Management in Splunk Enterprise 9.4. I built the agents table, the applications pages, data fetching, and type-safe routing, and wrote the initial OpenAPI specification for the new Go backend.
- Drove the removal of the legacy UI in Splunk Enterprise 10.1 across three codebases, and recreated its test scenarios in the Cypress E2E suite.
- Stack: React, TypeScript, TanStack Query, Zod, Splunk UI, Storybook, Cypress, Go, OpenAPI, Docker, Claude Code, Codex.

### [TVN Warner Bros. Discovery](https://www.linkedin.com/company/166545/)

**Software Engineer** | Dec 2022 – Oct 2023

- Moved a Next.js application to a custom server-side rendering framework built on Fastify and React. Together with the team, I migrated the home and article pages of TVN's core news services, including TVN24, Uwaga!, Dzień Dobry TVN, and TVN Style, and built the React components those pages render.
- Built the integration with the ad service that serves revenue-generating ads on those pages: code that builds site maps from article parameters, sends them to the ad service so it knows where to place ads, and renders the ads on the page.
- Migrated the CI/CD of the React component library from Jenkins to GitHub Actions, which sped up builds and cut pipeline maintenance.
- Implemented user-interaction analytics for server-side rendered React applications with Google Tag Manager and Google Analytics 4.
- Added OpenTelemetry distributed tracing to Go applications built on Gin and Node.js applications built on Fastify, to help find performance bottlenecks.
- Stack: React, Node.js, Fastify, Go, Gin, OpenTelemetry, GitHub Actions, Jenkins, Google Tag Manager, Google Analytics 4.

### [NeuroSYS](https://www.linkedin.com/company/1064681/)

**Software Engineer** | Mar 2022 – Nov 2022

- Built a booking service for reserving and renting spaces, one of the core backend services of a SaaS platform that controls access to IoT devices.
- Built a virtual key service for issuing permission-based access keys to IoT devices such as smart doors.
- Stack: TypeScript, Node.js, Nest.js, PostgreSQL. Patterns: DDD, CQRS, Event Sourcing.

### [Netguru](https://www.linkedin.com/company/2488424/)

**Software Engineer** | Apr 2021 – Feb 2022

- Built the backend of a payment processing microservice with a direct SEPA integration.
- Built a REST API with admin features for creating fundraising campaigns for non-governmental organizations.
- Built an internal Slack chatbot that automates employees' everyday tasks.
- Provisioned AWS infrastructure with Terraform, including S3 buckets and Cognito user pools.
- Stack: TypeScript, Node.js, Koa.js, Nest.js, GraphQL, Serverless Framework, PostgreSQL, MongoDB. Patterns: DDD, CQRS, Event Sourcing.

### [Rumblefish](https://www.linkedin.com/company/18421191/)

**Junior Software Engineer** | Jul 2020 – Mar 2021

- Built the mobile app of a SaaS CRM system on top of its existing platform.
- Built an admin panel for managing all of the application's resources, with charts for data visualization.
- Stack: React, React Native, Redux, Redux Toolkit, TypeScript, Node.js, Nest.js, PostgreSQL, AWS.

## Talks

- [JavaScript Code Generators](https://github.com/Ofadiman/code-generation-tools-comparison): a comparison of code generation tools in the JavaScript and TypeScript ecosystem.
- [Functional Programming in TypeScript](https://docs.google.com/presentation/d/1M2KLkeMSEQOIgr579c9B52ZExHKjTMCOm60wnpg4AWY/edit#slide=id.p): pure functions and side effects, immutability, currying, and function composition in TypeScript with Ramda and Immutable.js, and the trade-offs of the style.
- APIs for Non-Technical People: how HTTP APIs work for project managers and manual testers, covering methods, URLs, and query parameters in Postman against a demo API I built for the talk.

## Languages

Polish (native), English (full professional proficiency, with clients from France, Norway, and the USA).
