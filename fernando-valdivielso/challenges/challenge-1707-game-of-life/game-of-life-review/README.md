As a life enthusiast
I want to code Conway's game of life
so that I can practice my front end skills

- Scenario 1:
Given a function <next()>,
When I have no <initialState>
Then the functin remains stable

intialState > null or undefined

- Scenario 2:
Given a function <next()>
When I have a blinker <initialState>,
Then the function returns a new <currentState>

initialState>
[ 
    [0,0,0,0,0]
    [0,0,0,0,0]
    [0,1,1,1,0]
    [0,0,0,0,0]
    [0,0,0,0,0]
]

currentState:

[ 
    [0,0,0,0,0]
    [0,0,1,0,0]
    [0,0,1,0,0]
    [0,0,1,0,0]
    [0,0,0,0,0]
]


- Scenario 3:
Given a function <next()>
When I have a toad <initialState>,
Then the function returns a new <currentState>

initialState:
[ 
    [0,0,0,0,0,0]
    [0,0,0,0,0,0]
    [0,0,1,1,1,0]
    [0,1,1,1,0,0]
    [0,0,0,0,0,0]
]

currentState:
[ 
    [0,0,0,0,0,0]
    [0,0,0,1,0,0]
    [0,1,0,0,1,0]
    [0,1,0,0,1,0]
    [0,0,1,0,0,0]
    [0,0,0,0,0,0]
]


- Scenario 4:
Given a function <next()>
When I have a beacon <initialState>,
Then the function returns a new <currentState>

initialState:
[ 
    [0,0,0,0,0,0]
    [0,1,1,0,0,0]
    [0,1,1,1,1,0]
    [0,0,0,1,1,0]
    [0,0,0,0,0,0]
]

currentState:
[ 
    [0,0,0,0,0,0]
    [0,1,1,0,0,0]
    [0,1,0,0,1,0]
    [0,0,0,1,1,0]
    [0,0,0,0,0,0]
    [0,0,0,0,0,0]
]