import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { ProductPage } from "../../src/pages/ProductPage";

const productPage = new ProductPage();

When('User select filter Product to {string}', () => {
    productPage.selectFilterProduct();
});

