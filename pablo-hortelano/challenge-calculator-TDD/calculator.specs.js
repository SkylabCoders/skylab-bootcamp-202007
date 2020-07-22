describe("Calculator", function () {
  let state;
  beforeEach(function () {
    state = new CreateCalculator();
  });

  it("should create a calculator object", function () {
    expect(state).toBeTruthy();
  });

  it("Nums function must convert state toa string", function () {
    expect(state.result).toBeTruthy();
  });

  it("Nums function must convert state toa string", function () {
    expect(state.result).toBeTruthy();
  });
});
