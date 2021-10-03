Feature: Register2

    Scenario Outline: Register in the automation test Website

        Given User is at the main page
        When User click on sigin button
        And User enters email
        And User clicks on creataccount button
        And user enters informations fistname as '<fname>' and lastname as '<lname>' and address as '<address>' and postcode as '<pcode>'
        Then User user click on register and logout

        Examples:
            | fname   | lname | address                      | pcode |
            | Account | Two   | 945 Paul Wayne Haggerty Road | 70062 |