# Architect AI Agent: Turbo Repo Starter

This repository serves as the workspace for the **Architect AI Agent** project. Built with **Turborepo**, it enables efficient development and management of multiple packages and applications, ensuring seamless collaboration and optimized builds.

## About Architect AI Agent

The **Architect AI Agent** is an innovative tool designed to develop and orchestrate other AI agents, empowering them to create tools necessary for accomplishing tasks. Its functionality spans tool construction, configuration, and deployment, offering a self-contained ecosystem for agent-driven problem-solving.

## Getting Started

To get started with this repository, clone it and set up your development environment:

```sh
npx create-turbo@latest -e with-tailwind
```

## Project Structure

This repository leverages Turborepo to manage a monorepo structure, featuring multiple apps and packages:

### Apps and Packages

- **`apps/docs`**: A [Next.js](https://nextjs.org/) application that serves as the documentation site, styled with [Tailwind CSS](https://tailwindcss.com/).
- **`apps/web`**: The primary [Next.js](https://nextjs.org/) application for the Architect AI Agent interface, utilizing [Tailwind CSS](https://tailwindcss.com/).
- **`packages/ui`**: A shared React component library styled with [Tailwind CSS](https://tailwindcss.com/), used across `web` and `docs` apps.
- **`packages/@repo/eslint-config`**: Centralized `eslint` configurations for consistency (includes `eslint-config-next` and `eslint-config-prettier`).
- **`packages/@repo/typescript-config`**: Shared `tsconfig.json` configurations for consistent TypeScript setup.

## Key Features

- **Tool Management**: Build and orchestrate tools for AI agents to execute tasks autonomously.
- **Customizable UI**: Leverage a shared component library for consistent and scalable design.
- **Optimized Builds**: Utilize Turborepo for efficient dependency management and build optimization.

### Building Shared Components

The `ui` package compiles reusable styles and components into a `dist` directory. This approach ensures:

1. Shared `tailwind.config.js` for apps and packages.
2. Simple compilation using Next.js Compiler and `tailwindcss`.
3. Namespace isolation via `ui-` class prefix to prevent conflicts.

Alternatively, you can consume `ui` directly from the source by updating the `tailwind.config.js` of the consuming apps. For example:

```js
content: [
  // App content
  "src/**/*.{js,ts,jsx,tsx}",
  // Include packages
  "../../packages/ui/**/*.{js,ts,jsx,tsx}",
],
```

### Utilities

This repository is equipped with:

- [Tailwind CSS](https://tailwindcss.com/) for rapid UI development.
- [TypeScript](https://www.typescriptlang.org/) for static type checking.
- [ESLint](https://eslint.org/) for linting and code quality.
- [Prettier](https://prettier.io/) for consistent formatting.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-repo/architect-ai-agent.git
   cd architect-ai-agent
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

4. Build the project:

   ```sh
   npm run build
   ```

5. Run linting and formatting checks:

   ```sh
   npm run lint
   npm run format
   ```

## Contribution

Contributions to the **Architect AI Agent** project are welcome! Follow the [contributing guidelines](CONTRIBUTING.md) to submit bug fixes, features, or improvements.

## License

This project is licensed under the [MIT License](LICENSE).
