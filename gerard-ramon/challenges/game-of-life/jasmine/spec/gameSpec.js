describe('Cell behavior', () => {
    const game = null;

    beforeAll(function() {
        game = new Game();
        game.createGameBoard(sizeSlider.value, sizeSlider.value);
    });

    it('should create 2 empty new arrays from given rows and columns', function() {

        expect(game.initialState).toBe(0);
    });


    it('should apply the game rules correcly', function() {
        expect()


    });
});