export class ProductPage {
    urlProductPage(){
        cy.visit('https://www.saucedemo.com/inventory.html');
    }
    get tittleProductPage(){
        return cy.get('[data-test="title"]').contains('Products');
    }
    verifyTittleProductPage(){
        this.tittleProductPage.should('be.visible');
    }
    
    get productBackpack(){
        return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]');
    }

    get productTshirt(){
        return cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
    }

    get productBikeLight(){
        return cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]');
    }

    get productFleeceJacket(){
        return cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
    }

    get productOnesie(){
        return cy.get('[data-test="add-to-cart-sauce-labs-onesie"]');
    }

    get productTshirtRed(){
        return cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]');
    }

}