describe('App', () => {
	it('should create', () => {
		expect(2 + 2).toEqual(4);
	});

	it('should duplicate', () => {
		expect(2 * 2).toEqual(4);
	});

	it('should create async1', (done) => {
		setTimeout(done, 1000);
	});

	it('should create async2', () => {
		return new Promise((resolve) => setTimeout(resolve, 2000));
	});

	it('should create async3', async () => {
		return await new Promise((resolve) => setTimeout(resolve, 3000));
	});
});
