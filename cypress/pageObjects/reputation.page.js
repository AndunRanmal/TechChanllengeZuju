class ReputationPage {
    elements = {
        searchInput: () => cy.get('input[type="search"]'),
        team_card: (teamName) => cy.get(`div[data-cy="team-list"] > div > div > div > div:contains(${teamName})`),
        loyaltyPointsValue: () => cy.get('#redeem-modal-content').contains('Loyalty Points').parent().next(),
        participatedMatchesValue: () => cy.get('#redeem-modal-content').contains('Participated Matches').next(),
        teamLevel: () => cy.get('#redeem-modal-content').contains('Level').next(),
        favouriteButtonPopUp: () => cy.get('button').contains('Favourite'),
        minimizePopupButton: () => cy.get('.css-4ma54i > .MuiIconButton-root'),
        favouriteTeamCard: (teamName) => cy.get(`div[data-cy="fav-team-list"] > div > div > div > div:contains(${teamName})`),
        cardFavouriteButton: (child) => cy.get(`[data-cy="fav-team-list"] > :nth-child(${child}) > .MuiPaper-root > .MuiButtonBase-root`)
    }

    openPage() {
        cy.visit('/reputation');
    }
}

export default new ReputationPage()