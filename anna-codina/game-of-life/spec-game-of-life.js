describe('My game of life', function () {
    let initialStage = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ]
    let myNewStage = [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
    ]
    let myNeighbours = 3;
    it ('should say the number of neighbours', function(){
        expect(neighboursCounter(initialStage, 1, 2)).toBe(myNeighbours)
    });
    it ('should print a new stage', function(){
        expect(gameOfLifeTurn(initialStage)).toEqual(myNewStage)
    });
});


