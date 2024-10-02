import { LoginPage } from "../pages/LoginPage";
it('User Logs into the system successfully', ()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    
    
    // if(cy.url().should('include', '/dashboard')){
    //     cy.log('User successfully logged in');
    // }
})