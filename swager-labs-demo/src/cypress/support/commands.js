import { LoginPage } from "../../pages/LoginPage";
import { ProductPage } from "../../pages/ProductPage";

Cypress.Commands.add('login', () => {
    const loginPage = new LoginPage();
    const productPage = new ProductPage();

    cy.visit(`${Cypress.env('sauce_demo')}`);
    cy.wait(2000);
    loginPage.fillUsernameField(Cypress.env('standard_username'), Cypress.env('all_password'))
    loginPage.clickButtonLogin();
    productPage.verifyTittleProductPage()
  });