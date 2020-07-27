# Calculator v2 challenge

As a student,
I want to refactor my calculator html project
So that I can improve my skills applying SOLID principles and using the industry standards

Scenario #1
Given a screen with 12 characters
When user tries to add another char
Then it won't let the user add it.

Scenario #2
Given a screen with a coma.
When user tries do add another coma
Then it won't let the user do it.

Scenario #3
Given an empty screen,
When user adds a coma,
Then it will insert a 0 before the coma.

Scenario #4
Given a number,
When user clicks an operation button,
Then the previous saved operation must be displayed (without user having to click <equals>)

Scenario #5
Given an operation result of more than 12 characters
When printing the result
Then it should print an error indicating that the result is too long.

Scenario #6
Given an operation
When the user clicks <equals>
Then it should display the result.

Scenario #7
Given a decimal result
When showing the result
Then it should round it to 3 decimal numbers
