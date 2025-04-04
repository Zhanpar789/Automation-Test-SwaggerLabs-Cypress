import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { ProductPage } from "../../src/pages/ProductPage";

const productPage = new ProductPage();

When ('User Add To Cart Product BackPack', () => {
    productPage.clickAddToCartProductBackpack();
});

When ('User Add To Cart Product T-Shirt', () => {
    productPage.clickAddToCartProductTshirt();
});

When ('User Add To Cart Product Bike Light', () => {
    productPage.clickAddToCartProductBikeLight();
});

When ('User Add To Cart Product Fleece Jacket', () => {
    productPage.clickAddToCartProductFleeceJacket();
});

When ('User Add To Cart Product Onesie', () => {
    productPage.clickAddToCartProductOnesie();
});

When ('User Add To Cart Product T-Shirt Red', () => {
    productPage.clickAddToCartProductTshirtRed();
});