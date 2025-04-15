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
    
    productData = {
        "Backpack": "sauce-labs-backpack",
        "T-Shirt": "sauce-labs-bolt-t-shirt",
        "Bike Light": "sauce-labs-bike-light",
        "Fleece Jacket": "sauce-labs-fleece-jacket",
        "Onesie": "sauce-labs-onesie",
        "T-Shirt Red": "test.allthethings()-t-shirt-(red)"
    };

    addToCart(productName) {
        const testId = this.productData[productName];
        cy.get(`[data-test="add-to-cart-${testId}"]`).click();
    }

    verifyProductAdded(productName) {
        const testId = this.productData[productName];
        cy.get(`[data-test="remove-${testId}"]`).should('be.visible');
    }

    addAllProductToCart() {
        Object.values(this.productData).forEach((testId) => {
            cy.get(`[data-test="add-to-cart-${testId}"]`).click();
        });
    }

    verifyAllProductsAdded() {
        Object.values(this.productData).forEach((testId) => {
            cy.get(`[data-test="remove-${testId}"]`).should('be.visible');
        });
    }
    

}