import commonComponent from "../components/commonComponents";

const components = new commonComponent(); 

export class YourInformation {
    get firstNameField(){
        return cy.get('[data-test="firstName"]')
    }
    inputFirstNameField(FirstName){
        this.firstNameField.type(FirstName);
    }
    get lastNameField(){
        return cy.get('[data-test="lastName"]')
    }
    get postalCodeField(){
        return cy.get('[data-test="postalCode"]')
    }
    get buttonCancel(){
        return cy.get('[data-test="cancel"]')
    }
    get buttonContinue(){
        return cy.get('[data-test="continue"]')
    }
    verifyValidationFirstName(){
        components.errorMessage.contains('Error: First Name is required').should('be.visible');
    }
}