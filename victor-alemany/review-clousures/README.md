DESCRIPTION

AS a pet lover
I want an App
So that I can select/modify my pet name and genre 

SCENARIO #

1. Create pet
Given a function <createPet>
When I input the name
Then the function returns the pet's name

name | pet | 
'Kira'| {name:'Kira'}

2.Set pet name's

SCENARIO #2
Given a pet 
When I call the function <setName> with the <newName>
Then the function modify the current pet's name

 name | newName|
'Kira'|'Pepa'| 


3. Get pet's name

SCENARIO #3
Given a pet
When I call the function <getName>
Then the function returns the new pet's name

pet | name | 
{name:'Kira'} |'Kira'| 

4. Set pet's genre

SCENARIO #3
Given a pet
When I call the function <setGenre> with the <newGenre>
Then the genre is changed

oldGenre | newGenre |
male|female| 

5. Get pet's genre

SCENARIO #5
Given a pet
When I call the function <getGenre>
Then the function returns the new pet's genre

pet | genre|
{genre:'male',|'male'|
name: 'Pepa'}| 

{genre:'female',|'female'|
name: 'Pepa'}| 

{name:'kira}|undefined|

6. Set pet's legs

SCENARIO #6
Given a pet
When I call the function <setLegs> with <legNumber>
Then the function change the pet legs

pet | legNumber| newPet|
{genre:'male',| 4 | {name:'Kira',legs: 4}|
name: 'Pepa',
legs:undefined}|  

7. Get pet's legs

SCENARIO #7
Given a pet
When I call the function <getLegs>
Then the function returns the pet legs

newPet| legNumber| 
{name:'Kira',legs: 4} | 4 | 
 




