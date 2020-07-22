DESCRIPTION

As a pet enthusiast
I want an App
So that I can select my pet name and gender

SCENARIO #1 - Create pet

Given a function <createPet>
When I pass the pet name
Then the function returns the pet

|name  | pet          |
|'Kira'|{name: 'Kira'}|

SCENARIO #2 - Get pet name

Given a pet
When I call a function <getName>
Then return pet name

|pet           | name|
|{name: 'Kira'}|'Kira|


SCENARIO #3 - Set pet name

Given a pet
When I call the function setName with newName
Then the name change

|oldeName | newName   |
|'Kira'   |'Pepa'     |


SCENARIO #4 - Get gender

Given a pet  
When call a function getGender
Then return gender value


|pet                             | gender  |
|{name: 'Pepa', gender: 'female'}|'female' |
|{name: 'Pepa', gender: 'male'}  |'male'   |
|{name: 'Pepa'}                  |undefined|



SCENARIO #5 - Set gender

Given a pet  
When call a function setGender with newGender
Then gender is changed

|oldGender|newGender|
|'female' |'male'   |


SCENARIO #6 - Set pet legs

Given an existing pet  
When I call the <setLegs> function with a legsNumber
Then the number of legs is changed

|pet                           | legsNumber | newPet                 |
|{name: 'Kira, legs: undefined}| 4          | {name: 'Kira', legs: 4}|
|{name: 'Kira, legs: 2}        | 6          | {name: 'Kira', legs: 6}|



SCENARIO #7 - Get leg number

Given an existing pet
When I call the <getLegs> function
Then 

|pet                           | legsNumber 
|{name: 'Kira, legs: 2}        | 2          
|{name: 'Kira, legs: 4}        | 4          