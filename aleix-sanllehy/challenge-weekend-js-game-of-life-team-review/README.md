# Conway's Game of Life

Scenario #1

Given a function <next>
When I have no <initial-state>
Then the cuntions remains stable

initialState
undefined
null

Scenario #2

Given a funtion <next>
When I have a Blinker <initialState>
Then the function returns a new <currentState>

initialState
[
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0]
]

currentState: 
[
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
]



toad