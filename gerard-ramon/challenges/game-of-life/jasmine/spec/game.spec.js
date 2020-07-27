describe('Game-of-life', () => {
    let game;
    beforeEach(function() {
        game = new Game();
        game.createGameBoard(5, 5);

    })

    it('Should create game', function() {
        expect(game).toBeDefined();
    })

    it('should create 2 empty new arrays from given rows and columns', function() {
        let expected = [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ]
        expect(game.initialState).toEqual(expected);
    });

    it('Should remain stable when initial state is blank', function() {
        expect(game.applyRulesToCells()).toBeTruthy();
    })

    it('Should remain stable when initial state is null', function() {
        game.initialState = null;
        expect(game.applyRulesToCells()).toBeTruthy();
    })

    it('Should remain stable when initial state is undefined', function() {
        game.initialState = undefined;
        expect(game.applyRulesToCells()).toBeTruthy();
    })

    it('should apply the game rules correcly', function() {
        let expected = [
            [0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0],
        ];
        game.initialState = [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ];
        game.applyRulesToCells()
        expect(game.initialState).toEqual(expected);
    });
});