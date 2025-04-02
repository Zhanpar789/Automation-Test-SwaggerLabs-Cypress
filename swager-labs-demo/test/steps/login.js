import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../../src/pages/LoginPage";
import { ProductPage } from "../../src/pages/ProductPage";

const loginPage = new LoginPage();
const productPage = new ProductPage();

Given('User access to SauceDemo', () => {
    loginPage.urlLoginPage();
}); 

When('User Input {string} Valid Username', (username) => {
    loginPage.clickUsernameField();
    cy.wait(2000);
    loginPage.fillUsernameField(username);
});

When('User Input {string} Valid Password', (password) => {
    loginPage.clickPasswordField();
    cy.wait(2000);
    loginPage.fillPasswordField(password);
});

When('User click Button Login', () => {
    loginPage.clickButtonLogin();
    cy.wait(2000);
});

Then('User Success Login to SauceDemo', () => {
    productPage.verifyTittleProductPage();
});

When('User Input Invalid Username', () => {
    loginPage.clickUsernameField();
    cy.wait(2000);
    loginPage.fillWrongUsernameField();
});

When('User Input Invalid Password', () => {
    loginPage.clickPasswordField();
    cy.wait(2000);
    loginPage.fillWrongPasswordField();
});

Then('User Failed Login to SauceDemo', () => {
    loginPage.verifyFailedLoginMessage();
});

