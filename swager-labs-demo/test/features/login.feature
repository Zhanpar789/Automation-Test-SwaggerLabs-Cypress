Feature: Login feature

    Background:
        Given User access to SauceDemo

    Scenario Outline: User Login with valid Credentials
        When User Input "<username>" Valid Username
        And User Input "<password>" Valid Password
        And User click Button Login
        Then User Success Login to SauceDemo

    Examples: 
        | username      | password       |
        | standard_user | secret_sauce   |
        | problem_user  | secret_sauce   |
        | error_user    | secret_sauce   |
        | visual_user   | secret_sauce   |

    Scenario Outline: User Login with Invalid Credentials
        When User Input Invalid Username
        And User Input Invalid Password
        And User click Button Login 
        Then User Failed Login to SauceDemo

    Scenario Outline: User Login with Locked Out User
        When User Input "locked_out_user" Valid Username    
        And User Input "<password>" Valid Password
        And User click Button Login
        Then User Will See Locked Out Message

      Examples: 
        | password     |
        | secret_sauce |  
            