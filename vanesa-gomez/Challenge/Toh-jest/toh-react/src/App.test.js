describe('App', () => {
	beforeAll(() => {
		console.log('Before All !');
	});
	it('should sum', () => {
		console.log('test !');
		expect(2 + 2).toEqual(4);
	});
	it('should duplicate', () => {
		console.log('test !');
		expect(2 * 2).toEqual(4);
	});

	afterAll(() => {
		console.log('After All !');
	});
});
