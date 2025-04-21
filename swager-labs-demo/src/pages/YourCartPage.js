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

    get buttonContinueShooping(){
        return cy.get('[data-test="continue-shopping"]');
    }
    verifyButtonContinueShooping(){
        this.buttonContinueShooping.should('be.visible');
    }
    clickButtonContinueShooping(){
        this.buttonContinueShooping.click();
    }
}