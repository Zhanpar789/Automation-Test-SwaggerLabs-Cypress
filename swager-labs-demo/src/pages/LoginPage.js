import commonComponent from "../components/commonComponents";

const components = new commonComponent(); 
export class LoginPage {
    urlLoginPage(){
         cy.visit("https://www.saucedemo.com/");
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
    fillUsernameField(username){
        this.usernameField.type(username);
    }
    fillWrongUsernameField(){
        this.usernameField.type('zhanpar_automation');
    }

    get passwordField(){
        return cy.get('[data-test="password"]');
    }
    clickPasswordField(){
        this.passwordField.click();
    }
    fillPasswordField(password){
        this.passwordField.type(password);
    }
    fillWrongPasswordField(){
        this.passwordField.type('wrong_password');
    }

    get failedLoginMessage(){
      return cy.contains('Epic sadface: Username and password do not match any user in this service');
    }
    verifyFailedLoginMessage(){
        this.failedLoginMessage.should('be.visible');
    }

    get lockedOutLoginMessage(){
        return cy.contains('Epic sadface: Sorry, this user has been locked out');
    }
    verifyLockedOutLoginMessage(){
        this.lockedOutLoginMessage.should('be.visible')
    }

    get buttonLogin(){
        return cy.get('[data-test="login-button"]');
    }
    clickButtonLogin(){
        this.buttonLogin.click();
    }

    verifyValidationUsername(){
         components.errorMessage.contains('Epic sadface: Username is required').should('be.visible');
    }
}