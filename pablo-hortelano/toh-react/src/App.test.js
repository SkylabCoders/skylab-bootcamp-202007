describe('App', () => {
	beforeEach(() => {
		console.log('Before Each');
	});
	beforeAll(() => {
		console.log('Before All');
	});
	it('should sum', () => {
		console.log('Test');
		expect(2 + 2).toBe(4);
	});
	it('should sum', () => {
		console.log('Test');
		expect(3 + 1).toBe(4);
	});
	afterEach(() => {
		console.log('After Each');
	});
	afterAll(() => {
		console.log('After All');
	});
});
