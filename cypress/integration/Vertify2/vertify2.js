import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('User is at the main page', function () {
    cy.visit('http://automationpractice.com/index.php')
    cy.fixture('testaccount').then((account) => {
        // "this" is still the test context object
        this.account2 = account.account2
    })
})

When('User login the website with dataset2', function () {
    cy.get('#header > div.nav > div > div > nav > div.header_user_info > a').click()
    cy.get('#email')
        .type(this.account2.email).should('have.value', this.account2.email)
    cy.get('#passwd')
        .type(this.account2.password).should('have.value', this.account2.password)
    cy.get('#SubmitLogin > span').click()

})

And('User add item to cart and direct go checkout', () => {
    cy.get('#block_top_menu > ul > li:nth-child(1) > a').click()
    cy.get('#center_column > ul > li:nth-child(1) > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default > span').click()
    cy.get('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a > span').click()
    //check direct go to checkout
    cy.get('#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a').click()
})

And('User find {string} in cart and edit to be {string}', (nproduct, nproducts) => {
    cy.get('#summary_products_quantity')
        .should('have.text', nproduct)
    //check edit numbers to buy here
    cy.get('.cart_item > td.cart_quantity.text-center > input.cart_quantity_input.form-control.grey')
        .clear()
        .type('99').should('have.value', 99)
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

And('User pay by check and finish checkout', () => {
    cy.get('#HOOK_PAYMENT > div:nth-child(2) > div > p > a').click()

    cy.get('#cart_navigation > button > span').click()

    cy.get('#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a').click()
})

And('User make sure cart empty and display {string}', (empty) => {
    cy.get('#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a').click()
    cy.get('#center_column > p')
        .should('have.text', empty)
})

Then('User logout', () => {
    cy.get('#header > div.nav > div > div > nav > div:nth-child(2) > a').click()
})