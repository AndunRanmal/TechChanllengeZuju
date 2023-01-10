import signInPage from "../../pageObjects/signIn.page";
import homePage from "../../pageObjects/home.page";
import reputationPage from "../../pageObjects/reputation.page";

const USERNAME = 'zujutest+automation@gmail.com'
const PASSWORD = 'TestAuto123'
const EXPECTED_HOME_PAGE_HEADER = 'Upcoming for you';
const TEAM_NAME = "Manchester City";

describe('Test reputation page in Zuju details', () => {
  beforeEach(() => {
    signInPage.openSignInPage();
    cy.login(USERNAME, PASSWORD);
    homePage.elements.headerTitle().should('have.text', EXPECTED_HOME_PAGE_HEADER);
    reputationPage.openPage();
  })

  it('User search for a team and make it favourite and then unfavourite', () => {
    cy.intercept('/beta/v1/teams?*').as('request')
    cy.intercept('/beta/v1/teams?favouritesOnly=true&page=1&size=25').as('favourites')
    reputationPage.elements.searchInput().type('Manchester City');
    cy.wait('@request')
    reputationPage.elements.team_card(TEAM_NAME).should('be.visible');
    reputationPage.elements.team_card(TEAM_NAME).click();
    reputationPage.elements.loyaltyPointsValue().should('have.text', '0')
    reputationPage.elements.participatedMatchesValue().should('have.text', '0')
    reputationPage.elements.teamLevel().should('have.text', '1')
    reputationPage.elements.favouriteButtonPopUp().click()
    reputationPage.elements.minimizePopupButton().click()
    cy.wait('@favourites')
    reputationPage.elements.favouriteTeamCard(TEAM_NAME).should('be.visible');
    reputationPage.elements.cardFavouriteButton(1).click()
    cy.wait('@request')
    reputationPage.elements.favouriteTeamCard(TEAM_NAME).should('not.exist');
  })
})
