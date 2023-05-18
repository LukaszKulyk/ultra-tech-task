import ProductsPage from '../utils/ProductsPage';

const viewport = Cypress.env('viewport');

const userData = {
    correctUsername: Cypress.env('username'),
    correctPassword: Cypress.env('password'),
};

const firstProduct = {
    name: 'Sauce Labs Backpack',
    price: '29.99'
};

const secondProduct = {
    name: 'Sauce Labs Bike Light',
    price: '9.99'
};

const thirdProduct = {
    name: 'Sauce Labs Onesie',
    price: '7.99'
};

const cartLabels = {
    quantity: 'QTY',
    description: 'Description'
};

const productPageTitles = {
    cart: 'Your Cart',
    checkoutInformation: 'Checkout: Your Information',
    checkoutOverview: 'Checkout: Overview',
    checkoutComplete: 'Checkout: Complete!',
};

const purchaseData = {
    firstName: 'Antonio',
    lastName: 'Ferreira Santos',
    postlCode: '542-4567'
}

const summaryDetails = {
    paymentInformation: 'Payment Information',
    shippingInformation: 'Shipping Information',
    shippingDetails: 'Free Pony Express Delivery!',
    priceTotal: 'Price Total',
}

const confirmationDetails = {
    checkoutCompleteHeader: 'Thank you for your order!',
    checkoutCompleteText: 'Your order has been dispatched, and will arrive just as fast as the pony can get there!'
}

const errorData = {
    missingFirstName: 'Error: First Name is required',
    missingLastName: 'Error: Last Name is required',
    missingPostalCode: 'Error: Postal Code is required'
};

describe('Verify purchase flow.', () => {

    beforeEach(() => {
        cy.viewport(viewport)
        cy.visit('/')

        cy.login(userData.correctUsername, userData.correctPassword);
        cy.resetAppData();
    })

    it('Verify if user is able to properly order two different elements added to the card.', () => {

        const productPage = new ProductsPage();

        productPage.getShoppingCardAnchor()
            .should('exist')

        productPage.getShoppingCardBadgeLocator()
            .should('not.exist')

        //first one
        productPage.getProductToBeAddedFromTheCardByTheName(firstProduct.name)
            .siblings()
            .should('contain.text', firstProduct.price)

        productPage.getProductToBeAddedFromTheCardByTheName(firstProduct.name)
            .should('have.text', 'Add to cart')
            .click()

        productPage.getProductToBeRemovedFromTheCardByTheName(firstProduct.name)
            .should('have.text', 'Remove')

        productPage.getShoppingCardBadgeLocator()
            .should('exist')
            .and('contain.text', '1')

        //second one
        productPage.getProductToBeAddedFromTheCardByTheName(secondProduct.name)
            .siblings()
            .should('contain.text', secondProduct.price)

        productPage.getProductToBeAddedFromTheCardByTheName(secondProduct.name)
            .should('have.text', 'Add to cart')
            .click()

        productPage.getProductToBeRemovedFromTheCardByTheName(secondProduct.name)
            .should('have.text', 'Remove')

        productPage.getShoppingCardBadgeLocator()
            .should('exist')
            .and('contain.text', '2')

        productPage.getShoppingCardAnchor()
            .click();

        //card page
        productPage.getProductsPageTitle()
            .should('exist')
            .and('have.text', productPageTitles.cart);

        productPage.getCartContentsContainer()
            .should('exist')
            .and('be.visible')

        productPage.getCartQuantityLabel()
            .should('exist')
            .and('have.text', cartLabels.quantity);

        productPage.getCartDescriptionLabel()
            .should('exist')
            .and('have.text', cartLabels.description);

        productPage.getAllCartItems()
            .should('exist')
            .and('have.length', 2);

        productPage.getAllCartItems()
            .eq(0)
            .find('a')
            .should('have.text', firstProduct.name);

        productPage.getAllCartItems()
            .eq(0)
            .find('div.cart_quantity')
            .should('have.text', '1');

        productPage.getAllCartItems()
            .eq(0)
            .find('div.inventory_item_price')
            .should('contain.text', firstProduct.price);

        productPage.getAllCartItems()
            .eq(1)
            .find('a')
            .should('have.text', secondProduct.name);

        productPage.getAllCartItems()
            .eq(1)
            .find('div.cart_quantity')
            .should('have.text', '1');

        productPage.getAllCartItems()
            .eq(1)
            .find('div.inventory_item_price')
            .should('contain.text', secondProduct.price);

        productPage.getCheckoutButton()
            .click()

        //checkout page - informations
        productPage.getProductsPageTitle()
            .should('have.text', productPageTitles.checkoutInformation)

        productPage.getPurchaseFirstNameLocator()
            .clear()
            .type(purchaseData.firstName)

        productPage.getPurchaseFirstNameLocator()
            .should('have.value', purchaseData.firstName)

        productPage.getPurchaseLastNameLocator()
            .clear()
            .type(purchaseData.lastName)

        productPage.getPurchaseLastNameLocator()
            .should('have.value', purchaseData.lastName)

        productPage.getPurchasePostalCodeLocator()
            .clear()
            .type(purchaseData.postlCode)

        productPage.getPurchasePostalCodeLocator()
            .should('have.value', purchaseData.postlCode)

        productPage.getPurchaseContinueButtonLocator()
            .click()

        //checkout page - overview
        productPage.getProductsPageTitle()
            .should('have.text', productPageTitles.checkoutOverview)

        productPage.getCartQuantityLabel()
            .should('exist')
            .and('have.text', cartLabels.quantity);

        productPage.getCartDescriptionLabel()
            .should('exist')
            .and('have.text', cartLabels.description);

        productPage.getAllCartItems()
            .should('exist')
            .and('have.length', 2);

        productPage.getAllCartItems()
            .eq(0)
            .find('a')
            .should('have.text', firstProduct.name);

        productPage.getAllCartItems()
            .eq(0)
            .find('div.cart_quantity')
            .should('have.text', '1');

        productPage.getAllCartItems()
            .eq(0)
            .find('div.inventory_item_price')
            .should('contain.text', firstProduct.price);

        productPage.getAllCartItems()
            .eq(1)
            .find('a')
            .should('have.text', secondProduct.name);

        productPage.getAllCartItems()
            .eq(1)
            .find('div.cart_quantity')
            .should('have.text', '1');

        productPage.getAllCartItems()
            .eq(1)
            .find('div.inventory_item_price')
            .should('contain.text', secondProduct.price);

        //summary
        productPage.getSummaryInfoLabel()
            .eq(0)
            .should('exist')
            .and('have.text', summaryDetails.paymentInformation)

        productPage.getSummaryValueLabel()
            .eq(0)
            .invoke('text')
            .should('match', /^SauceCard #\d+/)

        productPage.getSummaryInfoLabel()
            .eq(1)
            .should('exist')
            .and('have.text', summaryDetails.shippingInformation)

        productPage.getSummaryValueLabel()
            .eq(1)
            .should('exist')
            .and('have.text', summaryDetails.shippingDetails)

        productPage.getSummaryInfoLabel()
            .eq(2)
            .should('exist')
            .and('have.text', summaryDetails.priceTotal)

        productPage.getSummarySubTotalLabel()
            .should('exist')
            .and('contain.text', 'Item total:')

        productPage.getSummaryTaxLabel()
            .should('exist')
            .and('contain.text', 'Tax:')

        productPage.getSummaryTotalLabel()
            .should('exist')
            .and('contain.text', 'Total')

        productPage.getSummaryFinishButton()
            .click()

        //completed
        productPage.getProductsPageTitle()
            .should('have.text', productPageTitles.checkoutComplete)

        productPage.getCheckoutCompleteContainer()
            .should('exist')
            .and('be.visible')

        productPage.getCheckoutCompleteHeader()
            .should('exist')
            .and('have.text', confirmationDetails.checkoutCompleteHeader)

        productPage.getCheckoutCompleteText()
            .should('exist')
            .and('have.text', confirmationDetails.checkoutCompleteText)

        productPage.getCheckoutCompleteBackToProductsButton()
            .should('exist')
            .and('be.enabled')
    });

    it('Verify if it is not possible to make an order without proper purchase data.', () => {
        
        const productPage = new ProductsPage();

        productPage.getShoppingCardAnchor()
            .should('exist')

        productPage.getProductToBeAddedFromTheCardByTheName(thirdProduct.name)
            .siblings()
            .should('contain.text', thirdProduct.price)

        productPage.getProductToBeAddedFromTheCardByTheName(thirdProduct.name)
            .should('have.text', 'Add to cart')
            .click()

        productPage.getProductToBeRemovedFromTheCardByTheName(thirdProduct.name)
            .should('have.text', 'Remove')

        productPage.getShoppingCardAnchor()
            .click();

        productPage.getProductsPageTitle()
            .should('exist')
            .and('have.text', productPageTitles.cart);

        productPage.getCheckoutButton()
            .click()

        //checkout page - informations
        productPage.getProductsPageTitle()
            .should('have.text', productPageTitles.checkoutInformation)

        //checkout page - informations
        productPage.getProductsPageTitle()
            .should('have.text', productPageTitles.checkoutInformation)

        productPage.getPurchaseFirstNameLocator()
            .clear()

        productPage.getPurchaseLastNameLocator()
            .clear()

        productPage.getPurchasePostalCodeLocator()
            .clear()

        productPage.getPurchaseContinueButtonLocator()
            .click()

        //cy.getByDataTest('error')
        productPage.getPurchaseErrorMessage()
            .should('exist')
            .and('contains.text', errorData.missingFirstName)

        productPage.getPurchaseFirstNameLocator()
            .clear()
            .type(purchaseData.firstName)

        productPage.getPurchaseFirstNameLocator()
            .should('have.value', purchaseData.firstName)

        productPage.getPurchaseContinueButtonLocator()
            .click()

        //cy.getByDataTest('error')
        productPage.getPurchaseErrorMessage()
            .should('exist')
            .and('contains.text', errorData.missingLastName)

        productPage.getPurchaseLastNameLocator()
            .clear()
            .type(purchaseData.lastName)

        productPage.getPurchaseLastNameLocator()
            .should('have.value', purchaseData.lastName)

        productPage.getPurchaseContinueButtonLocator()
            .click()

        //cy.getByDataTest('error')
        productPage.getPurchaseErrorMessage()
            .should('exist')
            .and('contains.text', errorData.missingPostalCode)
    })

    after(() => {
        cy.logout();
    })
})