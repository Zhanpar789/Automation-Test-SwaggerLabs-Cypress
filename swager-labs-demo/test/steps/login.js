import { Given, When, Then, } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../../src/pages/LoginPage";

const loginPage = new LoginPage();

Given('User access to SauceDemo', () => {
    loginPage.urlLoginPage();
}); 

When('User Input Valid Username', () => {
    loginPage.clickUsernameField();
    cy.wait(2000);
    loginPage.fillUsernameField();
});

When('User Input Valid Password', () => {
    loginPage.clickUsernameField();
    cy.wait(2000);
    loginPage.fillPasswordField();
});

When('User click Button Login', () => {
    loginPage.clickButtonLogin();
    cy.wait(2000);
});

