import { LoginPage } from "./pages/login_page"

const loginPage = new LoginPage()

describe('All Login Tests', function () {
    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com')
    })

    it('Login With Valid Credentials', () => {

        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.get('.oxd-userdropdown-tab').click()

    })

    it('Login With Invalid Username', () => {

        loginPage.enterUsername('admin2')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.get('.oxd-userdropdown-tab').click()

    })

    it('Login With Invalid Password', () => {

        loginPage.enterUsername('admin')
        loginPage.enterPassword('admin12345')
        loginPage.clickLogin()
        cy.get('.oxd-userdropdown-tab').click()

    })
})
