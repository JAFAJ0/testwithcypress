Feature: Vertify2

    Scenario Outline: Register in the automation test Website

        Given User is at the main page
        When User login the website with dataset2
        And User add item to cart and direct go checkout
        And User find '<nproduct>' in cart and edit to be '<nproducts>'
        And User continue checkout
        And User check checkbox and continue checkout
        And User pay by check and finish checkout
        And User make sure cart empty and display '<empty>'
        Then User logout

        Examples:
            | nproduct  | nproducts   | empty                        |
            | 1 Product | 99 Products | Your shopping cart is empty. |