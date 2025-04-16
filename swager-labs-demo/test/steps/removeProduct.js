import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { ProductPage } from "../../src/pages/ProductPage";

const productPage = new ProductPage();


Given ('all Product add to cart', () => {
    productPage.addAllProductToCart();
});

When ('User Remove {string} Product', () => {
    productPage.removeOneOfProduct();
});
