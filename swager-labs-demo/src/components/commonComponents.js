class commonComponent{
    get errorMessage(){
        return cy.get('[data-test="error"]');
    }
}

export default commonComponent ;