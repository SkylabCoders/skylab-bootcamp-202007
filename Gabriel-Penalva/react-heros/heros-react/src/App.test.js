describe('App Test', () => {
    beforeAll(() => {
        console.log('antes que nada...');
    });
    it('should create', () =>
        expect(2 + 2).toEqual(4));
    it('should create', () =>
        expect(2 * 2).toEqual(4));

    //mode 1 async test
    it('async test 1', done => {
        setTimeout(done, 100);
    });
    it('async test 2', () => {
        return new Promise(
            resolve => setTimeout(resolve, 100)
        )
    });
    it('async test 3', async () => await setTimeout(100)
    );
    it('async test 4', async () => {
        const prm = new Promise((resolve) => setTimeout(resolve, 100));
        return await prm;
    });
});