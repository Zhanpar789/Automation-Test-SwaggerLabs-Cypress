# AGENTS.md

## Project Overview

Automation testing project using **Cypress** with **Cucumber (BDD)** for the [SauceDemo](https://www.saucedemo.com) website.

## Tech Stack

- **Cypress** v14 - E2E test runner
- **@badeball/cypress-cucumber-preprocessor** - BDD/Cucumber support
- **@bahmutov/cypress-esbuild-preprocessor** - fast bundling
- **pnpm** - package manager

## Project Structure

```
swager-labs-demo/
  cypress.config.js          # Cypress configuration
  src/
    pages/                   # Page Object Models (LoginPage, ProductPage, etc.)
    components/              # Shared/reusable component helpers
    cypress/support/         # Cypress support & custom commands
  test/
    features/                # Cucumber .feature files (Gherkin syntax)
    steps/                   # Step definition files (.js)
cypress.env.json             # Environment variables (URL, credentials)
```

## Commands

- Open Cypress Test Runner: `pnpm sauce-demo:open`
- Run all tests headless: `pnpm cypress run --config-file swager-labs-demo/cypress.config.js`

## Conventions

- Feature files use Gherkin syntax (`Given`, `When`, `Then`, `And`).
- One step definition file per feature domain (e.g., `login.js`, `addProduct.js`).
- Page Objects encapsulate all selectors and page interactions under `src/pages/`.
- Shared UI component helpers go in `src/components/`.
- Environment config (URLs, credentials) lives in `cypress.env.json` at the root.
- Spec pattern: `swager-labs-demo/test/features/**/*.feature`
- Step definitions pattern: `swager-labs-demo/test/steps/**/*.js`
