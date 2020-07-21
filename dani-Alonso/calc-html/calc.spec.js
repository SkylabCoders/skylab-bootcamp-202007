describe('Calc', function() {
    let calc;

    beforeEach(function() {
        calc = new Calc();
    });

    it('should create', function() {
        expect(calc).toBeTruthy();
    });

    it('should return the sum', function() {
        expect(calc.sum(1, 2)).toEqual(3);
    });

    it('should return the rest', function() {
        expect(calc.rest(2, 1)).toEqual(1);
    });
    it('should return the mult', function() {
        expect(calc.mult(2, 1)).toEqual(2);
    });
    it('should return the divide', function() {
        expect(calc.div(4, 2)).toEqual(2);
    });
    it('should clean the screen', function() {
        expect(calc.ac(4, 2)).toEqual(0);
    });
});