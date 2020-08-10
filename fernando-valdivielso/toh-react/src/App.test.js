describe('App', () => {

    beforeAll(() => {
        console.log('Before All!');
    });
    it('should sum', () => {
        expect(2 + 2).toEqual(4);
    });
    it('should duplicate', () => {
        expect(2 * 2).toEqual(4);
    });

    afterEach(() => {
        console.log('After each!')
    })

    afterAll(() => {
        console.log('After All!')
    })
})