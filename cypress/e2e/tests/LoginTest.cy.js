import { LoginPage } from "../pages/LoginPage";

it('User Logs into the system successfully', ()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    const login = new LoginPage()
    login.enterUsername()
    login.enterPassword()
    login.clickLogin()
    if(cy.url().should('include', '/dashboard')){
        cy.log('User successfully logged in');
    }
})