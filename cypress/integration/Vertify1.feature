Feature: Vertify1

    Scenario Outline: Register in the automation test Website

        Given User is at the main page
        When User login the website with dataset1
        And User add two items to cart
        And User move to checkout with '<nproducts>'
        And User continue checkout
        And User check checkbox and continue checkout
        And User pay by bank wire and finish checkout
        And User make sure cart empty and display '<empty>'
        Then User logout

        Examples:
            | nproducts  | empty                        |
            | 2 Products | Your shopping cart is empty. |