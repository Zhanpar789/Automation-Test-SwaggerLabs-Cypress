import { When } from "@badeball/cypress-cucumber-preprocessor";
import { Sidebar } from "../../src/pages/ProductPage";

const sidebar = new Sidebar();

When('User click Burger Button', () => {
    sidebar.clickBurgerButton();
});

