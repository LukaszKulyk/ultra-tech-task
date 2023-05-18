import { productPageLocators } from "../support/locators"

class ProductsPage {

    getContentsWrapper() {
        return cy.get(productPageLocators.contentsWrapperLocator)
    }

    getHeaderContainer() {
        return cy.get(productPageLocators.headerContainerLocator)
    }

    getInventoryContainer() {
        return cy.get(productPageLocators.inventoryContainerLocator)
    }

    getMenuButtonContainer() {
        return cy.get(productPageLocators.menuButtonContainerLocator)
    }

    getShoppingCardAnchor() {
        return cy.get(productPageLocators.shoppingCardAnchorLocator)
    }

    getShoppingCardBadgeLocator() {
        return cy.get(productPageLocators.shoppingCardBadgeLocator)
    }

    getProductsPageTitle() {
        return cy.get(productPageLocators.productPageTitleLocator)
    }

    getAppLogo() {
        return cy.get(productPageLocators.appLogoLocator)
    }

    getProductToBeAddedFromTheCardByTheName(nameOfTheProduct) {

        return cy.getByDataTest(`add-to-cart-${nameOfTheProduct.toString().toLowerCase().replace(/ /g, '-')}`)
    }

    getProductToBeRemovedFromTheCardByTheName(nameOfTheProduct) {

        return cy.getByDataTest(`remove-${nameOfTheProduct.toString().toLowerCase().replace(/ /g, '-')}`)
    }

    getCartContentsContainer() {
        return cy.get(productPageLocators.cartContentsContainerLocator);
    }

    getCartQuantityLabel() {
        return cy.get(productPageLocators.cartQuantityLabelLocator);
    }

    getCartDescriptionLabel() {
        return cy.get(productPageLocators.cartDescriptionLabelLocator);
    }

    getAllCartItems() {
        return cy.get(productPageLocators.cartItemsLocator);
    }

    getCheckoutButton() {
        return cy.getByDataTest(productPageLocators.checkoutButtonLocator);
    }

    getPurchaseFirstNameLocator() {
        return cy.getByDataTest(productPageLocators.purchaseFirstNameLocator);
    }

    getPurchaseLastNameLocator() {
        return cy.getByDataTest(productPageLocators.purchaseLastNameLocator);
    }

    getPurchasePostalCodeLocator() {
        return cy.getByDataTest(productPageLocators.purchasePostalCodeLocator);
    }

    getPurchaseContinueButtonLocator() {
        return cy.getByDataTest(productPageLocators.purchaseContinueButtonLocator);
    }

    getPurchaseErrorMessage() {
        return cy.getByDataTest(productPageLocators.purchaseErrorMessageLocator);
    }

    getSummaryInfoLabel() {
        return cy.get(productPageLocators.summaryInfoLabelLocator);
    }

    getSummaryValueLabel() {
        return cy.get(productPageLocators.summaryValueLabelLocator);
    }

    getSummarySubTotalLabel() {
        return cy.get(productPageLocators.summarySubTotalLabelLocator);
    }

    getSummaryTaxLabel() {
        return cy.get(productPageLocators.summaryTaxLabelLocator);
    }

    getSummaryTotalLabel() {
        return cy.get(productPageLocators.summaryTotalLabelLocator);
    }

    getSummaryFinishButton() {
        return cy.getByDataTest(productPageLocators.summaryFinishButtonLocator);
    }

    getCheckoutCompleteContainer() {
        return cy.get(productPageLocators.checkoutCompleteContainerLocator);
    }

    getCheckoutCompleteHeader() {
        return cy.get(productPageLocators.checkoutCompleteHeaderLocator);
    }

    getCheckoutCompleteText() {
        return cy.get(productPageLocators.checkoutCompleteTextLocator);
    }

    getCheckoutCompleteBackToProductsButton() {
        return cy.getByDataTest(productPageLocators.checkoutCompleteBackToProductsButtonLocator);
    }

}

export default ProductsPage;