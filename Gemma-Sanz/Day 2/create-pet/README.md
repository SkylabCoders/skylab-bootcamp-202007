As a pet enthusiast,
I want an App,
So that I can select and/or modify my pet name and gender

Scenarios #1 - Create a pet

Given a function <createPet> that allow us to create a pet
When I want to select a name <name>
Then we create a pet

*variables que usaremos y tipos de valores:  |name|pet|
                                             "Kira"|{name: "Kira"}


Scenarios #2 - Get a pet name

Given a function <createPet>
When I input a name
Then the function return the pet

*|pet|name|
{name: "Kira"}| "Kira"

Scenarios #3 - Set pet name

Given a pet
When I call the function <setName> with <newName>
Then the name changes

*|oldName|newName|
"Kira"|"Pepa"

Scenarios #4 - Get gender

Given a pet
When I call the function <getGender>
Then return the gender

*|pet|gender|
{name: "Kira", gender: "female"}|"female"
{name: "Kira", gender: "male"}|"male"
{name: "Kira"}

Scenarios #5 - Set gender

Given a pet
When I call the function <setGender> with <newGender>
Then the gender changes

*|pet|gender|
{name: "Kira", gender: "female"}|"female"
{name: "Kira", gender: "male"}|"male"
{name: "Kira"}

Scenario #6 - Set pet legs

Given an existing pet
When I call the function <setLegs> with a <legsNumber>
Then the number of legs is changed.

*pet|legs|legsNumber
{name: "Kira", gender: "female", legs: "undefined"}|4|"4"
{name: "Kira", gender: "female", legs: "2"}|6|"6"

Scenario #7 - Get pet legs

Given an existing pet
When I call the function <getLegs> 
Then the legsNumber value is changed.

*pet|legsNumber|
{name: "Kira", gender: "female", legs: "undefined"}|undefined|
{name: "Kira", gender: "female", legs: "2"}|2|
{name: "Kira", gender: "female", legs: "4"}|4|
