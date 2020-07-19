describe('My game of life', function () {
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
    let initialStageToad = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
    ]
    let myNewStageToad = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0],
        [0, 1, 0, 0, 1, 0],
        [0, 1, 0, 0, 1, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
    ]
    let initialStageBeacon = [
        [0, 0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 0],
    ]
    let myNewStageBeacon = [
        [0, 0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 0],
    ]
    let myNeighbours = 3;
    it ('should say the number of neighbours', function(){
        expect(neighboursCounter(initialStageBlinker, 1, 2)).toBe(myNeighbours)
    });
    it ('should print a new stage of Blinker', function(){
        expect(gameOfLifeTurn(initialStageBlinker)).toEqual(myNewStageBlinker)
    });
    it ('should print the inital stage of Blinker', function(){
        expect(gameOfLifeTurn(myNewStageBlinker)).toEqual(initialStageBlinker)
    });
    it ('should print a new stage of Toad', function(){
        expect(gameOfLifeTurn(initialStageToad)).toEqual(myNewStageToad)
    });
    it ('should print the inital stage of Toad', function(){
        expect(gameOfLifeTurn(myNewStageToad)).toEqual(initialStageToad)
    });
    it ('should print a new stage of Beacon', function(){
        expect(gameOfLifeTurn(initialStageBeacon)).toEqual(myNewStageBeacon)
    });
    it ('should print the inital stage of Beacon', function(){
        expect(gameOfLifeTurn(myNewStageBeacon)).toEqual(initialStageBeacon)
    });
});


