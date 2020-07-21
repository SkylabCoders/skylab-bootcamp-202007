describe('Calculator', function () {
    var test = [10, 5];
    var calcular = Calc();
    // beforeEach(function(){

    // });

    it('Should return the sum', function () {
<<<<<<< HEAD
        expect(calcular.sum(test[0], test[1])).toEqual(15);
    });

    it('Should return the rest', function () {
        expect(calcular.rest(test[0], test[1])).toEqual(5);
    });

    it('Should return the div', function () {
        expect(calcular.div(test[0], test[1])).toEqual(2);
    });

    it('Should return the mult', function () {
        expect(calcular.mult(test[0], test[1])).toEqual(50);
=======
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
>>>>>>> c0b66836e96b9eaed2ef42673972fbd8f77bbb91
    });

});