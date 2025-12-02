export class YourInformation {
    get firstNameField(){
        return cy.get('[data-test="firstName"]')
    }
    get lastNameField(){
        return cy.get('[data-test="lastName"]')
    }
}