describe('Calculator', function () {
    var test = [10, 5];
    var calcular = Calc();
    // beforeEach(function(){

    // });

    it('Should return the sum', function () {
        expect(calcular.sum(test)).toEqual(15);
    });

    it('Should return the rest', function () {
        expect(calcular.rest(test)).toEqual(5);
    });

    it('Should return the div', function () {
        expect(calcular.div(test)).toEqual(2);
    });

    it('Should return the mult', function () {
        expect(calcular.mult(test)).toEqual(50);
    });

});