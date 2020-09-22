describe('Test set for randomizer', () => {
    test('should return an integer between 0 and n', () => {
        const n = 20;
        const { random } = Math;
        const number = Math.floor(random()*n);
        const intgerPartOfNumber = parseInt(number);
        const modulo = number % intgerPartOfNumber;
        expect(number).toBeGreaterThanOrEqual(0);
        expect(number).toBeLessThanOrEqual(n);
        expect(modulo).toBe(0);
    })
})