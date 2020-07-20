describe('My calculator', function () {


    fit('Should stay stable if the operators are undefined', function () {
        expect(opeartion(null)).not.toBeDefined();
        expect(opeartion(undefined)).not.toBeDefined();
        expect(opeartion()).not.toBeDefined();
    })
    it('Should say the add result', function () {
        expect(operation(firstOperator, secondOperator)).toBe(result)
    })
    it('Should say the rest result', function () {
        expect(operation(firstOperator, secondOperator)).toBe(result)
    })
    it('Should say the mult result', function () {
        expect(operation(firstOperator, secondOperator)).toBe(result)
    })
    it('Should say the div result', function () {
        expect(operation(firstOperator, secondOperator)).toBe(result)
    })
});