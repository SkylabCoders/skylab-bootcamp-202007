describe("Calculator", function () {
  it("should add the number pressed to the previous number in text format", function () {
    let number = "5";
    showBox_parameter = 0;
    previous_number = "5";

    let result = writer(number);
    expect(result).toEqual("55");
  });
  it("should prevoius_number to be '' when showBox_parameter=1", function () {
    showBox_parameter = 1;
    let number = "5";
    let result = writer(number);
    expect(result).toEqual("5");
  });
  it("should return the result of the operation sended", function () {
    left_number = 5;
    right_number = 5;
    operator_saved = "+";
    new_operator = "+";
    let result = operator(
      left_number,
      right_number,
      operator_saved,
      new_operator
    );
    expect(result).toEqual(10);
  });
});
