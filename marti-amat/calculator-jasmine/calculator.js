"use strict";

/*let calculator = new Calculator();
calculator.onInit();
function Calculator() {
  this
  .value;
this.left_number;
this.right_number;
this.operator_clicked;
this.operatorSaved;
this.partial_result;*/
//this.onInit = function () {
let left_number = 0;
let right_number = 0;
let operator_clicked = "";
let operator_saved = "";
let partialResult = 0;
let value = 0;
//};
let operator_parameter = 0;
let previous_number = "";
let showBox_parameter = 0;

function writer(number) {
  if (showBox_parameter === 0) {
    previous_number = previous_number + number;
  } else {
    previous_number = number;
    showBox_parameter = 0;
  }
  return previous_number;
}

function paint_box(number) {
  document.getElementById("showBox").innerHTML = writer(number);
}
/* if (!operators == 0) {
      previous_number = number;
      document.getElementById("showBox").innerHTML = previous_number;
      operators = 0;
    }
  };*/

function operator(number1, number2, operator_1, operator_2) {
  switch (operator_1) {
    case "+":
      partialResult = number1 + number2;
      break;
    case "-":
      partialResult = number1 - number2;
      break;
    case "*":
      partialResult = number1 * number2;
      break;
    case "/":
      partialResult = number1 / number2;
      break;
    default:
      break;
  }

  operator_saved = operator_2;
  operator_clicked = "";
  left_number = partialResult;
  showBox_parameter = 1;
  return partialResult;
}

function operator_type_button(operator_clicked) {
  operator_parameter++;

  if (operator_parameter === 2) {
    right_number = +previous_number;
    console.log(
      `right number ${right_number}, left number ${left_number}, operator_saved ${operator_saved},new operator ${operator_clicked}`
    );
    document.getElementById("showBox").innerHTML = operator(
      left_number,
      right_number,
      operator_saved,
      operator_clicked
    );

    operator_parameter = 1;
  } else {
    left_number = +previous_number;
    operator_saved = operator_clicked;
    showBox_parameter = 1;
  }
}
//return{get_numbers,operator_type_button,operator,writer};
//}
