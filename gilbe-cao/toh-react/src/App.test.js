describe('App', () => {
	beforeAll(() => {
		console.log('Before All !');
	});

	beforeEach(() => {
		console.log('Before Each !');
	});

	it('should sum', () => {
		console.log('Test !');
		expect(2 + 2).toEqual(4);
	});

	it('should duplicate', () => {
		console.log('Test !');
		expect(2 * 2).toEqual(4);
	});

	afterEach(() => {
		console.log('After Each !');
	});

	afterAll(() => {
		console.log('After All !');
	});
});
