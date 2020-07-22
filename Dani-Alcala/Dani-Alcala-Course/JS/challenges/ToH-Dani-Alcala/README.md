As a Heroes Agency
I want to create an app
So that I can offer heroes to the public

SCENARIOS

1. Create hero
Given a function createHero
When I input a name
Then the function returns the hero

| name | hero |
| Magneta | { heroes} |

2. Get hero
Given a hero
When I call a function getHero
Then the function returns the name

| hero | name |
| { heroes} | Magneta |

3. Set hero
Given a hero
When I call a function setHero
Then the function changes a newName

| hero | newName |
| { heroes} | Bombasto |


