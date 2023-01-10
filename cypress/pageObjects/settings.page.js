class SettingsPage {
    elements = {
        logoutMenu: () => cy.contains('Log Out'),
        logoutButtonPopUp: () => cy.get('button').contains('Log Out')
    }
}

export default new SettingsPage()