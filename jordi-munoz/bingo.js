
var bingoCard = [];
var countTurns = 0; 
var checkRandom = [];
var checkRandomBola = [];

//contador para que LINEA solo salga una vez
var linea = 0; 
var linea1 = [];
var linea2 = [];
var linea3 = [];
var linea1Numb = [];
var linea2Numb = [];
var linea3Numb = [];
var playerName = '';

bingo();
var again = confirm('¿Desea volver a jugar?');
    if (again == true) {
        checkRandomBola = [];
        bingo();
    }

//crear cartón aleatorio    
function creaCarta() {
    for (let i = 0; i < 15; i++) { 
        var randomCardNum = makerNumber();
        bingoCard.push({number: randomCardNum, matched: false}) 
    }
    linea1 = bingoCard.slice(0, 5);
    linea2 = bingoCard.slice(5, 10);
    linea3 = bingoCard.slice(10, 16);

    for (let i = 0; i < linea1.length; i++) {
        linea1Numb.push(linea1[i].number);
    }
    for (let i = 0; i < linea2.length; i++) {
        linea2Numb.push(linea2[i].number);
    }
    for (let i = 0; i < linea3.length; i++) {
        linea3Numb.push(linea3[i].number);
    }
    console.log(linea1Numb.join(' - '));
    console.log(linea2Numb.join(' - '));
    console.log(linea3Numb.join(' - '));
}

function bingo() {
    countTurns = 0;
    if (!playerName) {
        playerName = prompt('Introduzca su nombre:');
        if (playerName == null) {
            return false;
        }
    }    
        
    do {
        bingoCard = [];
        linea1Numb = [];
        linea2Numb = [];
        linea3Numb = [];
        checkRandom = [];
        var cardOk = false;
        creaCarta();
       
        cardOk = confirm('¿Quiere mantener este cartón?');
    } while (!cardOk);
    
    askTurn();
    console.log(`El juego ha terminado con ${countTurns} turnos.`)
}

function askTurn() {
    var finishGame = 'BINGO!';
    var countMatch = 0;

    //comprobar si todo está match
    for (let i = 0; i < bingoCard.length; i++) { 
        if (bingoCard[i].matched === true) {
            countMatch++;
        }
    }
    if (countMatch == bingoCard.length) {
        console.log(finishGame);
    } else {
        var newNum = confirm('¿Quiere sacar un número?');
        if (newNum === true) {
            countTurns++
            newTurn();
        } else {
            console.log(finishGame); 
        }
    }
}

function newTurn() {
    linea1Numb = [];
    linea2Numb = [];
    linea3Numb = [];
    var countLinea1 = 0;
    var countLinea2 = 0;
    var countLinea3 = 0;
    var ranTurnNum = makerNumberBola();
    var matchNumber = false;

    console.log('El ' + ranTurnNum + '!!');

    //buscar match
    for (let i = 0; i < bingoCard.length; i++) { 
        if (bingoCard[i].number === ranTurnNum) {
            bingoCard[i].matched = true;
            matchNumber = true;
        }
    }

    //mostrar cartón modificado y comprobar si líneas están completas
    if (matchNumber == true) {
        console.log('El número acertante es el ' + ranTurnNum);

        for (let i = 0; i < linea1.length; i++) { 
            if (linea1[i].matched === true) {
                linea1[i].number = 'X';
                countLinea1++;
            }
            linea1Numb.push(linea1[i].number);
        }
        for (let i = 0; i < linea2.length; i++) { 
            if (linea2[i].matched === true) {
                linea2[i].number = 'X';               
                countLinea2++;
            }
            linea2Numb.push(linea2[i].number);
        }
        for (let i = 0; i < linea3.length; i++) { 
            if (linea3[i].matched === true) {
                linea3[i].number = 'X';                
                countLinea3++;
            }
            linea3Numb.push(linea3[i].number);
        }
        console.log(linea1Numb.join(' - '));
        console.log(linea2Numb.join(' - '));
        console.log(linea3Numb.join(' - '));

        if ((countLinea1 == linea1.length || countLinea2 == linea2.length || countLinea3 == linea3.length)
            && (linea === 0)) {
            console.log('LÍNEA!');
            linea++;
        }
    } 

    askTurn();
} 
//generador número random para carta
var randomNumber = 0;
function makerNumber() { 
    do {
        randomNumber = Math.floor((Math.random() * 30) + 1)
    } while (checkNum(checkRandom, randomNumber));
    checkRandom.push(randomNumber);
    return randomNumber;
}
//generador número random para bola
var randomNumberBola = 0;
function makerNumberBola() { 
    do {
        randomNumberBola = Math.floor((Math.random() * 30) + 1)
    } while (checkNum(checkRandomBola, randomNumberBola));
    checkRandomBola.push(randomNumberBola);
    return randomNumberBola;
}
//chequeo de la función de número random para carta y bola
function checkNum(num1, num2) { 
    for (let i = 0; i < num1.length; i++) {
        if (num1[i] == num2) {
            return true;
        }
    }
}