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
    beforeEach(() => {
    })


    it('cy.writeFile() - write to a file', () => {
        // https://on.cypress.io/writefile

        // You can write to a file
        // JavaScript arrays and objects are stringified
        // and formatted into text.
        //Use Math random to make sure email never repeated.
        //Also, make an 'secret' password with length longer than 5. As this is just a test, i save them as plain text
        cy.writeFile('cypress/fixtures/testaccount.json', {
            account1: {
                id: 0,
                fname: 'Account',
                lname: 'One',
                email: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, Math.floor(Math.random() * 10) + 1).concat('@').concat(Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, Math.floor(Math.random() * 5) + 1)).concat('.com'),
                password: Math.random().toString(36).replace(/'.'+/g, '').substr(2, Math.floor(Math.random() * 10) + 5).concat(Math.random().toString(36).replace(/'.'+/g, '').substr(2, Math.floor(Math.random() * 10))),
                city: 'Hamden',
                state: 'Connecticut',
                address: '8374 Sage Ave',
                pcode: '06514',
                Mobile: '5625771769',
            },
            account2: {
                id: 1,
                fname: 'Account',
                lname: 'Two',
                email: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, Math.floor(Math.random() * 10) + 1).concat('@').concat(Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, Math.floor(Math.random() * 5) + 1)).concat('.com'),
                password: Math.random().toString(36).replace(/'.'+/g, '').substr(2, Math.floor(Math.random() * 10) + 5).concat(Math.random().toString(36).replace(/'.'+/g, '').substr(2, Math.floor(Math.random() * 10))),
                city: 'Kenner',
                state: 'Louisiana',
                address: '945 Paul Wayne Haggerty Road',
                pcode: '70062',
                Mobile: '5044621833',
            },
            account3: {
                id: 2,
                fname: 'Account',
                lname: 'Three',
                email: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, Math.floor(Math.random() * 10) + 1).concat('@').concat(Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, Math.floor(Math.random() * 5) + 1)).concat('.com'),
                password: Math.random().toString(36).replace(/'.'+/g, '').substr(2, Math.floor(Math.random() * 10) + 5).concat(Math.random().toString(36).replace(/'.'+/g, '').substr(2, Math.floor(Math.random() * 10))),
                city: 'Ninety Six',
                state: 'South Carolina',
                address: '2000 Traction Street',
                pcode: '29666',
                Mobile: '8435048993',
            }
        })

        cy.fixture('testaccount').should((account) => {
            expect(account.account3.lname).to.eq('Three')
        })
    })
})
