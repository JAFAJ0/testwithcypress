import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('User is at the main page', function () {
    cy.visit('http://automationpractice.com/index.php')
    cy.fixture('testaccount').then((account) => {
        // "this" is still the test context object
        this.account1 = account.account1
    })
})

When('User click on sigin button', function () {
    cy.get('#header > div.nav > div > div > nav > div.header_user_info > a').click()
})

And('User enters email', function () {
    cy.get('#email_create')
        .type(this.account1.email).should('have.value', this.account1.email)
})

And('User clicks on creataccount button', () => {
    cy.get('#SubmitCreate > span').click()
})

And('user enters informations fistname as {string} and lastname as {string} and address as {string} and postcode as {string}', function (fname, lname, address, pcode) {
    cy.get('#customer_firstname')
        .type(this.account1.fname).should('have.value', fname)
    cy.get('#customer_lastname')
        .type(this.account1.lname).should('have.value', lname)
    cy.get('#passwd')
        .type(this.account1.password).should('have.value', this.account1.password)
    cy.get('#firstname')
        .should('have.value', fname)
    cy.get('#lastname')
        .should('have.value', this.account1.lname)
    cy.get('#address1')
        .type(this.account1.address).should('have.value', address)
    cy.get('#city')
        .type(this.account1.city).should('have.value', this.account1.city)
    cy.get('#id_state').select(this.account1.state)
    cy.get('#id_state').should('have.value', 7)
    cy.get('#postcode')
        .type(this.account1.pcode).should('have.value', pcode)
    cy.get('#phone_mobile')
        .type(this.account1.Mobile).should('have.value', this.account1.Mobile)
})
Then('User user click on register and logout', () => {
    cy.get('#submitAccount > span').click()
    cy.get('#header > div.nav > div > div > nav > div:nth-child(2) > a').click()
})
