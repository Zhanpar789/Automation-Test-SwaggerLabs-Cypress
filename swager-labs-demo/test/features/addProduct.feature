Feature: Login feature

    Background:
        Given User at Product Page

    Scenario Outline: User adds "<product>" to cart
        When User adds "<product>" to cart
        Then User sees "<product>" is added to cart

        Examples:
        | product          |
        | Backpack         |
        | T-Shirt          |
        | Bike Light       |
        | Fleece Jacket    |
        | Onesie           |
        | T-Shirt Red      |


