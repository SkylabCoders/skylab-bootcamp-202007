//Only run this scope with describe.only or fdescribe (it.only or fit)
describe.skip('App', () => {
	//beforeAll(() => console.log('Before All'));
	//beforeEach(() => console.log('Before Each'));

	it('should sum', () => {
		expect(2 + 2).toEqual(4);
	});

	//Skip test with xit or it.skip (describe.skip or fdescribe)
	it.skip('should duplicated', () => {
		expect(2 - 2).toEqual(0);
	});

	it('async timeout', (done) => {
		setTimeout(done, 100);
	});

	it('async promise', () => {
		return new Promise((resolve) => setTimeout(resolve, 100));
	});

	it('async await', async () =>
		await new Promise((resolve) => setTimeout(resolve, 100)));

	//afterAll(() => console.log('After All'));
	//afterEach(() => console.log('After Each'));
});
