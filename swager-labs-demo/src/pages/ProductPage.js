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

    clickAddToCartProductBackpack(){
        this.productBackpack.click();
    }

    get productTshirt(){
        return cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
    }

    clickAddToCartProductTshirt(){
        this.productTshirt.click();
    }

    get productBikeLight(){
        return cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]');
    }

    clickAddToCartProductBikeLight(){
        this.productBikeLight.click();
    }

    get productFleeceJacket(){
        return cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
    }

    clickAddToCartProductFleeceJacket(){
        this.productFleeceJacket.click();
    }

    get productOnesie(){
        return cy.get('[data-test="add-to-cart-sauce-labs-onesie"]');
    }

    clickAddToCartProductOnesie(){
        this.productOnesie.click();
    }

    get productTshirtRed(){
        return cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]');
    }

    clickAddToCartProductTshirtRed(){
        this.productTshirtRed.click();
    }

}