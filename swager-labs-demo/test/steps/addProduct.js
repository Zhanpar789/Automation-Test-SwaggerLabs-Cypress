import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { ProductPage } from "../../src/pages/ProductPage";

const productPage = new ProductPage();

Given ('User at Product Page', () => {
    cy.visit(`${Cypress.env("sauce_demo")}/inventory.html`);
    cy.wait(1000); 
})

When ('User Add To Cart Product BackPack', () => {
    productPage.clickAddToCartProductBackpack();
});

Then ('User Will See Backpack Add To Cart', () => {
    productPage.verifyProductBackpackRemoved();
})

When ('User Add To Cart Product T-Shirt', () => {
    productPage.clickAddToCartProductTshirt();
});

Then ('User Will See T-Shirt Add To Cart', () => {
    productPage.verifyProductTshirtRemoved();
})

When ('User Add To Cart Product Bike Light', () => {
    productPage.clickAddToCartProductBikeLight();
});

Then ('User Will See Bike Light Add To Cart', () => {
    productPage.verifyProductBikeLightRemoved();
})

When ('User Add To Cart Product Fleece Jacket', () => {
    productPage.clickAddToCartProductFleeceJacket();
});

Then ('User Will See Fleece Jacket Add To Cart', () => {
    productPage.verifyProductFleeceJacketRemoved();
})

When ('User Add To Cart Product Onesie', () => {
    productPage.clickAddToCartProductOnesie();
});

Then ('User Will See Onesie Add To Cart', () => {
    productPage.verifyProductOnesieRemoved();
})

When ('User Add To Cart Product T-Shirt Red', () => {
    productPage.clickAddToCartProductTshirtRed();
});

Then ('User Will See T-Shirt REd Add To Cart', () => {
    productPage.verifyProductTshirtRedRemoved();
})