import { Given, When, defineParameterType } from "@badeball/cypress-cucumber-preprocessor";
import ProductPage, { Sidebar } from "../../src/pages/ProductPage";

const productPage = new ProductPage();
const sidebar = new Sidebar();

defineParameterType({
    name: 'stringPlus', // nama defineParameterType nya 
    regexp: /"(?:[^"\\]|\\.)*"(?:\s+"(?:[^"\\]|\\.)*")*/,
    transformer: (raw) => {
        const re = /"((?:[^"\\]|\\.)*)"/g;
        const matches = raw.match(re) || [];
        return matches.map(m => m.slice(1, -1).replace(/\\"/g, '"'));
    },
    useForSnippets: false,
});

Given('User at inventory page', () => {
    cy.visit(`${Cypress.env("sauce_demo")}`)
    cy.wait(2000);
});

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