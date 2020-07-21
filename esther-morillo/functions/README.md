# Pet Lover

As a pet enthusiast
I want an App
So that I can select and/or modify my pet name and gender

SCENARIOS

#1 - Create pet

Given a function createPet
When I input a name
Then the function returns pet

| name | pet |                      //Variables
| 'Kira' | { name: 'Kira} |         //Posibles valores pet es un objeto con propiedades


//Con el nombre podemos pedirlo o cambiarlo (metemos dos escenarios más antesd e ir a gender)
#2 - Get name pet

Given a pet
When I call the function getName
Then the function returns name

| pet | name |
| { name: 'Kira' } | 'Kira  |

#3 - Set mane pet
Given a pet
When I call de function setName with newName //(Para obtenerlo de verdad necesita recibir un aargumento. Y le cambia el nombre pero no retorna nada)
Then the name change

| name | new name |
| 'Kira' | 'Pepa' |


#4 - Get gender

Give a pet
When I call the function getGender
Then return gender value

| pet  | gender |
| { name: 'Kira' } | undefined          //Siempre hay que valorar el escenario de que no está definido algo. ¿Qué pasa?
| { name: 'Kira', gender: 'female'} | 'female'  //Cuando yo cambio el género ya tengo el nombre 
| { name: 'Kira', gender: 'male'} | 'male' 


#5 - Set gender

Give a pet
When I call the function setGender with newGender  //Hay que reflejar el nuevo tipo de valor
Then the gender is changed

| gender  | new gender |
| 'female' | 'male' |


//Creamos otro escenario que es ponerle patas
#6 - Set pet legs 

Given an exisiting pet
When I call the setLegs function with a legsNumber
Then the number of legs is changed                  //El set no devuelve valor

| pet | legsNumber |

