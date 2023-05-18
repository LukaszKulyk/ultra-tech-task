import { loginPageLocators } from "../support/locators";

class LoginPage {

    getLoginLogo() {
        return cy.get(loginPageLocators.loginLogoLocator);
    }

    getLoginButtonContainer() {
        return cy.get(loginPageLocators.loginButtonContainerLocator);
    }

    getUsernameLoginFieldLocator() {
        return cy.getByDataTest(loginPageLocators.userNameLoginFieldLocator);
    }

    getPasswordField() {
        return cy.getByDataTest(loginPageLocators.passwordFieldLocator);
    }

    getLoginButton() {
        return cy.getByDataTest(loginPageLocators.loginButtonLocator);
    }

    getErrorMessage() {
        return cy.getByDataTest(loginPageLocators.errorMessageLocator)
    }

    writeUsername(username) {
        this.getUsernameLoginFieldLocator()
            .clear()
            .type(username)
    }

    writePassword(password) {
        this.getPasswordField()
            .clear()
            .type(password)
    }

    clickOnLoginButton() {
        this.getLoginButton()
            .click()
    }

}

export default LoginPage;