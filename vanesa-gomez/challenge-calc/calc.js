let screen = '';
let acButton = document.getElementById('ac');

let numberZeroButton = document.getElementById('number-0');
let numberOneButton = document.getElementById('number-1');
let numberTwoButton = document.getElementById('number-2');
let numberThreeButton = document.getElementById('number-3');
let numberFourButton = document.getElementById('number-4');
let numberFiveButton = document.getElementById('number-5');
let numberSixButton = document.getElementById('number-6');
let numberSevenButton = document.getElementById('number-7');
let numberEightButton = document.getElementById('number-8');
let numberNineButton = document.getElementById('number-9');

let divideButton = document.getElementById('divide');
let timesButton = document.getElementById('mult');
let minusButton = document.getElementById('rest');
let plusButton = document.getElementById('sum');
let equalButton = document.getElementById('equal');
let pointButton = document.getElementById('point');

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

// Esta función guardará el valor actual de la pantalla
function saveNumber(number) {
  if (screen.length <= 10) {
    screen += number;
    document.getElementById('screen').innerHTML = screen;
  }
}

// Esta funcion borra todo lo que se vea en la pantalla
function clearOne() {
  screenArray = [];
  document.getElementById('screen').innerHTML = 0;
}

numberZeroButton.onclick = function () {
  saveNumber(0);
};
numberOneButton.onclick = function () {
  saveNumber(1);
};
numberTwoButton.onclick = function () {
  saveNumber(2);
};
numberThreeButton.onclick = function () {
  saveNumber(3);
};
numberFourButton.onclick = function () {
  saveNumber(4);
};
numberFiveButton.onclick = function () {
  saveNumber(5);
};
numberSixButton.onclick = function () {
  saveNumber(6);
};
numberSevenButton.onclick = function () {
  saveNumber(7);
};
numberEightButton.onclick = function () {
  saveNumber(8);
};
numberNineButton.onclick = function () {
  saveNumber(9);
};
pointButton.onclick = function () {
  for (let i = 0; i < screen.length; i++) {
    if (screen[i] === '.') {
      return false;
    }
  }
  if (screen === '') {
    return false;
  } else {
    screen += '.';
    document.getElementById('screen').innerHTML = screen;
  }
};
acButton.onclick = function () {
  screen = '';
  accumulator = 0;
  lastOp = '';
  start = true;
  document.getElementById('screen').innerHTML = 0;
};

// funciones que realizarán las operaciones
