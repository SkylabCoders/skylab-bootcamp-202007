'use strict';

let currentNumber = '';
let firstNumber = '';
let secondNumber = '';
const initialNumber = 0;
let operator = '';

const screen = document.getElementById('screen');

const buttonReset = document.getElementById('reset');
buttonReset.addEventListener('click', () => {
  if (firstNumber !== undefined) {
    secondNumber = '';
    currentNumber = secondNumber;
    printOnScreen();
  } else {
    firstNumber = '';
    currentNumber = firstNumber;
    printOnScreen();
  }
});
const buttonRestart = document.getElementById('restart');
buttonRestart.addEventListener('click', () => {
  firstNumber = '';
  currentNumber = firstNumber;
  printOnScreen();
});
const buttonOne = document.getElementById('one');
buttonOne.addEventListener('click', () => {
  return getNumber(buttonOne.innerHTML);
});
const buttonTwo = document.getElementById('two');
buttonTwo.addEventListener('click', () => {
  return getNumber(buttonTwo.innerHTML);
});
const buttonThree = document.getElementById('three');
buttonThree.addEventListener('click', () => {
  return getNumber(buttonThree.innerHTML);
});
const buttonFour = document.getElementById('four');
buttonFour.addEventListener('click', () => {
  return getNumber(buttonFour.innerHTML);
});
const buttonFive = document.getElementById('five');
buttonFive.addEventListener('click', () => {
  return getNumber(buttonFive.innerHTML);
});
const buttonSix = document.getElementById('six');
buttonSix.addEventListener('click', () => {
  return getNumber(buttonSix.innerHTML);
});
const buttonSeven = document.getElementById('seven');
buttonSeven.addEventListener('click', () => {
  return getNumber(buttonSeven.innerHTML);
});
const buttonEight = document.getElementById('eight');
buttonEight.addEventListener('click', () => {
  return getNumber(buttonEight.innerHTML);
});
const buttonNine = document.getElementById('nine');
buttonNine.addEventListener('click', () => {
  return getNumber(buttonNine.innerHTML);
});
const buttonZero = document.getElementById('zero');
buttonZero.addEventListener('click', () => {
  return getNumber(buttonZero.innerHTML);
});
const buttonComa = document.getElementById('coma');
buttonComa.addEventListener('click', () => {
  return getNumber(buttonComa.innerHTML);
});
const buttonDivision = document.getElementById('division');
buttonDivision.addEventListener('click', () => {
  firstNumber = currentNumber;
  currentNumber = '';
  printOnScreen();
  operator = 'division';
});
const buttonMult = document.getElementById('mult');
buttonMult.addEventListener('click', () => {
  firstNumber = currentNumber;
  currentNumber = '';
  printOnScreen();
  operator = 'mult';
});
const buttonRest = document.getElementById('minus');
buttonRest.addEventListener('click', () => {
  firstNumber = currentNumber;
  currentNumber = '';
  printOnScreen();
  operator = 'minus';
});
const buttonPlus = document.getElementById('plus');
buttonPlus.addEventListener('click', () => {
  firstNumber = currentNumber;
  currentNumber = '';
  printOnScreen();
  operator = 'plus';
});
const buttonEqual = document.getElementById('equal');
buttonEqual.addEventListener('click', () => {
  calcular();
});

function getNumber(num) {
  currentNumber = currentNumber + num;
  printOnScreen();
}

function printOnScreen() {
  screen.innerHTML = currentNumber;
}

function calcular() {
  if (!firstNumber || !secondNumber) {
    return;
  }
  secondNumber = currentNumber;
  let result;
  switch (operator) {
    case 'plus':
      result = Number(firstNumber) + Number(secondNumber);
      break;
    case 'minus':
      result = Number(firstNumber) - Number(secondNumber);
      break;
    case 'mult':
      result = Number(firstNumber) * Number(secondNumber);
      break;
    case 'division':
      result = Number(firstNumber) / Number(secondNumber);
      break;
  }
  currentNumber = result;
  printOnScreen();
}
