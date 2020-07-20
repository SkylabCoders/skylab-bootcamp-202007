describe('Calc', function () {
  let calc;
  let screen;

  beforeEach(function () {
    calc = new Calc();
  });

  it('should create calculator', function () {
    expect(calc).toBeTruthy()
  });

  it('should return add operation', function () {
    expect(calc.add(2, 2)).toEqual(4)
  });

  it('should return subs operation', function () {
    expect(calc.subs(4, 2)).toEqual(2)
  });

  it('should return mult operation', function () {
    expect(calc.mult(4, 2)).toEqual(8)
  });

  it('should return div operation', function () {
    expect(calc.div(4, 2)).toEqual(2)
  });

  it('should delete screen', function () {
    expect(calc.del()).toEqual(0)
  });
});
