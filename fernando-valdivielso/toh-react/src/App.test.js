describe('App', () => {

    beforeAll(() => {
        // console.log('Before All!');
    });
    it('should sum', () => {
        expect(2 + 2).toEqual(4);
    });
    it('should duplicate', () => {
        expect(2 * 2).toEqual(4);
    });

    it('aync test 1', done => {
        setTimeout(done, 100);
    })

    it('async test 2', () => {
        return new Promise(
            resolve => setTimeout(resolve, 100)
        )
    });

    it('aync test 3', async () => {
        const myPromise = new Promise((resolve) => setTimeout(resolve, 100));
        return await myPromise;
    });



    afterEach(() => {
        // console.log('After each!')
    })

    afterAll(() => {
        // console.log('After All!')
    })
})