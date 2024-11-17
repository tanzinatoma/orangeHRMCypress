export class AddUserPage{
    
    enterAdminPage(){
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    }
    addUser(){
        cy.get('.orangehrm-header-container > .oxd-button').click()
    }
    enterUserRole(){
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    }
    enterRoleAdmin(){
        cy.xpath("/html/body/div/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[1]/div/div[2]/div/div[2]/div[@role='option'][2]").click()
    }
}