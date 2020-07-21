As a pet enthusiast,
I want an App,
So that I can select a pet name and gender

Scenarios #1 - Create name pet

Given a function <createPet> that allow us to create a pet
When I want to select a name <name>
Then we create a name of the pet

*variables que usaremos y tipos de valores:  |name|pet|
                                             "Kira"|{name: "Kira"}

Scenarios #2 - Define gender

Given a function <createPet>
When I want to select a gender <gender>
Then the pet gender changes

*|gender|pet|
"Female"|"dog"
