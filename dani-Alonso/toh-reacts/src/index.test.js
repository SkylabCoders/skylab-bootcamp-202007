describe('App', () => {
	it('should sum', () => {
		console.log('test');
		expect(2 + 2).toEqual(4);
	});
	it('should duplicate', () => {
		console.log('test!');
		expect(2 * 2).toEqual(4);
	});

	it('async test1', (done) => {
		setTimeout(done, 100);
	});
	xit('async test2', (done) => {
		return new Promise((resolve) => setTimeout(resolve, 200));
	});
	it('async test3', async () => await setTimeout(() => {}, 100));
});
