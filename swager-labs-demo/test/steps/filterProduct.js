import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { ProductPage } from "../../src/pages/ProductPage";

const productPage = new ProductPage();

When('User click filter Product', () => {
    productPage.clickFilterProduct();
});

When('User select filter Product to {string}', (Filter) => {
    productPage.selectFilterProduct(Filter);
});

Then('User will see filter Product Selected to {string}', (Filter) => {
    productPage.verifyFilterSelected(Filter);
});

