describe('App', () => {
	beforeAll(() => console.log('Before All'));
	beforeEach(() => console.log('Before Each'));

	it('should sum', () => {
		expect(2 + 2).toEqual(4);
	});
	it('should duplicated', () => {
		expect(2 - 2).toEqual(0);
	});

	afterAll(() => console.log('After All'));
	afterEach(() => console.log('After Each'));
});
