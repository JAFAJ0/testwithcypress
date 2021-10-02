/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('create accounts', () => {
    beforeEach(function () {
        // Cypress starts out with a blank slate for each test
        //First visity the website we use
        cy.visit('http://automationpractice.com/index.php')
        cy.fixture('testaccount').then((account) => {
            // "this" is still the test context object
            this.account2 = account.account2
        })
    })

    it('move to sign in page', function () {
        // We use the `cy.get()` command to get all elements that match the selector.
        // Then, we use `should` to assert that there are two matched items,
        // which are the two default items.
        cy.get('#header > div.nav > div > div > nav > div.header_user_info > a').click()
        cy.get('#email_create')
            .type(this.account2.email).should('have.value', this.account2.email)
        cy.get('#SubmitCreate > span').click()
        cy.get('#customer_firstname')
            .type(this.account2.fname).should('have.value', this.account2.fname)
        cy.get('#customer_lastname')
            .type(this.account2.lname).should('have.value', this.account2.lname)
        cy.get('#passwd')
            .type(this.account2.password).should('have.value', this.account2.password)
        cy.get('#firstname')
            .should('have.value', this.account2.fname)
        cy.get('#lastname')
            .should('have.value', this.account2.lname)
        cy.get('#address1')
            .type(this.account2.address).should('have.value', this.account2.address)
        cy.get('#city')
            .type(this.account2.city).should('have.value', this.account2.city)
        cy.get('#id_state').select(this.account2.state)
        cy.get('#id_state').should('have.value', 18)
        cy.get('#postcode')
            .type(this.account2.pcode).should('have.value', this.account2.pcode)
        cy.get('#phone_mobile')
            .type(this.account2.Mobile).should('have.value', this.account2.Mobile)
        cy.get('#submitAccount > span').click()
        cy.get('#header > div.nav > div > div > nav > div:nth-child(2) > a').click()
    })
})
