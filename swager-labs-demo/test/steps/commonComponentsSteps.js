import { When } from "@badeball/cypress-cucumber-preprocessor";
import ProductPage, { Sidebar } from "../../src/pages/ProductPage";

const productPage = new ProductPage();
const sidebar = new Sidebar();

When('User click Burger Button', () => {
    sidebar.clickBurgerButton();
});

When('User click All Items Sidebar', () => {
    sidebar.clickAllItemsSidebar();
});

When('User click About Sidebar', () => {
    sidebar.aboutSidebar();
});

When('User click Logout Sidebar', () => {
    sidebar.clickLogoutSidebar();
});

When('User click Reset App State Sidebar', () => {
    sidebar.clickResetAppStateSidebar();
});

When('User click cross Button', () => {
    sidebar.clickCrossButton();
});

When('User click shooping cart Button', () => {
    productPage.clickShoopingCartIcon();
});

When('User click Sauce Labs Backpack', () => {
    productPage.clickSauceLabsBackpack();
});