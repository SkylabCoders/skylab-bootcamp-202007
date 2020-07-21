describe('Calculator', function () {
  let caluclator;

  beforEach(function () {
    calculator = new Calculator();
  });

  it('should create', function () {
    expect(calculator).toBeTruthy();
  });

  it('should remain stable when initialState is null or undefined', function () {
    expect(calculator(undefined)).not.toBeDefined();
    expect(calculator()).not.toBeDefined();
  });

  it('should work when you order a sum operation', function () {
    expect(life.next(blinker.initialState)).toEqual(blinker.secondState);
  });
});
