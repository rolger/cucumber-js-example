Feature: test all possibilities of ticket prices

  Scenario: calculate the price for a person fo 8 years
    Given a person of age 8 is a "child"
    When we calculate the ticket price
    Then the price will be 25.00 $


  Scenario Outline: Calculate ski pass price with full prices
    Given a person of age <age> is a "<description>"
    When we calculate the ticket price
    Then the price will be <price> $
    Examples:
      | description                 | age | price |
      | Children -  upper boundary  | 5   | 0.00  |
      | Children - lower boundary   | 6   | 25.00 |
      | Teenager - upper boundary   | 17  | 25.00 |
      | Adult - lower boundary      | 18  | 35.00 |
      | Adult - upper boundary      | 64  | 35.00 |
      | Retirement - lower boundary | 65  | 27.00 |
