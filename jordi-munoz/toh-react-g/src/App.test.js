describe('App', () => {

    beforeEach(() => {
        console.log('Before Each!');
    });
    afterEach(() => {
        console.log('After Each!');
    });

    afterAll(() => {
        console.log('After All!');
    })

    it('should sum', () => {
        console.log('Test!');
        expect(2 + 2).toEqual(4);
    });

    it('should duplicate', () => {
        console.log('Test!');
        expect(2 * 2).toEqual(4);
    });
});