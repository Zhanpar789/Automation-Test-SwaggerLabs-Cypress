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
}