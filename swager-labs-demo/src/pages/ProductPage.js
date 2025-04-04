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

    get productBackpackRemoved(){
        return cy.get('[data-test="remove-sauce-labs-backpack"]')
    }

    clickAddToCartProductBackpack(){
        this.productBackpack.click();
    }

    get productTshirt(){
        return cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
    }

    get productTshirtRemoved(){
        return cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]')
    }

    clickAddToCartProductTshirt(){
        this.productTshirt.click();
    }

    get productBikeLight(){
        return cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]');
    }

    get productBikeLightRemoved(){
        return cy.get('[data-test="remove-sauce-labs-bike-light"]');
    }

    clickAddToCartProductBikeLight(){
        this.productBikeLight.click();
    }

    get productFleeceJacket(){
        return cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
    }
    get productFleeceJacketRemoved(){
        return cy.get('[data-test="remove-sauce-labs-fleece-jacket" ]');
    }

    clickAddToCartProductFleeceJacket(){
        this.productFleeceJacket.click();
    }

    get productOnesie(){
        return cy.get('[data-test="add-to-cart-sauce-labs-onesie"]');
    }

    get productOnesieRemoved(){
        return cy.get('[ddata-test="remove-sauce-labs-onesie"]');
    }

    clickAddToCartProductOnesie(){
        this.productOnesie.click();
    }

    get productTshirtRed(){
        return cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]');
    }

    get productTshirtRedRemoved(){
        return cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]');
    }

    clickAddToCartProductTshirtRed(){
        this.productTshirtRed.click();
    }

}