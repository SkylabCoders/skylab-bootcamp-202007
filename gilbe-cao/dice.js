'use strict';

const getDiceRoll = function (diceSize) {
  console.log(`Rolling a dice with ${diceSize} sides...`);
  return Math.ceil(diceSize * Math.random());
};

const firstDice = getDiceRoll(6);
console.log(firstDice);

const secondDice = getDiceRoll(6);
console.log(secondDice);

console.log('The sum is: ', firstDice + secondDice);
