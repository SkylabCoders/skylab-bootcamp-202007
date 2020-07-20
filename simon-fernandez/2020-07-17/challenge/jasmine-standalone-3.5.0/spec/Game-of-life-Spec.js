describe('Game', function () {
	let blinkerStart = null,
		blinkerEnd = null,
		toadStart = null,
		toadEnd = null,
		beaconStart = null,
		beaconEnd = null
	let game = null

	beforeAll(function () {
		blinkerStart = [
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
		]
		blinkerEnd = [
			[0, 0, 0, 0, 0],
			[0, 0, 1, 0, 0],
			[0, 0, 1, 0, 0],
			[0, 0, 1, 0, 0],
			[0, 0, 0, 0, 0],
		]
		toadStart = [
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 1, 1, 1, 0],
			[0, 1, 1, 1, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
		]
		toadEnd = [
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 1, 0, 0],
			[0, 1, 0, 0, 1, 0],
			[0, 1, 0, 0, 1, 0],
			[0, 0, 1, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
		]
		beaconStart = [
			[0, 0, 0, 0, 0, 0],
			[0, 1, 1, 0, 0, 0],
			[0, 1, 1, 0, 0, 0],
			[0, 0, 0, 1, 1, 0],
			[0, 0, 0, 1, 1, 0],
			[0, 0, 0, 0, 0, 0],
		]
		beaconEnd = [
			[0, 0, 0, 0, 0, 0],
			[0, 1, 1, 0, 0, 0],
			[0, 1, 0, 0, 0, 0],
			[0, 0, 0, 0, 1, 0],
			[0, 0, 0, 1, 1, 0],
			[0, 0, 0, 0, 0, 0],
		]

		game = new Game(
			blinkerStart,
			blinkerEnd,
			toadStart,
			toadEnd,
			beaconStart,
			beaconEnd
		)
	})

	it('Blinker first period should be', function () {
		expect(game.blinkerStart()).toEqual(blinkerEnd)
	})
	it('Blinker second period should be', function () {
		expect(game.blinkerEnd()).toEqual(blinkerStart)
	})
	it('Toad first period should be', function () {
		expect(game.toadStart()).toEqual(toadEnd)
	})
	it('Toad second period should be', function () {
		expect(game.toadEnd()).toEqual(toadStart)
	})
	it('Beacon first period should be', function () {
		expect(game.beaconStart()).toEqual(beaconEnd)
	})
	it('Beacon second period should be', function () {
		expect(game.beaconStart()).toEqual(beaconEnd)
	})
})
