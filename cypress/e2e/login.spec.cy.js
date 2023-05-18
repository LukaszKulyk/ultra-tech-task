import LoginPage from '../utils/LoginPage';
import ProductsPage from '../utils/ProductsPage';

const viewport = Cypress.env('viewport')

const userData = {
    correctUsername: Cypress.env('username'),
    correctPassword: Cypress.env('password'),
    incorrectUserName: 'standard_user1',
    incorrectPassword: 'test'
};

const appLogo = 'Swag Labs'

const pageTitle = 'Products'

const errorMessage = 'Epic sadface: Username and password do not match any user in this service';

describe('Verify login scenario.', () => {

    beforeEach(() => {
        cy.viewport(viewport)
        cy.visit('/')
    })

    it('Verify if app blocks user to login with wrong username and correct password.', () => {

        const loginPage = new LoginPage();

        loginPage
            .getLoginButtonContainer()
            .should('exist')
            .and('be.visible')

        loginPage
            .getLoginLogo()
            .should('exist')
            .and('have.text', appLogo)

        cy.login(userData.incorrectUserName, userData.correctPassword);

        loginPage
            .getErrorMessage()
            .should('have.text', errorMessage)

        })

    it('Verify if app blocks user to login with correct username and wrong password.', () => {

        const loginPage = new LoginPage();

        loginPage
            .getLoginButtonContainer()
            .should('exist')
            .and('be.visible')

        loginPage
            .getLoginLogo()
            .should('exist')
            .and('have.text', appLogo)

        cy.login(userData.correctUsername, userData.incorrectPassword);

        loginPage
            .getErrorMessage()
            .should('have.text', errorMessage)
    
        })

    it('Verify if app blocks user to login with wrong username and wrong password.', () => {

        const loginPage = new LoginPage();

        loginPage
            .getLoginButtonContainer()
            .should('exist')
            .and('be.visible')

        loginPage
            .getLoginLogo()
            .should('exist')
            .and('have.text', appLogo)

        cy.login(userData.incorrectUserName, userData.incorrectPassword);

        loginPage
            .getErrorMessage()
            .should('have.text', errorMessage)
        
    })

    it('Verify if app lets user to login with correct username and correct password.', () => {

        const loginPage = new LoginPage();

        loginPage
            .getLoginButtonContainer()
            .should('exist')
            .and('be.visible')

        loginPage
            .getLoginLogo()
            .should('exist')
            .and('have.text', appLogo)

        cy.login(userData.correctUsername, userData.correctPassword);

        const prodcutsPage = new ProductsPage();

        prodcutsPage
            .getContentsWrapper()
            .should('exist')
            .and('be.visible')

        prodcutsPage
            .getHeaderContainer()
            .should('exist')
            .and('be.visible')

        prodcutsPage
            .getInventoryContainer()
            .should('exist')
            .and('be.visible')

        prodcutsPage
            .getMenuButtonContainer()
            .should('exist')

        prodcutsPage
            .getShoppingCardAnchor()
            .should('exist')
            .and('be.visible')

        prodcutsPage
            .getProductsPageTitle()
            .should('exist')
            .and('have.text', pageTitle)

        prodcutsPage
            .getAppLogo()
            .should('be.visible')
            .and('have.text', appLogo)
    })

    after(() => {
        cy.logout();
    })
})