describe('Player', function () {
	let personConfig
	let fullName
	let player

	beforeEach(function () {
		personConfig = {
			name: 'Alex',
			lastName: 'Zander',
			trophies: { gold: 2, silver: 3, bronze: 0 },
		}

    fullName = 'Alex Zander' // personConfig.name + ' ' + personConfig.lastName
      
		player = new Player(
			personConfig.name,
			personConfig.trophies,
			personConfig.lastName
		)
	})

	it('should have a name', function () {
		expect(player.name).toBe(personConfig.name)
	})

	it('should count the number of trophies', function () {
		expect(player.countTrophies()).toBe(5)
	})

	it('should have a full name', function () {
		expect(player.fullName()).toBe(fullName)
	})
})