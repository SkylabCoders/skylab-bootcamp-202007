DESCRIPTION

As a pet entusiast
i want an App
so that i can select my pet name and gender

SCENARIOS

1. Create pet

Given a function createPet
When I input a name
Then the function return the pet

|name|pet|
|'Kira'|{name:'Kira'}|

2. Get name pet

Given a pet
when call a function getName
then return name

|pet|name|
|{name:'Kira'}|'Kira'|

3. Set name pet

Given a pet
When call the function setName with a newName
Then the name changes

|oldName|newName|
|'Kira'|'Pepa'|

4. Get gender

Given a pet
when call the fucntion getGender
the return gender

|pet|gender|
|{name:'Kira'|undefined|
|{name:'Kira',gender:'female'}|'female'|
|{name:'Kira',gender:'male'}|'male'|

5. Set gender

Given a pet
When call the function setGender with a newGender
Then the gender is changed

|oldGender|newGender|
|'female'|'male'|
|'male'|'female'|

6. Set pet legs

Given an existing pet
When i call the setLegs function with a legsNumber
Then the legs valu is changed

| pet | legsNumber | legsNumber |
| {name:'kira', legs: undefined} | 4 | {name: 'kira', legs: 4}
| {name: 'kira', legs: 2} | 6 | {name:'kira', legs: 6}

7. Get leg number

Given an existing pet
When I call the getLegs function
Then the legsNumber value is returned

|pet| legsNumber|
|{name:'kira', legs: 2} | 2 |
|{name: 'kira', legs: 4} | 4 |
