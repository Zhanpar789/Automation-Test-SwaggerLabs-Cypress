Feature: Login feature

    Background:
        Given User access to SauceDemo

    Scenario Outline: User Login with valid Credentials
        When User Input Valid Username
        And User Input Valid Password
        And User click Button Login
        Then User Success Login to SauceDemos   