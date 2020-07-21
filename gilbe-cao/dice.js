'use strict';

const getDiceRoll = function () {
  console.log('Rolling a dice...');
  return Math.ceil(6 * Math.random());
};

const firstDice = getDiceRoll();
const secondDice = getDiceRoll();

console.log(firstDice);
console.log(secondDice);
console.log(firstDice + secondDice);
