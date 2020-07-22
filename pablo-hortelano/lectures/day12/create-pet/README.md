DESCRIPTION

As a pet lover
I want an App
So that select my pet name and sex

SCENARIOS
//Esto sirve para que los desarrolladores que vayan a trabajar con esto a desarrollar los escenarios sepan que nombre ponerle a las interfaces y demás

1 - Create a Pet
Given a function createPet
When I input a name
Then the function returns the pet

|name| |pet|
'Kira' {name: 'Kira'}

2 - Get pet's name
Given a pet
When call a function getName
Then return pet's name

|pet|name|
|{name: 'Kira'}|'Kira'

3 - Set pet's name
Given a pet
When I call the function setName with newName
Then the pet's name change to newName

|oldName|newName|
|'Kira'|'Pepa'|

4 - Get Gender
Given a pet
When call a function getGender
Then return pet's gender

|pet|gender|
|{name: 'Kira'}|undefined|
|{gender: 'female'}|'female'
|{gender: 'male'}|'male'

5 - Set Gender
Given a pet
When call a function setGender wit newGender
Then the pet's name change to newGender

|oldGender|newName|
|'Kira'|'Pepa'|

6 - Set pet's legs
Given a pet
When call a function setLegs wit legsNumber
Then the pet's number of legs is legsNumber

| pet | legsNumber | newPet |
| {name: 'Kira', legs: undefined} | 4 | {name: 'Kira', legs: 4} |
| {name: 'Kira', legs: 3} | 5 | {name: 'Kira', legs: 5} |

7 - Get pet's legs
Given a pet
When call a getLegs function
Then return pet's legsNumber

| pet | legs |
| {name: 'Kira', legs: 2} | 2 |
| {name: 'Kira', legs: 4} | 4 |
