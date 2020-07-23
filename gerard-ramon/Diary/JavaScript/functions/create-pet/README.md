# Create-pet

As a pet enthusiast
I want an app
So that I can select and modify my pet name and gender

Scenario #1 - Create pet
Given a function <createPet>
When I introduce a name and a gender
Then the function returns a pet

| name   | pet            |
| ------ | -------------- |
| 'kira' | {name: 'Kira'} |

Scenario #2 - Get pet name
Given a pet
When I ask the name with <getName> function
Then I get the pet name.

| pet            | name    |
| -------------- | ------- |
| {name:'solde'} | 'solde' |

Scenario #3 - Set pet name
Given a pet
When I call the <setName> function with a name
Then that pet name changes with the new value.

| oldName | newName |
| ------- | ------- |
| 'Kira'  | 'pepa'  |

Scenario #4 - Get pet gender
Given a pet
When I call <getGender> function
Then it should return that pet gender.

| pet                              | gender    |
| -------------------------------- | --------- |
| {name: 'kira' gender: 'female'}  | 'female'  |
| {name: 'kira' gender: 'male'}    | 'male'    |
| {name: 'kira' gender: undefined} | undefined |

Scenario #5 - Set pet gender
Given a pet
When i call <setGender> function with newGender
Then it changes the gender

| oldGender | newGender |
| --------- | --------- |
| 'female'  | 'male'    |

Scenario #6 - Set pet legs
Given a pet
When I call <setLegs> function with legsNumber
Then the number of legs is changed

| pet                                  | legsNumber | newPet                       |
| ------------------------------------ | ---------- | ---------------------------- |
| {name:'Kira', legsNumber: undefined} | 4          | {name:'Kira', legsNumber: 4} |

Scenario #7 - Get pet legs
Given a Pet
When i call <getLegs> function
Then it return the number of legs.

| pet                            | legsNumber |
| ------------------------------ | ---------- |
| pet{name:'Kira', legsNumber:4} | 4          |
