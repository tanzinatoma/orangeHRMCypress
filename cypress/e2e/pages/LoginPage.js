export class LoginPage{
    enterUsername(){
        cy.get('[name="username"]').type("Admin");
    }
    enterPassword(){
        cy.get('[name="password"]').type("admin123");
    }
    clickLogin(){
        cy.get('#btnLogin').click();
    }
}