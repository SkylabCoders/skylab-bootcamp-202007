describe('ToH', () => {
	it('should sum', () => {
		expect(2 + 2).toEqual(4);
	});
	it('should duplicate', () => {
		expect(2 * 2).toEqual(4);
	});

	it('asinc test 1', (done) => {
		setTimeout(done, 100);
	});
	it('asinc test 2', () => {
		return new Promise((resolve) => setTimeout(resolve, 100));
	});
	it('asinc test 3', () => {
		async () => await delay(100);
	});
	it('asinc test 4', async () => {
		return await new Promise((resolve) => setTimeout(resolve, 1000));
	});
});
