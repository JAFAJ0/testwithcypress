import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('User is at the main page', function () {
    cy.visit('http://automationpractice.com/index.php')
    cy.fixture('testaccount').then((account) => {
        // "this" is still the test context object
        this.account3 = account.account3
    })
})

When('User login the website with dataset3', function () {
    cy.get('#header > div.nav > div > div > nav > div.header_user_info > a').click()
    cy.get('#email')
        .type(this.account3.email).should('have.value', this.account3.email)
    cy.get('#passwd')
        .type(this.account3.password).should('have.value', this.account3.password)
    cy.get('#SubmitLogin > span').click()

})

And('User add two items to cart', () => {
    cy.get('#block_top_menu > ul > li:nth-child(1) > a').click()
    cy.get('#center_column > ul > li:nth-child(1) > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default > span').click()
    cy.get('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > span > span').click()

    cy.get('#block_top_menu > ul > li:nth-child(2) > a').click()
    cy.get('#center_column > ul > li.ajax_block_product.col-xs-12.col-sm-6.col-md-4.last-in-line.first-item-of-tablet-line.last-item-of-mobile-line > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default > span').click()
    cy.get('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > span > span').click()
})

And('User move to checkout with extended page button and find there are {string}', (nproducts) => {
    cy.get('#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a').focus().get('#button_order_cart > span').click({ force: true })
    cy.get('#summary_products_quantity')
        .should('have.text', nproducts)
})

And('User toggle the + - sign to check item numbers {string} {string}', (nproducts, n1products) => {
    cy.get('.first_item > .cart_quantity > .cart_quantity_button > .cart_quantity_up > span').click()
    cy.get('#summary_products_quantity')
        .should('have.text', n1products)
    //check remove an item
    cy.get('.first_item > .cart_quantity > .cart_quantity_button > .cart_quantity_down > span').click()
    cy.get('#summary_products_quantity')
        .should('have.text', nproducts)
})

And('User continue checkout', () => {
    cy.get('#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium > span').click()

    cy.get('#center_column > form > p > button > span').click()
})
And('User check checkbox and continue checkout', () => {
    cy.get('#cgv').not('[disabled]')
        .check().should('be.checked')
    cy.get('#form > p > button > span').click()
})

And('User pay by bank wire and finish checkout', () => {
    cy.get('#HOOK_PAYMENT > div:nth-child(1) > div > p > a > span').click()

    cy.get('#cart_navigation > button > span').click()

    cy.get('#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a').click()
})

And('User make sure cart empty and display {string}', (empty) => {
    cy.get('#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a').click()
    cy.get('#center_column > p')
        .should('have.text', 'Your shopping cart is empty.')
})

Then('User logout', () => {
    cy.get('#header > div.nav > div > div > nav > div:nth-child(2) > a').click()
})