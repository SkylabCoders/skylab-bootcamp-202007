As a Life enthusiast
I want to code Conway's Game of Life
So that I can practice my frontend skills

Scenario #1

Given a function <>
When I have no <initialState>
Then the function remains stable

initialState
undefined
null

Scenario #2

Given a function <next>
When I have a Blinker <initialState>
Then the function returns a new <current-state>

initialState
[
    [0,0,0,0,0],
    [0,0,0,0,0]
    [0,1,1,1,0]
    [0,0,0,0,0]
    [0,0,0,0,0]
]

currentState
[
    [0,0,0,0,0],
    [0,0,1,0,0]
    [0,0,1,0,0]
    [0,0,1,0,0]
    [0,0,0,0,0]
]


Scenario #2

Given a function <next>
When I have a Blinker <initialState>
Then the function returns a new <current-state>

initialState
[
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0]
]


currentState
[
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0]
]


Scenario #2

Given a function <next>
When I have a Blinker <initialState>
Then the function returns a new <current-state>
