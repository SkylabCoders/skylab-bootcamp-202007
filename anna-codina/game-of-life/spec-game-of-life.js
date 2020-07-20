describe('My game of life', function () { 

    const blinker = {
        initialStage : [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ],
        newStage: [
            [0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0],
        ],
    };
    const toad = {
        initialStage: [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 0],
            [0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ],
        newStage: [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ]
    };
    const beacon = {
        initialStage: [
            [0, 0, 0, 0, 0, 0],
            [0, 1, 1, 0, 0, 0],
            [0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0],
            [0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 0, 0],
        ],
        newStage: [
            [0, 0, 0, 0, 0, 0],
            [0, 1, 1, 0, 0, 0],
            [0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0],
            [0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 0, 0],
        ]
    };
    const beaconCorner = {
        initialStage: [
            [1, 1, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0],
            [0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ],
        newStage: [
            [1, 1, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 0],
            [0, 0, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ]
    };

    let myNeighbours = 3;
    /* My specs */
    it ('should stay stable if the newGame is undefined', function (){
        expect(gameOfLifeTurn(null)).not.toBeDefined();
        expect(gameOfLifeTurn(undefined)).not.toBeDefined();
        expect(gameOfLifeTurn()).not.toBeDefined();
    });
    it ('should say the number of neighbours', function(){
        expect(neighboursCounter(blinker.initialStage, 1, 2)).toBe(myNeighbours)
    });
    it ('should print a new stage of blinker', function(){
        expect(gameOfLifeTurn(blinker.initialStage)).toEqual(blinker.newStage)
    });
    it ('should print a new stage of toad', function(){
        expect(gameOfLifeTurn(toad.initialStage)).toEqual(toad.newStage)
    });
    it ('should print a new stage of beacon', function(){
        expect(gameOfLifeTurn(beacon.initialStage)).toEqual(beacon.newStage)
    });
    it ('should print a new stage of beaconCorner', function(){
        expect(gameOfLifeTurn(beaconCorner.initialStage)).toEqual(beaconCorner.newStage)
    });
});


