let screen = '';

function Calc() {
  function sum(num1, num2) {
    return num1 + num2;
  }
  function rest(num1, num2) {
    return num1 - num2;
  }
  function mult(num1, num2) {
    return num1 * num2;
  }
  function div(num1, num2) {
    return num1 / num2;
  }
  return { sum, rest, mult, div };
}

function getOperation() {}

function getNumber() {}

// Esta función guardará el valor actual de la pantalla
function saveNumber(number) {
  if (screen.length <= 10) {
    screen += number;
    document.getElementById('screen').innerHTML = screen;
  }
}
