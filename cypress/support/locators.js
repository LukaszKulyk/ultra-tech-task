export const loginPageLocators = {
    loginLogoLocator: '.login_logo',
    loginButtonContainerLocator: '#login_button_container',
    userNameLoginFieldLocator: 'username',
    passwordFieldLocator: 'password',
    loginButtonLocator: 'login-button',
    errorMessageLocator: 'error',

};

export const productPageLocators = {
    contentsWrapperLocator: '#contents_wrapper',
    headerContainerLocator: '#header_container',
    inventoryContainerLocator: '#inventory_container',
    menuButtonContainerLocator: '#menu_button_container',
    shoppingCardAnchorLocator: '#shopping_cart_container > a.shopping_cart_link',
    shoppingCardBadgeLocator: 'span.shopping_cart_badge',
    productPageTitleLocator: 'span.title',
    appLogoLocator: 'div.app_logo',
    cartContentsContainerLocator: '#cart_contents_container',
    cartQuantityLabelLocator: 'div.cart_quantity_label',
    cartDescriptionLabelLocator: 'div.cart_desc_label',
    cartItemsLocator: 'div.cart_item',
    checkoutButtonLocator: 'checkout', 
    purchaseFirstNameLocator: 'firstName',
    purchaseLastNameLocator: 'lastName',
    purchasePostalCodeLocator: 'postalCode',
    purchaseContinueButtonLocator: 'continue',
    purchaseErrorMessageLocator: 'error',
    summaryInfoLabelLocator: 'div.summary_info_label',
    summaryValueLabelLocator: 'div.summary_value_label',
    summarySubTotalLabelLocator: 'div.summary_subtotal_label',
    summaryTaxLabelLocator: 'div.summary_tax_label',
    summaryTotalLabelLocator: 'div.summary_total_label',
    summaryFinishButtonLocator: 'finish',
    checkoutCompleteContainerLocator: '#checkout_complete_container',
    checkoutCompleteHeaderLocator: 'h2.complete-header',
    checkoutCompleteTextLocator: 'div.complete-text',
    checkoutCompleteBackToProductsButtonLocator: 'back-to-products'
};

export const sliderBarLocators = {
    burgerMenuButtonLocator: 'button#react-burger-menu-btn',
    logoutSliderBarAnchorLocator: 'a#logout_sidebar_link',
    resetAppStateSliderBarAnchorLocator: '#reset_sidebar_link'
}