import signInPage from "../../pageObjects/signIn.page"
import homePage from "../../pageObjects/home.page"
import settingsPage from "../../pageObjects/settings.page"

const Form_URL = '/#sign-in'
const USERNAME = 'zujutest+automation@gmail.com'
const PASSWORD = 'TestAuto123'
const EXPECTED_SIGNIN_PAGE_HEADER = 'Welcome to ZUJU KICKOFF'
const EXPECTED_HOME_PAGE_HEADER = 'Upcoming for you';
const INCORRECT_PASSWORD = 'TestAuto1234'
const EXPECTED_ERROR_MESSAGE = 'The email or password you entered is incorrect. Please try again.'

describe('Test Sign In page for ZuJu Digital', () => {
  beforeEach(() => {
    signInPage.openSignInPage()
    cy.url()
      .should('eq', Cypress.config().baseUrl + Form_URL)
  })

  it('should display the Autocomplete title', () => {
    signInPage.elements.title()
      .should('have.text', EXPECTED_SIGNIN_PAGE_HEADER)
  })

  it('User should log in with correct username and password', () => {
    cy.login(USERNAME, PASSWORD);
    homePage.elements.headerTitle().should('have.text', EXPECTED_HOME_PAGE_HEADER);
    homePage.elements.settingsButton().click();
    settingsPage.elements.logoutMenu().click()
    settingsPage.elements.logoutButtonPopUp().click();
  })

  it('User should see an error message in loging with incorrect username and password', () => {
    cy.login(USERNAME, INCORRECT_PASSWORD)
    signInPage.elements.errorMessage().should('have.text', EXPECTED_ERROR_MESSAGE)
  })

})
