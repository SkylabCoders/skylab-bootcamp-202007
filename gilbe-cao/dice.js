'use strict';

// getDiceRoll is a global variable because is declared out of every function at the highest level
// All scripts and functions on a web page can access it.
const getDiceRoll = function (diceSize) {
  console.log(`Rolling a dice with ${diceSize} sides...`);
  // Declare a local variable
  const result = Math.ceil(diceSize * Math.random());
  return result;
};

const showResult = function () {
  const firstDice = getDiceRoll(6);
  console.log(firstDice);

  const secondDice = getDiceRoll(6);
  console.log(secondDice);

  console.log('The sum is: ', firstDice + secondDice);
};

showResult();
