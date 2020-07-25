describe('Calculator', function () {
    let calculate;
    let test = [10, 5];

    beforeEach(function () {
        calculate = new Calculator();
    });

    it('should create function', function () {
        expect(calculate).toBeTruthy(true);
    });


    it('should return add', function () {
        expect(calculate.add(test)).toEqual(15);
    });

    it('should return substract', function () {
        expect(calculate.substract(test)).toEqual(5);
    });

    it('should return multiply', function () {
        expect(calculate.multiply(test)).toEqual(50);
    });

    it('should return divide', function () {
        expect(calculate.divide(test)).toEqual(5);
    });

    it('should delete screen', function () {
        expect(calculate.delete()).toEqual(0);
    });

});