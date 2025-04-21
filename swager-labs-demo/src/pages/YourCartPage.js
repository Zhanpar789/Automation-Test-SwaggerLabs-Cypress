export class YourCartPage {
    urlYourCartPage(){
        cy.visit('https://www.saucedemo.com/cart.html');
    }

    get labelYourCartPage(){
        return cy.get('[data-test="title"]').contains('Your Cart');
    }
    verifyLabelYourCartPage(){
        this.labelYourCartPage.should('be.visible');
    }
}