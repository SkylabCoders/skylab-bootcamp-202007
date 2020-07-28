# DESCRIPTION

As a pet lover
I want an App
So that I can select and modify my pet name and gender

# SCENARIOS

1. Create pet:

Given a function createPet
When I input a name
Then the function return the pet

| name | pet |
|'kira'| {name: 'kira'} |

2. Get name pet
   Given a pet
   When I call a function getName
   Then return name

| pet | name |
| {name: 'kira'} | 'kira' |

3. Set name pet
   Given a pet
   When I call the function setName with a newName
   Then the name change

| oldName | newName |
| 'kira' | 'pepa' |

4. Get gender pet
   Given a pet
   When I call a function getGender
   Then return gender

| pet | gender |
|{name: 'kira'} | undefined |
|{name: 'kira' , gender:'female'}| 'female' |
|{name: 'kira' , gender:'male'} | 'male' |

5. Set gender pet
   Given a pet
   When I call the function setGender with newGender
   Then the gender is change

| oldGender | newGender |
| 'female' | 'male' |

6. Set pet legs
   Given a pet
   When I call the setLegs function with a legsNumbers
   Then the number os legs is changed

| pet | legsNumbers | newPet
|{name: 'kira', legs: undefined} | 4 | {name: 'kira, legs: 4}

| {name: 'kira', legs: 2} | 6 | {name: 'kira', legs: 6}

7. Get leg number

   Given an existing pet
   When i callthe getLegs function
   Then the legsNumber value is returned

| pet | legsNumbers |
| {name: 'kira', legs: undefined} | undefined |
| {name: 'kira', legs: 2} | 2 |
| {name: 'kira', legs: 4} | 4 |
