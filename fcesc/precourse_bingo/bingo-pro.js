/* Francesc Brugarolas - Skylab bootcamp 2020-07 - Precurs */
'use strict';

/* SESSION DATA */
const sessionData = {
    boardRange: 99,
    boardMaxRowSize: 5,
    boardRows: 3,
    boardValues: [],
    boardSimplifiedValues: new Set(),
    boardAccepted: false,
    bingoNumbers: [],
    bingoTurn: 1,
    bingoCurrentPoints: 0,
    bingoScreamed: false,
    lineScreamed: false,
    leaderboard: new Map()
};
const speedyUniqueRandoms = [];
/* --------------------------------------- */

/* CONSTANTS */
const yeses = new Set([1, true, 'SI', 'SÍ', 'Si', 'Sí', 'si', 'sí', 'yes', 'Yes', 'YES']);
const noes = new Set([0, false, 'NO', 'No', 'no']);
const values = new Set();
/* --------------------------------------- */

/* INIT FUNCTION */
function init(){
    printGameInfo();
    greetingsWelcome();
    playBingo();
}

/* --------------------------------------- */

/* CARDBOARD UTILS */
function cardboardGenerator(){
    for (let i = 1; i <= sessionData.boardRows; i++){
        cardboardRowGenerator(i);
    }
}
function cardboardRowGenerator(n){
    for (let i = 0; i < sessionData.boardMaxRowSize; i++){
        let num = uniqueRandomNumber();
        sessionData.boardValues.push({number: num, row: n, matched: false});
    }
}
function cardboardValidator(){
    cardboardGenerator();
    generateSimplifiedValues();
    let input = askUser();
    if (yeses.has(input)){
        sessionData.boardAccepted = true;
        return;
    } else if (noes.has(input)){
        return cardboardValidator();
    } 
}
function generateSimplifiedValues(){
    for (let el of sessionData.boardValues){
        sessionData.boardSimplifiedValues.add(el.number);
    }
}
function askUser(){
    let data = Array.from(sessionData.boardSimplifiedValues);
    let input = prompt(`Mostrant valors del cartró: \n${data}. \nAcceptes el cartró? `);
    if (yeses.has(input) || noes.has(input)){
        return input;
    } else {
        alert('Disculpa, no he entès la teva resposta.');
        return askUser();
    }
}
function cardboardShow(){
    let row = '';
    let currentRow = 1;
    let separator = '';
    for (let el of sessionData.boardValues){
        if (el.row !== currentRow){
            separator = '\n';
            currentRow = el.row;
        }
        if (sessionData.bingoNumbers.includes(el.number)){
            row = row + separator + 'XX';
        } else {
            let prefix;
            ( String(el.number) === 1 ) ? prefix = ' ' : prefix = '';
            row = row + separator + prefix + el.number;
        }
        separator = ' - ';
    }
    console.log(row);
}
/* --------------------------------------- */

/* UTILS */
function random(highLim, lowLim = 0){
    return Math.floor( (Math.random() * (highLim - lowLim) ) + lowLim);
}
function uniqueRandomNumber(){
    let num = random(sessionData.boardRange, 1)
    if (values.has(num)){
        return uniqueRandomNumber();
    } else {
        values.add(num);
        return num;
    }
}
function printGameInfo(){
    console.log(`%c\nAquest joc genera un cartró de 15 nombres, al principi de la partida pordràs acceptar el cartró o solicitar-ne un de nou.
        \nAl final de la partida obtrindràs la puntuació. Per completar el joc s'obtenen 90 punts, per completar cada línia 30 punts, màxim 150.
        \nPer cada torn que necessitis per completar el joc, es descomptarà 1 punt. Canviar el cartró no afecta a la puntuació.
        \nNomés es cantarà línia la primera vegada, i bingo una única vegada. Al final del joc veuràs la teva puntuació i posició al leaderboard.`, 'color:teal');
}
function greetingsWelcome(){
    sessionData.userName = prompt('Introdueix el teu nom: ');
    console.log(`Benvingut al joc del BINGO, ${sessionData.userName} !! 🎉`);
}
function greetingsFarewell(){
    console.log(`Gràcies per jugar amb nosaltres, ${sessionData.userName}. Fins a la propera!`);
}
/* --------------------------------------- */

/* GAME */
function playTurn(){
    sessionData.bingoTurn++;
    sessionData.bingoCurrentPoints--;
    let num = generateUniqueBingoNumber();
    sessionData.bingoNumbers.push(num);
    console.log(`%c EL NÚMERO ${num} !!`, 'color:blue');
    if (sessionData.boardSimplifiedValues.has(num)){
        for (let el of sessionData.boardValues){
            if (el.number === num){
                el.matched = true;
                break;
            }
        }
    }
    boardChecker();
    if (sessionData.bingoScreamed === false){
        cardboardShow();
        confirm('Següent torn');
        return playTurn();
    } else {
        return;
    }
}
function generateUniqueBingoNumber(){
    return speedyUniqueRandoms.shift();
}
function rowChecker(rowNumber){
    let rowCompleted;
    for (let el of sessionData.boardValues){
        if (el.row === rowNumber){
            if (el.matched === false){ rowCompleted = false;}
        }
    }
    if (rowCompleted === undefined){ rowCompleted = true;}
    return rowCompleted;
}
function boardChecker(){
    let completion = [];
    for (let i = 1; i < sessionData.boardRows; i++){
        let name = 'row_' + i;
        let tmp = rowChecker(i);
        completion.push(tmp);
        if (tmp === true){
            if (sessionData.lineScreamed === false){ 
                sessionData.lineScreamed = true;
                sessionData.bingoCurrentPoints += 30;
                console.log('%c -> LINIA !!! 🎉🎉🎉', 'color:red');
            }
        }
    }
    if (!completion.includes(false)){
        sessionData.bingoScreamed = true;
        sessionData.bingoCurrentPoints += 90;
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();
        let formatedDate = day + '-' + month + '-' + year;
        sessionData.leaderboard.set(sessionData.bingoCurrentPoints, [sessionData.userName, sessionData.bingoCurrentPoints, formatedDate]);
        console.log('%c -> BINGO !!! 🎉🎉🎉', 'color:red');
        console.log(`%cHas completat el joc en ${sessionData.bingoTurn} torns. Mostrant el leaderboard:`, 'color:teal');
        leaderboardShow();
    }
}
function generateUniqueRandoms(){
    let initialSet = [];
    for (let i = 1; i <= sessionData.boardRange; i++){
        initialSet.push(i);
    }
    speedyUniqueRandoms.push(...shuffleArray(initialSet));
}
function shuffleArray(array) {
    // Durstenfeld shuffle algorithm
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
function playBingo(){
    generateUniqueRandoms();
    cardboardValidator();
    cardboardShow();
    playTurn();
    leaderboardShow();
    replay();
}
function replay(){
    let input = prompt('Vols tornar a jugar?');
    if (yeses.has(input)){ 
        //reinitialize game variables
        sessionData.boardAccepted = false;
        sessionData.bingoTurn = 1;
        sessionData.bingoCurrentPoints = 0;
        sessionData.bingoScreamed = false;
        sessionData.lineScreamed = false;
        sessionData.bingoNumbers = [];
        sessionData.boardValues = [];
        sessionData.boardSimplifiedValues.clear();
        greetingsWelcome();
        playBingo();
    } else if (!noes.has(input)){
        alert('Disculpa, no he entès la teva resposta.');
        return replay();
    } else {
        greetingsFarewell();
    }
}
/* --------------------------------------- */

/* LEADERBOARD */
function leaderboardShow(){
    let sorted = new Map([...sessionData.leaderboard.entries()].sort().reverse());
    for (let el of sorted){
        console.log(el[1]);
    }
}
/* --------------------------------------- */

init();