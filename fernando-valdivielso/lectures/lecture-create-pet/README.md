DESCRIPTION

As a pet enthusiast
I want an App
So that I can select my pet name and gender

SCENARIOS
*************************************
Scenario #1 - Create pet
*************************************
Given a function createPet
When i input a name
Then the function returns the pet

|name  |pet           |
|'Kira'|{name: 'Kira'}|

*************************************
Scenario #2 - Get the pet's name
*************************************
Given a pet
When I call the function getName
Then it returns the pet name

|pet   |name          |
|'Kira'|{name: 'Kira'}|

*************************************
Scenario #3 - Set pet name
*************************************
Given a pet
When i call the function setName with a name
Then the name changes

|oldName|newName|
|'Kira' |'Pepa' |

*************************************
Scenario #4 - Get the pet's gender
*************************************

Given a pet
When I call the function getGender
Then it retutrns the pet gender

|pet               |gender   |
|{name: 'Kira'}    |undefined|
|{gender: 'female'}|'female' |
|{gender: 'male'}  |'male'   |

*************************************
Scenario #5 - Set the pet's gender
*************************************

Given a pet
When call a function setGender with newGender
Then the gender's pet is changed

|oldGender|newGender|
|'female' |'male'   |

*************************************
Scenario #6 - Set pet legs
*************************************

Given an existing pet
When I call the setLegs function with a legs number
Then the number of legs is changed

|pet                    |legsNumber|newPet                 |
|{name: 'Kira', legs: 4}|8         |{name: 'Kira', legs: 8}|

*************************************
Scenario #6 - Get pet legs
*************************************

Given an existing pet
When I call the getLegs function with a legs number
Then the legNumber value is returned

