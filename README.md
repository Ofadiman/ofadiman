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

- Create a new UI for a legacy service, utilizing [React](https://react.dev/) to modernize the design, enhance user experience and extend existing features.
- Develop E2E tests in [Cypress](https://www.cypress.io/) running on eventually consistent, distributed system ensuring reliable execution in both CI and local environments and minimizing test flakiness.
- Maintain over 95% code coverage across unit and integration tests, upholding high standards for code quality and reliability.
- Create multiple proof of concepts (PoC's) projects to validate new technologies and architectures.
- Design API schema for a new service in [Golang](https://go.dev/), adhering to [OpenAPI](https://swagger.io/specification/) specification standard.
- Create a complex environment for local application development.

### [TVN Warner Bros. Discovery](https://www.linkedin.com/company/166545/)

**Software Engineer** | 12.2022 - 10.2023

- Migrated the CI/CD of the [React](https://react.dev/) component library from [Jenkins](https://www.jenkins.io/) to [GitHub Actions](https://github.com/features/actions), which sped up builds and cut pipeline maintenance.
- Implemented user-interaction analytics for server-side rendered [React](https://react.dev/) applications with [Google Tag Manager](https://developers.google.com/tag-platform/tag-manager/web) and [Google Analytics 4](https://developers.google.com/analytics/devguides/collection/ga4).
- Added [OpenTelemetry](https://opentelemetry.io/) distributed tracing to [Go](https://go.dev/) applications built on [Gin](https://gin-gonic.com/) and [Node.js](https://nodejs.org/en) applications built on [Fastify](https://www.fastify.io/), to help find performance bottlenecks.
- Built [React](https://react.dev/) components that follow the company's design system.

### [NeuroSYS](https://www.linkedin.com/company/1064681/)

**Software Engineer** | 03.2022 - 11.2022

- Built two core backend services for a SaaS platform that controls access to IoT devices: a booking system for reserving and renting spaces, and an API for issuing permission-based virtual keys to devices such as smart doors.
- Applied [Domain-Driven Design](https://en.wikipedia.org/wiki/Domain-driven_design) (DDD), [Command Query Responsibility Segregation](https://en.wikipedia.org/wiki/Command%E2%80%93query_separation) (CQRS), and [Event Sourcing](https://en.wikipedia.org/wiki/Event-driven_architecture).
- Stack: [TypeScript](https://www.typescriptlang.org/), [Node.js](https://nodejs.org/en), [Nest.js](https://nestjs.com/), [PostgreSQL](https://www.postgresql.org/).

### [Netguru](https://www.linkedin.com/company/2488424/)

**Software Engineer** | 04.2021 - 02.2022

- Built the backend of a payment processing microservice with a direct SEPA integration.
- Built a REST API with admin features for creating fundraising campaigns for non-governmental organizations.
- Built an internal [Slack](https://api.slack.com/bot-users) chatbot that automates employees' everyday tasks.
- Applied [Domain-Driven Design](https://en.wikipedia.org/wiki/Domain-driven_design) (DDD), [Command Query Responsibility Segregation](https://en.wikipedia.org/wiki/Command%E2%80%93query_separation) (CQRS), and [Event Sourcing](https://en.wikipedia.org/wiki/Event-driven_architecture).
- Provisioned [AWS](https://aws.amazon.com/) infrastructure with [Terraform](https://www.terraform.io/), including S3 buckets and Cognito user pools.
- Stack: [TypeScript](https://www.typescriptlang.org/), [Node.js](https://nodejs.org/en), [Koa.js](https://koajs.com/), [Nest.js](https://nestjs.com/), [GraphQL](https://graphql.org/), [Serverless Framework](https://www.serverless.com/), [PostgreSQL](https://www.postgresql.org/), [MongoDB](https://www.mongodb.com/).

### [Rumblefish](https://www.linkedin.com/company/18421191/)

**Junior Software Engineer** | 07.2020 - 03.2021

- Built the mobile app of a SaaS CRM system on top of its existing platform.
- Built an admin panel for managing all of the application's resources, with charts for data visualization.
- Stack: [React](https://react.dev/), [React Native](https://reactnative.dev/), [Redux](https://redux.js.org/), [Redux Toolkit](https://redux-toolkit.js.org/), [TypeScript](https://www.typescriptlang.org/), [Node.js](https://nodejs.org/en), [Nest.js](https://nestjs.com/), [PostgreSQL](https://www.postgresql.org/), [AWS](https://aws.amazon.com/).

## Languages

- Native proficiency in Polish.
- Full professional proficiency in English, with significant experience working with clients from countries such as France, Norway, and the USA; skilled in clearly articulating progress, challenges, and thought processes while collaborating with diverse teams.
