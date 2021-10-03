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
            this.account1 = account.account1
        })
    })

    it('vertify the account1', function () {
        // We use the `cy.get()` command to get all elements that match the selector.
        // Then, we use `should` to assert that there are two matched items,
        // which are the two default items.
        cy.get('#header > div.nav > div > div > nav > div.header_user_info > a').click()
        cy.get('#email')
            .type(this.account1.email).should('have.value', this.account1.email)
        cy.get('#passwd')
            .type(this.account1.password).should('have.value', this.account1.password)
        cy.get('#SubmitLogin > span').click()

        cy.get('#block_top_menu > ul > li:nth-child(1) > a').click()
        cy.get('#center_column > ul > li:nth-child(1) > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default > span').click()
        cy.get('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > span > span').click()

        cy.get('#block_top_menu > ul > li:nth-child(2) > a').click()
        cy.get('#center_column > ul > li.ajax_block_product.col-xs-12.col-sm-6.col-md-4.last-in-line.first-item-of-tablet-line.last-item-of-mobile-line > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default > span').click()
        cy.get('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > span > span').click()

        cy.get('#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a').focus().get('#button_order_cart > span').click({ force: true })
        cy.get('#summary_products_quantity')
            .should('have.text', '2 Products')
        //check add an item
        cy.get('.first_item > .cart_quantity > .cart_quantity_button > .cart_quantity_up > span').click()
        cy.get('#summary_products_quantity')
            .should('have.text', '3 Products')
        //check remove an item
        cy.get('.first_item > .cart_quantity > .cart_quantity_button > .cart_quantity_down > span').click()
        cy.get('#summary_products_quantity')
            .should('have.text', '2 Products')

        cy.get('#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium > span').click()

        cy.get('#center_column > form > p > button > span').click()

        cy.get('#cgv').not('[disabled]')
            .check().should('be.checked')
        cy.get('#form > p > button > span').click()
        //check payment by bank wire
        cy.get('#HOOK_PAYMENT > div:nth-child(1) > div > p > a > span').click()

        cy.get('#cart_navigation > button > span').click()

        cy.get('#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a').click()
        cy.get('#center_column > p')
            .should('have.text', 'Your shopping cart is empty.')
        cy.get('#header > div.nav > div > div > nav > div:nth-child(2) > a').click()
    })
})
