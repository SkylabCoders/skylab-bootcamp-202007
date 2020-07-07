//més endavant es pot intentar fer amb objectes

'use strict';

var turns;
var ballsPosibilities;
var cardPosibilities;
var card;
var firstLine;

function bingo(){
    newUser();
    var anotherGame = newGame();
    
    while(anotherGame){
        while(askNewTurn()){
            var ball = randomBagNumber();
            var completedRow = matchRow(ball, card);
            var bingo = matchCard(completedRow[1]);
            turns++;
            
            console.log(ball);
            //console.log(ballsPosibilities);
            console.log(card[0]);
            console.log(card[1]);
            console.log(card[2]);

            if(completedRow[0] && !firstLine){
                window.alert('¡¡¡LÍNEA!!!');
                firstLine = true;
            }

            if(bingo){
                window.alert('¡¡¡BINGO!!!');
                window.alert(`Ha completado el juego en ${turns} turnos`);
                break;
            }
        }    
    anotherGame = newGame();
    }
}

function newUser(){
    var userName = prompt('Bienvenid@, ¿cuál es su nombre?');
    console.log(userName);
}

function newGame(){
    var isNewGame = prompt('¿Desea empezar una nueva partida?: s/n');
    
    if(isNewGame === 's'){
        isNewGame = true;
        ballsPosibilities = [];
            for(var i = 1; i < 91; i++){
                ballsPosibilities.push(i);
            }
        cardPosibilities = [];
            for(var i = 1; i < 91; i++){
                cardPosibilities.push(i);
            }
        turns = 0;
        card = generateCardBoard();
        firstLine = false;
    } else {
        isNewGame = false;
        window.alert('¡Que pase un buen día!');
    }
    return isNewGame;
}

function generateRow(){
    var newLine = [];
    var random;
    var index = 0;

    for(var j = 0; j < 5; j++){
        random = cardPosibilities[Math.floor(Math.random() * cardPosibilities.length)];
        index = cardPosibilities.indexOf(random);
        cardPosibilities.splice(index, 1);
        newLine.push(random);
    }

    return newLine;
}

function generateCardBoard(){    
    var newCardBoard = [];
    
    for (var i = 0; i < 3; i++){
        newCardBoard.push(generateRow());
    }
    window.alert(`Su cartón tiene estas tres líneas:\n\n${newCardBoard[0]} \n${newCardBoard[1]} \n${newCardBoard[2]}\n\n¡Suerte!`);
    console.log(newCardBoard[0]);
    console.log(newCardBoard[1]);
    console.log(newCardBoard[2]);
    return newCardBoard;
}

function askNewTurn(){
    var carryOn = window.confirm('¿Movemos el bombo?');

    return carryOn;
}

function randomBagNumber(){
    var newBall;
    var index;
    
    newBall = ballsPosibilities[Math.floor(Math.random() * ballsPosibilities.length)];
    index = ballsPosibilities.indexOf(newBall);
    ballsPosibilities.splice(index, 1);

    return newBall;
}

function matchRow(ball, card){
    var match = false;
    for(var i = 0; i < card.length; i++){
        //presupongo que todas las lineas son igual de largas
        for(var j = 0; j < card[0].length; j++){
            if(ball === card[i][j]){
            window.alert(`¡Usted tiene el ${ball}!`);
            card[i][j] = 'X';
            if(card[i][0] == ['X'] && card[i][1] == ['X'] && card[i][2] == ['X'] && card[i][3] == ['X'] && card[i][4] == ['X']){
                    match = true;
                }
            }
        }
    }
    return [match, card];
}

function matchCard(card){
    for(var i =0; i < card.length; i++){
        //presupongo que todas las lineas son igual de largas
        for(var j =0; j < card[0].length; j++){
            if(card[i][j] != ['X']){
                return false;
            }
        }
    }
    return true;
}

bingo();