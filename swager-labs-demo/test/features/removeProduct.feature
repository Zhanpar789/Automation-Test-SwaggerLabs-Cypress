Feature: Remove All Product

    Background: 
        Given User at Product Page

    Scenario Outline: User Remove one of Product
        Given all Product add to cart
        When User Remove "<Product>" from cart
        Then User will see Product "<Product>" Removed

        Examples:
        | Product          |
        | Backpack         |
        | T-Shirt          |
        | Bike Light       |
        | Fleece Jacket    |
        | Onesie           |
        | T-Shirt Red      |

    Scenario Outline: User Remove All Product
        Given all Product add to cart
        When User Remove all Product