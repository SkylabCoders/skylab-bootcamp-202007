describe('Cell behavior', () => {
    let game = null;
    game = new Game();

    it('should create 2 empty new arrays from given rows and columns', function() {
        game = new Game();

        let expected = [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ]
        game.createGameBoard(5, 5);
        expect(game.initialState).toEqual(expected);
    });


    it('should apply the game rules correcly', function() {
        let expected = [
            [0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0],
        ]

        game = new Game();
        game.createGameBoard(5, 5);
        game.initialState = [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ]
        game.applyRulesToCells()
        console.log(game.initialState);

        expect(game.initialState).toEqual(expected);


    });
});