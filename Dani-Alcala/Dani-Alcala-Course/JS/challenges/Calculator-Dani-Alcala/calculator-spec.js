describe('Calculator', function () {
    let calculator;
  
    beforeEach(function () {
      calculator = new Calculator();
    });
  
    it('should create', function () {
      expect(calculator).toBeTruthy();
    });

    it('should sum', function () {
      expect(calculator.sum(operations.input)).toEqual(operations.sums);
    });

    it('should subs', function () {
        expect(calculator.subs(operations.input)).toEqual(operations.sub);
      });

    it('should do the product', function () {
    expect(calculator.product(operations.input)).toEqual(operations.prod);
    });

    it('should divide', function () {
    expect(calculator.division(operations.input)).toEqual(operations.div);
    });  
  });
  