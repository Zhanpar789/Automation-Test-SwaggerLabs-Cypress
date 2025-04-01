export class LoginPage {
    urlLoginPage(){
         cy.visit('https://www.saucedemo.com/');
    }
    get labeLoginPage(){
        return cy.get('[class="login_logo"]').contains('Swag Labs');
    }
    verifyLabelLoginPage(){
        this.labeLoginPage.should('be.visible');
    }

    get usernameField(){
        return cy.get('[data-test="username"]');
    }
    clickUsernameField(){
        this.usernameField.click();
    }
    fillUsernameField(){
        this.usernameField.type('standard_user');
    }

    get passwordField(){
        return cy.get('[data-test="password"]');
    }
    clickPasswordField(){
        this.passwordField.click();
    }
    fillPasswordField(){
        this.passwordField.type('secret_sauce');
    }

    get buttonLogin(){
        return cy.get('[data-test="login-button"]');
    }
    clickButtonLogin(){
        this.buttonLogin.click();
    }
}