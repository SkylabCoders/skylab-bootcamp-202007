describe('GameOfLife', function () {
    //Config//
	const beforeBoards = {
		blinker: [
			[0, 1, 0],
			[0, 1, 0],
			[0, 1, 0],
		],
    }
    
    const afterBoards ={
        blinker: [
			[0, 0, 0],
			[1, 1, 1],
			[0, 0, 0],
		],
    }
    beforeAll(function () {
       const game = new gameOfLife()
      })

	//Test//
	it('Blinker', function () {
		expect(game.turn(beforeBoards.blinker)).toBe(afterBoards.blinker)
	})
	
})
