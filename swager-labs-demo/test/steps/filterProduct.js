import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { ProductPage } from "../../src/pages/ProductPage";

const productPage = new ProductPage();

When('User select filter Product to {string}', (Filter) => {
    cy.wait(1000);
    productPage.selectFilterProduct(Filter);
});

Then('User will see filter Product Selected to {string}', (Filter) => {
    cy.wait(1000);
    productPage.verifyFilterSelected(Filter);
    cy.wait(1000);
});

