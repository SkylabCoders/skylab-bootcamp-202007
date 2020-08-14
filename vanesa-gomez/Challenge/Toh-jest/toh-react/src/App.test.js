describe('App', () => {
	//.skip o "x" delante del it... : ignora ese test.  || .only o "f" delanten del it... : hace foco en ese test.
	it('should sum', () => {
		expect(2 + 2).toEqual(4);
	});
	it('should duplicate', () => {
		expect(2 * 2).toEqual(4);
	});

	it('async test 1', (done) => {
		setTimeout(done, 100);
	});

	it('async test 2', () => {
		return new Promise((resolve) => setTimeout(resolve, 100));
	});

	it('async test 3', async () => {
		const myPromise = new Promise((resolve) => setTimeout(resolve, 100));
		return await myPromise;
	});
});
