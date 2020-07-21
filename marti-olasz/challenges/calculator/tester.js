describe('GameOfLife', function () {
	//Config//
	const a = 10
	const b = 2
	//Test//
	it('Sum', function () {
		expect(calc.calc(a, b, '+')).toEqual(12)
	})
	it('Rest', function () {
		expect(calc.calc(a, b, '-')).toEqual(8)
	})
	it('Multiplication', function () {
		expect(calc.calc(a, b, '*')).toEqual(20)
	})
	it('Division', function () {
		expect(calc.calc(a, b, '/')).toEqual(5)
	})
})
