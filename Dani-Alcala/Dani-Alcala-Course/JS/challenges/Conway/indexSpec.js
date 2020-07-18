describe('Player', function () {
	let count;
	let k;
	let l;
	let initial;
	let final;

	beforeEach(function () {
		count = 0;
		
		initial = 
        [[0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0]]	

		final =
		[[0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0]]
		
		k = 2;
		
		l = 2;
	})

	it('should count ok', function () {
		expect(final[k][l]).toBe(finalGrid[i][j])
	})

	// it('should have a name', function () {
	// 	expect(player.name).toBe(personConfig.name)
	// })

	// it('should count the number of trophies', function () {
	// 	expect(player.countTrophies()).toBe(6)
	// })

	// it('should have a full name', function () {
	// 	expect(player.fullName()).toBe(fullName)
	// })
})
