Feature: Generate

    Scenario Outline: Generate dataset for furthur testing
        Given User is at anywhere
        When user write data in the files
        Then check if the data is generated '<lname>'
        Examples:
            | lname |
            | Three |