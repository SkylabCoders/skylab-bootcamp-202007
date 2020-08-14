describe('hola', () => {
	it('test1', () => {
		expect(2 + 3).toBe(5);
	});
	fit('async test 1', (done) => {
		setTimeout(done, 100);
	});
	fit('async test 2', () => {
		return new Promise((resolve) => setTimeout(resolve, 100));
	});
	fit('async test 3', async () => {
		const myPromise = new Promise((resolve) => setTimeout(resolve, 100));
		return await myPromise;
	});
});
