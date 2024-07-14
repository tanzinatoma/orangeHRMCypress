it('User Logs into the system successfully', ()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.get('[name="username"]').type("Admin");
    cy.get('[name="password"]').type("admin123{enter}");
    if(cy.url().should('include', '/dashboard')){
        cy.log('User successfully logged in');
    }
})