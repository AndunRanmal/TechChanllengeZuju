class SignInPage {
    elements ={
        username: () => cy.get('input[name="email"]'),
        password: () => cy.get('input[name="password"]'),
        loginButton: () => cy.get('button[type="submit"]'),
        title: () => cy.get('.MuiTypography-h2'),
        errorMessage: () => cy.get('button[type="submit"]').next()
    }

    openSignInPage() {
        cy.visit('/#sign-in')
    }
}

export default new SignInPage()