describe('ToH', () => {
	beforeEach(() => {
		console.log('Before Each!');
	});
	beforeAll(() => {
		console.log('Before All!');
	});
	it('should sum', () => {
		console.log('test!');
		expect(2 + 2).toEqual(4);
	});
	it('should duplicate', () => {
		console.log('test!');
		expect(2 * 2).toEqual(4);
	});

	afterEach(() => {
		console.log('after Each');
	});
	afterAll(() => {
		console.log('after All');
	});
});
