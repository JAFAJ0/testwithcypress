Feature: Vertify3

    Scenario Outline: Register in the automation test Website

        Given User is at the main page
        When User login the website with dataset3
        And User add two items to cart
        And User move to checkout with extended page button and find there are '<nproducts>'
        And User toggle the + - sign to check item numbers '<n1products>' '<nproducts>'
        And User continue checkout
        And User check checkbox and continue checkout
        And User pay by bank wire and finish checkout
        And User make sure cart empty and display '<empty>'
        Then User logout

        Examples:
            | n1products | nproducts  | empty                        |
            | 3 Products | 2 Products | Your shopping cart is empty. |