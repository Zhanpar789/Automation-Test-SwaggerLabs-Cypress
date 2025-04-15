Feature: Login feature

    Background:
        Given User at Product Page

    Scenario Outline: User Add BackPack To Cart Product
    When User Add To Cart Product BackPack
    Then User Will See Backpack Add To Cart

    Scenario Outline: User Add T-Shirt To Cart Product
    When User Add To Cart Product T-Shirt
    Then User Will See T-Shirt Add To Cart

    Scenario Outline: User Add Bike Light To Cart Product
    When User Add To Cart Product Bike Light
    Then User Will See Bike Light Add To Cart
    
    Scenario Outline: User Add Fleece Jacket To Cart Product
    When User Add To Cart Product Fleece Jacket
    Then User Will See Fleece Jacket Add To Cart
    
    Scenario Outline: User Add Onesie To Cart Product
    When User Add To Cart Product Onesie
    Then User Will See Onesie Add To Cart
    
    Scenario Outline: User Add T-Shirt Red To Cart Product
    When User Add To Cart Product T-Shirt Red
    Then User Will See T-Shirt Red Add To Cart

