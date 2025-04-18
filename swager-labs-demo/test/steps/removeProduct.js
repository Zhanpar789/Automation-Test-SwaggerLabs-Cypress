import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { ProductPage } from "../../src/pages/ProductPage";

const productPage = new ProductPage();


Given ('all Product add to cart', () => {
    productPage.addAllProductToCart();
});

When ('User Remove {string} from cart', () => {
    productPage.removeOneOfProduct();
});

When ('User Remove all Product', () => {
    productPage.removeAllProduct();
}); 