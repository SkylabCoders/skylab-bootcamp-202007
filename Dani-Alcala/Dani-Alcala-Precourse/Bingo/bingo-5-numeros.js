'use strict';

function bingo(){
    newUser();
    var anotherGame = newGame();
    
    while(anotherGame){
        var card = generateCardBoard();
        var i = 0;
        
        while(newGame && askNewTurn()){
            var ball = randomBagNumber();
            var bingo = match(ball, card);
            i++;

            if(bingo){
                window.alert(`Has completado el juego en ${i} turnos`);
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
    } else{
        isNewGame = false;
        window.alert('¡Que pases un buen día!');
    }
    return isNewGame;
}

function generateCardBoard(){
    var newCardBoard = [3, 5, 7, 8, 9];

    return newCardBoard;
}

function askNewTurn(){
    var carryOn = window.confirm('¿Movemos el bombo?');
     
    return carryOn;
}

function randomBagNumber(){
    var newBall = Math.round(Math.random() * (9 - 1) + 1);
    console.log(newBall);
    return newBall;
}

function match(ball, card){
    for(var i = 0; i < card.length; i++){
        if(ball === card[i]){
        card[i] = 'X';
        }
    }
    console.log(card);
    if(card[0] == ['X'] && card[1] == ['X'] && card[2] == ['X'] && card[3] == ['X'] && card[4] == ['X']){
        window.alert('¡¡¡BINGO!!!');

        return true;
    }
}

bingo();