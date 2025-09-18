import { When } from "@badeball/cypress-cucumber-preprocessor";
import { Sidebar } from "../../src/pages/ProductPage";

const sidebar = new Sidebar();

When('User click Burger Button', () => {
    sidebar.clickBurgerButton();
});

When('User click All Items Sidebar', () => {
    sidebar.clickAllItemsSidebar();
});
When('User click About Sidebar', () => {
    sidebar.clickAboutSidebar();
});
When('User click Logout Sidebar', () => {
    sidebar.clickLogoutSidebar();
});
When('User click Reset App State Sidebar', () => {
    sidebar.clickResetAppStateSidebar();
});

