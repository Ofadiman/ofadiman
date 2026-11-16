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

- Migrate CI/CD pipelines for [React](https://react.dev/) component libraries from [Jenkins](https://www.jenkins.io/) to [GitHub Actions](https://github.com/features/actions), resulting in improved build times, and reduced maintenance efforts.
- Implement analytics for server-side rendered [React](https://react.dev/) applications using [Google Tag Manager](https://developers.google.com/tag-platform/tag-manager/web) and [Google Analytics 4](https://developers.google.com/analytics/devguides/collection/ga4), enabling comprehensive tracking of user interactions and valuable insights for data-driven decision making.
- Integrate distributed tracing across [Golang](https://go.dev/) applications utilizing the [Gin framework](https://gin-gonic.com/) and [Node.js](https://nodejs.org/en) applications utilizing the [Fastify](https://www.fastify.io/) framework using [OpenTelemetry](https://opentelemetry.io/), enhancing system observability and enabling efficient identification and resolution of performance bottlenecks.
- Develop [React](https://react.dev/) components adhering to the organization's internally established design system, ensuring consistent user interfaces and seamless integration with existing applications and workflows.

### [NeuroSYS](https://www.linkedin.com/company/1064681/)

**Software Engineer** | 03.2022 - 11.2022

- Develop a SaaS application for clients managing access to IoT devices, working as a backend developer responsible for building two key backend services.
- Implement a booking system that enables users to reserve and rent spaces.
- Design and implement APIs, enabling customers to create virtual access keys for IoT devices (e.g., smart doors) based on user permissions.
- Utilize [TypeScript](https://www.typescriptlang.org/), [Node.js](https://nodejs.org/en), and [Nest.js](https://nestjs.com/) for backend development, with [PostgreSQL](https://www.postgresql.org/) as the primary database.
- Employ architectural patterns such as [Domain-Driven Design](https://en.wikipedia.org/wiki/Domain-driven_design) (DDD), [Command Query Responsibility Segregation](https://en.wikipedia.org/wiki/Command%E2%80%93query_separation) (CQRS), and [Event Sourcing](https://en.wikipedia.org/wiki/Event-driven_architecture) to optimize application design.

### [Netguru](https://www.linkedin.com/company/2488424/)

**Software Engineer** | 04.2021 - 02.2022

- Develop the backend component of a payment processing microservice, featuring direct integration with the SEPA payment system.
- Develop a REST API with administrative functionality for creating fundraising campaigns for non-governmental organizations.
- Develop a chatbot application for internal use, seamlessly integrated with [Slack](https://api.slack.com/bot-users) to assist employees with daily tasks and improve productivity by offering various automations directly within their chat interface.
- Employ architectural patterns such as [Domain-Driven Design](https://en.wikipedia.org/wiki/Domain-driven_design) (DDD), [Command Query Responsibility Segregation](https://en.wikipedia.org/wiki/Command%E2%80%93query_separation) (CQRS), and [Event Sourcing](https://en.wikipedia.org/wiki/Event-driven_architecture) to optimize application design.
- Deploy and configure infrastructure on [AWS](https://aws.amazon.com/) using [Terraform](https://www.terraform.io/), including services such as S3 buckets and AWS Cognito user pools.
- Utilize [TypeScript](https://www.typescriptlang.org/), [Node.js](https://nodejs.org/en), [Koa.js](https://koajs.com/), and [Nest.js](https://nestjs.com/) for backend development, leveraging diverse frameworks to build modular and maintainable applications. Employ [GraphQL](https://graphql.org/) for efficient data retrieval, and the [Serverless framework](https://www.serverless.com/) for scalable infrastructure management. Work with [PostgreSQL](https://www.postgresql.org/) and [MongoDB](https://www.mongodb.com/) as primary databases to cater to diverse project requirements.

### [Rumblefish](https://www.linkedin.com/company/18421191/)

**Junior Software Engineer** | 07.2020 - 03.2021

- Develop the mobile component of a SaaS CRM system, ensuring seamless integration with the existing platform and providing an intuitive, user-friendly interface for efficient customer relationship management on the go.
- Develop a comprehensive admin panel for managing all application resources, featuring various data visualization tools, including different types of diagrams, to provide actionable insights and facilitate informed decision-making.
- Utilize technologies such as [React](https://react.dev/), [React Native](https://reactnative.dev/), [Redux](https://redux.js.org/), [Redux Toolkit](https://redux-toolkit.js.org/), and [TypeScript](https://www.typescriptlang.org/) for frontend development. Leverage [Node.js](https://nodejs.org/en), [Nest.js](https://nestjs.com/), and [PostgreSQL](https://www.postgresql.org/) for backend development. Employ [AWS](https://aws.amazon.com/) services for infrastructure management to deliver a scalable and robust solutions.

## Languages

- Native proficiency in Polish.
- Full professional proficiency in English, with significant experience working with clients from countries such as France, Norway, and the USA; skilled in clearly articulating progress, challenges, and thought processes while collaborating with diverse teams.
