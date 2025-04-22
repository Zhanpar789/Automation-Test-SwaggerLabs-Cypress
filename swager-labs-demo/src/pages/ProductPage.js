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

    removeOneOfProduct(productName){
        const testId = this.productData[productName];
        cy.get(`[data-test="remove-${testId}"]`).click();
    }

    verifyProductAdded(productName) {
        const testId = this.productData[productName];
        cy.get(`[data-test="remove-${testId}"]`).should('be.visible');
    }

    verifyProductRemoved(productName){
        const testId = this.productData[productName];
        cy.get(`[data-test="add-to-cart-${testId}"]`).should('be.visible');
    }

    addAllProductToCart() {
        Object.values(this.productData).forEach((testId) => {
            cy.get(`[data-test="add-to-cart-${testId}"]`).click();
        });
    }

    removeAllProduct(){
        Object.values(this.productData).forEach((testId) => {
            cy.get(`[data-test="remove-${testId}"]`).click();
        });
    }

    verifyAllProductsAdded() {
        Object.values(this.productData).forEach((testId) => {
            cy.get(`[data-test="remove-${testId}"]`).should('be.visible');
        });
    }
    verifyAllProductsRemoved() {
        Object.values(this.productData).forEach((testId) => {
            cy.get(`[data-test="add-to-cart-${testId}"]`).should('be.visible');
        });
    }

    get shoopingCartIcon(){
        return cy.get('[data-test="shopping-cart-link"]')
    }
    clickShoopingCartIcon(){
        this.shoopingCartIcon.click();
    }
    
    get sauceLabsBackpack(){
        return cy.get('data-test="inventory-item-name"');
    }
    clickSauceLabsBackpack(){
        this.sauceLabsBackpack.click();
    }

    get sauceLabsBikeLight(){
        return cy.get('[data-test="inventory-item-name"]');
    }
    clickSauceLabsBikeLight(){
        this.sauceLabsBikeLight.click();
    }

    get sauceLabsBoltTshirt(){
        return cy.get('[data-test="inventory-item-name"]');
    }
    clickSauceLabsBoltTshirt(){
        this.sauceLabsBoltTshirt.click();
    }

    get sauceLabsFleeceJacket(){
        return cy.get('[data-test="inventory-item-name"]');
    }
    clickSauceLabsFleeceJacket(){
        this.sauceLabsFleeceJacket.click();
    }

    get sauceLabsOneSie(){
        return cy.get('[data-test="inventory-item-name"]');
    }
    clickSauceLabsOneSie(){
        this.sauceLabsOneSie.click();
    }

    get sauceLabsTshirtRed(){
        return cy.get('[data-test="inventory-item-name"]');
    }
    clickSauceLabsTshirtRed(){
        this.sauceLabsTshirtRed.click();
    }

}