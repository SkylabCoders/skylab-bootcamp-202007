describe('My calculator', function () {
    let calculator = undefined;
    const firstOperator = 7;
    const secondOperator = 2;
    const resultAdd = 9;
    const resultSubs = 5;
    const resultMult = 14;
    const resultDiv = 3.5;
    beforeEach(function () {
        calculator = new Calculator();
    })
    it('Should stay stable if the operators are undefined', function () {
        expect(calculator.operation(null)).not.toBeDefined();
        expect(calculator.operation(undefined)).not.toBeDefined();
        expect(calculator.operation()).not.toBeDefined();
    })
    it('Should say the add result', function () {
        expect(calculator.operation(firstOperator, secondOperator, addSymbol)).toBe(resultAdd)
    })
    it('Should say the substract result', function () {
        expect(calculator.operation(firstOperator, secondOperator, subSymbol)).toBe(resultSubs)
    })
    it('Should say the multiply result', function () {
        expect(calculator.operation(firstOperator, secondOperator, mulSymbol)).toBe(resultMult)
    })
    it('Should say the divide result', function () {
        expect(calculator.operation(firstOperator, secondOperator, divSymbol)).toBe(resultDiv)
    })
});