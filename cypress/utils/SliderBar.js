import { sliderBarLocators } from "../support/locators";

class SliderBar {

    getBurgerMenuButton() {
        return cy.get(sliderBarLocators.burgerMenuButtonLocator);
    }

    getLogoutSliderBarAnchor() {
        return cy.get(sliderBarLocators.logoutSliderBarAnchorLocator);
    }

    getResetAppStateSliderBarAnchor() {
        return cy.get(sliderBarLocators.resetAppStateSliderBarAnchorLocator);
    }
}

export default SliderBar;