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
    verifyProductBackpackRemoved(){
        this.productBackpackRemoved.should('be.visible');
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
    verifyProductTshirtRemoved(){
        this.productTshirtRemoved.should('be.visible');
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
    verifyProductBikeLightRemoved(){
        this.productBikeLightRemoved.should('be.visible');
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
    verifyProductFleeceJacketRemoved(){
        this.productFleeceJacketRemoved.should('be.visible')
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
    verifyProductOnesieRemoved(){
        this.productOnesieRemoved.should('be.visible');
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
    verifyProductTshirtRedRemoved(){
        this.productTshirtRedRemoved.should('be.visible');
    }

}