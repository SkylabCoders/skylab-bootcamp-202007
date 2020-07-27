describe('Calculator',function(){
    let calculator;

    beforeEach(function(){
        calculator = new Calculator();
    });

    it('should create', 
    function(){
        expect(calculator).toBeTruthy();
    })

    it('should work with input values',function(){
        expect(calculator.sumFn(firstInput,secondInput)).toEqual(sumResult);
    });

    it('should work with input values',function(){
        expect(calculator.restFn(firstInput,secondInput)).toEqual(restResult);
    });

    it('should work with input values',function(){
        expect(calculator.divisionFn(firstInput,secondInput)).toEqual(divisionResult);
    });

    it('should work with input values',function(){
        expect(calculator.multiplicationFn(firstInput,secondInput)).toEqual(multiplicationResult);
    });

});