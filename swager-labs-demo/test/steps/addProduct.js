import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { ProductPage } from "../../src/pages/ProductPage";

const productPage = new ProductPage();

Given ('User at Product Page', () => {
    cy.login();
})

When('User adds {string} to cart', (productName) => {
    productPage.addToCart(productName);
});

Then('User sees {string} is added to cart', (productName) => {
    productPage.verifyProductAdded(productName);
});

When('User adds all products to cart', () => {
    productPage.addAllProductToCart();
});

Then('User sees all products are added to cart', () => {
    productPage.verifyAllProductsAdded();
});
