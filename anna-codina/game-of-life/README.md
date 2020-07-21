As a life entusiast
I want to code Conway's Game Of Life.
So that I can practice my frontend skills.

SCENARIO #1
     Given a function <next>
     When I have no <initial-state>
     then te function remains stable. 

     undefined, null, 

SCENARIO #2
    Given a function <next>
    When I have a blinker <initial-state>
    Then the function returns <current-state>

        let initialStageBlinker = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        ]
        let myNewStageBlinker = [
            [0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0],
        ]