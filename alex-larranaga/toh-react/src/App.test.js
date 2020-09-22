describe('Index', () => {
	//beforeEach(() => console.log('Before each!'));
	it('should sum', () => {
		console.log('Skipped test!');
		expect(2 + 2).toEqual(4);
	});
	it('async test with DNE', (done) => {
		console.log('async test with DNE');
		setTimeout(done, 1000);
	});

	it('asyn test with PROMISES', () => {
		console.log('asyn test witch PROMISES');

		return new Promise((resolve) => setTimeout(resolve, 3000));
	});

	it('asyn test with ASYNC AWAIT', async () => {
		return await new Promise((resolve) => setTimeout(resolve, 3000));
	});

	//afterEach(() => console.log('After each!!'));
	//afterAll(() => console.log('After all test!'));
});
