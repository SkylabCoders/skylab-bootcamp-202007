describe('Index', () => {
	it('async test 1', (done) => {
		setTimeout(done, 100);
	});

	it('async test 2', () => {
		return new Promise((resolve) => setTimeout(resolve, 100));
	});

	it('async test 3', async () => await setTimeout(() => {}, 100));

	it('async test 4', async () => {
		const myPromise = new Promise((resolve) => setTimeout(resolve, 100));
		return await myPromise;
	});
});
