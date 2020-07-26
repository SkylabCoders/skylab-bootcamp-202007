"use strict";

function DiceGame() {
    const GLOBAL_MESSAGE = "Calculating random value...";
    let firstDice;
    let secondDice;

    const getRandomNumber = function (diceSides) {
        console.log(GLOBAL_MESSAGE);
        const randomValue = Math.ceil(diceSides * Math.random())
        return randomValue;
    };

    function rollDice() {
        firstDice = getRandomNumber(2 + 4);
        console.log(firstDice);

        secondDice = getRandomNumber(6);
        console.log(secondDice);
        console.log(firstDice + secondDice)
    };
    return {
        play: rollDice
    };

}
const newGame = new DiceGame();

newGame.play()

//tenemos un objeto global que retorna la ejecución de play que apunta a rollDice.