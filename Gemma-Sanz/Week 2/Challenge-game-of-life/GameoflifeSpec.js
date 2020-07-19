describe('Game of life testing', function () {
	let initialStage = [
		[0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0],
		[0,0,1,1,1,0,0],
		[0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0]
	];
	let finalStage = [

		[0,0,0,0,0,0,0],
        [0,0,0,1,0,0,0],
        [0,0,0,1,0,0,0],
        [0,0,0,1,0,0,0],
        [0,0,0,0,0,0,0]
	];
	let neightbours = 3

	it('should have a finalStage', function () {
		expect(newStage).toEqual(finalStage)
	})

	it('should have a number of neightbours', function () {
		expect(runStage(initialStage, 1, 3)).toBe(neightbours)
	})
})
