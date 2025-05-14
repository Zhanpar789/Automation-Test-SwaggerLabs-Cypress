export class ProductPage {
    urlProductPage(){
        cy.visit('https://www.saucedemo.com/inventory.html');
    };
    get tittleProductPage(){
        return cy.get('[data-test="title"]').contains('Products');
    };
    verifyTittleProductPage(){
        this.tittleProductPage.should('be.visible');
    };
    
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
    };

    removeOneOfProduct(productName){
        const testId = this.productData[productName];
        cy.get(`[data-test="remove-${testId}"]`).click();
    };

    verifyProductAdded(productName) {
        const testId = this.productData[productName];
        cy.get(`[data-test="remove-${testId}"]`).should('be.visible');
    };

    verifyProductRemoved(productName){
        const testId = this.productData[productName];
        cy.get(`[data-test="add-to-cart-${testId}"]`).should('be.visible');
    };

    addAllProductToCart() {
        Object.values(this.productData).forEach((testId) => {
            cy.get(`[data-test="add-to-cart-${testId}"]`).click();
        });
    };

    removeAllProduct(){
        Object.values(this.productData).forEach((testId) => {
            cy.get(`[data-test="remove-${testId}"]`).click();
        });
    };

    verifyAllProductsAdded() {
        Object.values(this.productData).forEach((testId) => {
            cy.get(`[data-test="remove-${testId}"]`).should('be.visible');
        });
    };
    verifyAllProductsRemoved() {
        Object.values(this.productData).forEach((testId) => {
            cy.get(`[data-test="add-to-cart-${testId}"]`).should('be.visible');
        });
    };

    get shoopingCartIcon(){
        return cy.get('[data-test="shopping-cart-link"]')
    };
    clickShoopingCartIcon(){
        this.shoopingCartIcon.click();
    };
    
    get sauceLabsBackpack(){
        return cy.get('[data-test="inventory-item-name]"').contains('Sauce Labs Backpack');
    };
    clickSauceLabsBackpack(){
        this.sauceLabsBackpack.click();
    };

    get sauceLabsBikeLight(){
        return cy.get('[data-test="inventory-item-name"]').contains('Sauce Labs Bike Light');
    };
    clickSauceLabsBikeLight(){
        this.sauceLabsBikeLight.click();
    };

    get sauceLabsBoltTshirt(){
        return cy.get('[data-test="inventory-item-name"]').contains('Sauce Labs Bolt T-Shirt');
    };
    clickSauceLabsBoltTshirt(){
        this.sauceLabsBoltTshirt.click();
    };

    get sauceLabsFleeceJacket(){
        return cy.get('[data-test="inventory-item-name"]').contains('Sauce Labs Fleece Jacket');
    };
    clickSauceLabsFleeceJacket(){
        this.sauceLabsFleeceJacket.click();
    };

    get sauceLabsOneSie(){
        return cy.get('[data-test="inventory-item-name"]').contains('Sauce Labs Onesie');
    };
    clickSauceLabsOneSie(){
        this.sauceLabsOneSie.click();
    };

    get sauceLabsTshirtRed(){
        return cy.get('[data-test="inventory-item-name"]').contains('Test.allTheThings() T-Shirt (Red)');
    };
    clickSauceLabsTshirtRed(){
        this.sauceLabsTshirtRed.click();
    };

    get imgBackpack(){
        return cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]');
    };
    clickImgBackpack(){
        this.imgBackpack.click();
    }

    get imgBikeLight(){
        return cy.get('[data-test="inventory-item-sauce-labs-bike-light-img"]');
    };
    clickImgBikeLight(){
        this.imgBikeLight.click();
    }
    get imgBoltTshirt(){
        return cy.get('[data-test="inventory-item-sauce-labs-bike-light-img"]');
    };
    clickImgBoltTshirt(){
        this.imgBoltTshirt.click();
    }
    get imgFleeceJacket(){
        return cy.get('[data-test="inventory-item-sauce-labs-fleece-jacket-img"]');
    };
    clickImgFleeceJacket(){
        this.imgFleeceJacket.click();
    }

    get imgOneSie(){
        return cy.get('[data-test="inventory-item-sauce-labs-onesie-img"]');
    };
    clickImgOne(){
        this.imgOneSie.click();
    }

    get imgTshirtRed(){
        return cy.get('[data-test="inventory-item-test.allthethings()-t-shirt-(red)-img"]');
    };
    clickImgTshirtRed(){
        this.imgTshirtRed.click();
    }

    get filterProduct(){
        return cy.get('[data-test="product-sort-container"]');
    }
    selectFilterProduct(Filter){
        this.filterProduct.select(Filter);
    }
    verifyFilterSelected(Filter){
        this.filterProduct.contains(Filter)
    }
    get openMenuIcon(){
        return cy.get('[data-test="open-menu"]');
    }
    clickOpenMenuIcon(){
        this.openMenuIcon.click();
    }

}