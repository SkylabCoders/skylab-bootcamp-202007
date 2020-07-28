describe('Calc', function () {
  let calc;

  beforeEach(function () {
    calc = new Calc();
  });

  it('should create', function () {
    expect(calc).toBeTruthy();
  });

  it('should return the sum', function () {
    expect(calc.sum(5, 2)).toEqual(7);
  });

  it('should return the rest', function () {
    expect(calc.rest(5, 2)).toEqual(3);
  });

  it('should return the mult', function () {
    expect(calc.mult(2, 3)).toEqual(6);
  });

  it('should return the div', function () {
    expect(calc.div(10, 5)).toEqual(2);
  });

  it('should clear all the screen', function () {
    expect(clearOne).toBeTruthy();
  });
});
