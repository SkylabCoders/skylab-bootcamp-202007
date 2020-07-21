//REQUIREMENTS FOR FUNCTION LECTURE: PETS

As a pet lover,
I want an app
I can select my pet's name and sex

SCENARIO 1: Create a pet name
Given a function createName
When I introduce a <name>
Then the resulting object's is <petName>

## | name | petName |

"Goku" | {name: 'Goku'}

SCENARIO2: Obtain a pet's name

Given a previously created pet <pet>
When I ask for the name property
Then I get back the its name <petName>

## | pet | petName |

| {name: "goku"} | "goku" |

SCENARIO 3: Set a new name to an already existing pet

Given a previously created pèt <pet>
When I call the setName function with a new <newName>
Then the property points to <newName>

## | pet | newName |

| {name: 'Goku'| 'Goten' |

SCENARIO 4: Define pet's gender

Given a function to define pet's gender
When I introduce the gender <gender>
Then the property gender points to the value <gender>

## | gender |

| 'male' |
| 'female' |

SCENARIO 5: Set a pets name

Given a already existing pet gender
When I call the setName function with a <newGender>
Then the property points to the value <newGender>

## | newGender |

| 'male' |
