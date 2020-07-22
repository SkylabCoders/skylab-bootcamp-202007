1. Create pet
   Given a function <createPet>
   When I pass a name
   Then create pet

|name |pet |
|'Antidisturbis'|{name: 'Antidisturbis'}|

2. Get name pet
   Given a pet
   When call a function getName
   Then return the name

|pet |name |
|{name:'KLK'}|'KLK'|

3. Set name pet
   Given a pet
   When call the function setName with newName
   Then update the name

|name |newName |
|'KLK'|'Antidisturbis'|

4. Get gender
   Given a pet
   When call a function getGeder
   Then return gender value

|pet|gender|
|{gender: 'Female'}|'Female'|
|{}|'No gender found'|

5. Set gender pet
   Given a pet
   When call the function setGender with newGender
   Then update the gender

| gender | newGender |
| '' |'Female'|
