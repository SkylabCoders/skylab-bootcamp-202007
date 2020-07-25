DESCRIPTION

As a pet enthusiast
I want an App
So that I can select and/or modifymy pet name and gender

SCENARIOS

1. Create pet

Given a function createPet
When I input a name
Then the function return the pet

|name|pet|
|'Kira'|{name: 'Kira'}|

2. Get name pet
   Given a pet
   When call a function getName
   Then return the name

|pet|name|
|{name: 'Kira'}|'Kira'|

3. Set name pet
   Given a pet
   When call the function setName with newName
   Then the name change

|oldName|newName|
|'Kira'|'Pepa'|

4. Get gender

Given a pet
When call a function getGender
Then return gender value

|pet|gender|
|{name: 'kira'}|undefined|
|{gender: 'female'}|'female'|
|{gender: 'male'}|'male'|

5. Set gender

Given a pet
When call a function setGender with newGender
Then the gender is changed

|oldGender|newGender|
|'female'|'male'|

6. Set pet legs

Given an existing pet
When I call the setLegs function with a legsNumber
Then the number of legs is changed

|pet|legsNumber|newPet|
|{name: 'Kira', legs: undefined}|4|{name: 'Kira', legs: 4}|
|{name: 'Kira', legs: 2}|6|{name: 'Kira', legs: 6}|

7. Get leg number

Given an exisiting pet
When I call the getLegs function
Then the legsNumber value is returned

|pet|legsNumber|
|{name: 'kira', legs: 2}|2|
|{name: 'kira', legs: 4}|4|