describe('Calculator-html', function(){
    let calc;


    beforeEach(function (){
        calc = new Calc;
    });

    it('shoul create function', function(){
        expect(calc).toBeTruthy();
    });

    it('should return the sum', function(){
        expect(calc.sum(5,5)).toEqual(10);
    });

    it('should return the substract', function(){
        expect(calc.sub(20,5)).toEqual(15);
    });
    
    it('should return the multiplication', function(){
        expect(calc.mult(7,7)).toEqual(49);
    });
    
    it('should return the division', function(){
        expect(calc.div(25,5)).toEqual(5);
    });

    xit('should clean the screen', function(){
        expect(calc.reset()).toEqual(0);
    });
})