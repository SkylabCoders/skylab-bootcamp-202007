"use strict";

const getRandom = function (diceSides) {
  const randomValue = Math.ceil(diceSides * Math.random());

  return randomValue;
};

function rollDice() {
  return;
}
const firstDice = getRandom(2 + 4);
const secondDice = getRandom(6);

console.log(firstDice);
console.log(secondDice);
console.log(firstDice + secondDice);
