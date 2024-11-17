import { before } from "mocha";
import { AddUserPage } from "../pages/admin/AddUserPage"
import { LoginPage } from "../pages/LoginPage";
const admin = new AddUserPage()

before(()=>{
    cy.clearAllCookies()
    cy.clearAllLocalStorage()
})

it('User Logs into the system successfully', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        const login = new LoginPage()
        login.enterUsername('Admin')
        login.enterPassword('admin123')
        login.clickLogin()
        cy.url().should('include', '/dashboard')
})

it ('Add User', ()=> {
    admin.enterAdminPage()
    admin.addUser()
    admin.enterUserRole()
    admin.enterRoleAdmin()
})