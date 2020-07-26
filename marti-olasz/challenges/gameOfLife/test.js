describe('GameOfLife', function () {
	//Config//
	const beforeBoards = {
		blinker: [
			[0, 1, 0],
			[0, 1, 0],
			[0, 1, 0],
		],
		toad: [
			[0, 0, 0, 0],
			[1, 1, 1, 0],
			[0, 1, 1, 1],
			[0, 0, 0, 0],
		],
		beacon: [
			[1, 1, 0, 0],
			[1, 1, 0, 0],
			[0, 0, 1, 1],
			[0, 0, 1, 1],
		],
	}

	const afterBoards = {
		blinker: [
			[0, 0, 0],
			[1, 1, 1],
			[0, 0, 0],
		],
		toad: [
			[0, 1, 0, 0],
			[1, 0, 0, 1],
			[1, 0, 0, 1],
			[0, 0, 1, 0],
		],
		beacon: [
			[1, 1, 0, 0],
			[1, 0, 0, 0],
			[0, 0, 0, 1],
			[0, 0, 1, 1],
		],
	}
	const game = new gameOfLife()

	//Test//
	it('Blinker', function () {
		expect(game.turn(beforeBoards.blinker)).toEqual(afterBoards.blinker)
	})
	it('Toad', function () {
		expect(game.turn(beforeBoards.toad)).toEqual(afterBoards.toad)
	})
	it('Beacon', function () {
		expect(game.turn(beforeBoards.beacon)).toEqual(afterBoards.beacon)
	})
})
