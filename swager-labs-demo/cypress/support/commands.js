// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { LoginPage } from "../../src/pages/LoginPage";
import { ProductPage } from "../../src/pages/ProductPage";

Cypress.Commands.add('login', () => {
  const loginPage = new LoginPage();
  const productPage = new ProductPage();

  cy.visit(`${Cypress.env('sauce_demo')}`);
  cy.wait(2000);
  
  loginPage.fillUsernameField(Cypress.env('standard_username'));
  loginPage.fillPasswordField(Cypress.env('all_password'));
  loginPage.clickButtonLogin();
  productPage.verifyTittleProductPage();
});
