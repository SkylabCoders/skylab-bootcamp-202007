# Conway's Game of Life

As a Life enthusiast
I want to code Conway's Game of Life
So that i can practice my frontend skills

Scenario #1

Given a function <next>
when i have no <initialState>
Then the function remains stable

Scenario #2
Given a function <next>
when i have a Blinker <initialState>
Then the function returns a new <currentState>

initialState 
[
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,1,1,1,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
]

currentState 
[
    [0,0,0,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,0,0,0]
]

Scenario #3
Given a function <next>
when i have a Toad <initialState>
Then the function returns a new <currentState>

initialState 
[
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,1,1,1,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
]

currentState 
[
    [0,0,0,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,0,0,0]
]

Scenario #4
Given a function <next>
when i have a Beacon <initialState>
Then the function returns a new <currentState>

initialState 
[
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,1,1,1,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
]

currentState 
[
    [0,0,0,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,0,0,0]
]