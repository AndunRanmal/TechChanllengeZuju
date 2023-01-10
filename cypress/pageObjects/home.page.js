class HomePage {
    elements = {
        headerTitle: () => cy.get('h2[data-cy="page-heading"]'),
        settingsButton: () => cy.get('button[data-cy="settings-btn"]'),
    }
}

export default new HomePage()