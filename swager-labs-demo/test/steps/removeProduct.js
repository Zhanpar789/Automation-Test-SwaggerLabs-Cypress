import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { ProductPage } from "../../src/pages/ProductPage";

const productPage = new ProductPage();


Given ('all Product add to cart', () => {
    productPage.addAllProductToCart();
});

When ('User Remove {string} from cart', (Product) => {
    cy.wait(1000);
    productPage.removeOneOfProduct(Product);
});

Then ('User will see Product {string} Removed', (Product) => {
    cy.wait(1000);
    productPage.verifyProductRemoved(Product);
});

When ('User Remove all Product', () => {
    productPage.removeAllProduct();
}); 

Then ('User will see all Product Removed', () => {
    productPage.verifyAllProductsRemoved();
});