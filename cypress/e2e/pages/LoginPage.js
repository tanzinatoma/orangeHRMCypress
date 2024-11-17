export class LoginPage{
    username = '[name="username"]'
    password = '[name="password"]'
    login_button = '.oxd-button'

    enterUsername(username){
        cy.get(this.username).type(username);
    }
    enterPassword(password){
        cy.get(this.password).type(password);
    }
    clickLogin(){
        cy.get(this.login_button).click();
    }
}