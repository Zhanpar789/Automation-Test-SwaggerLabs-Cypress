Feature: Login feature

    Background:
        Given User at Product Page

    Scenario Outline: User filter Product to "<Filter>"
        When User select filter Product to "<Filter>"
        Then User will see filter Product Selected to "<Filter>"

        Examples: 
        | Filter |
        | Name (A to Z) |
        | Name (Z to A) |
        | Price (low to high) |
        | Price (high to low) |