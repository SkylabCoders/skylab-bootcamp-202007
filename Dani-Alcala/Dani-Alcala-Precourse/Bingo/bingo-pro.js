//més endavant es pot intentar fer amb més objectes, no només el ranking

'use strict';

var turns;
var pointsSystem;
var points;
var ballsPosibilities;
var cardPosibilities;
var card;
var firstLine;
var userName;
var ranking = [];

pointsSystem = [];
    for(var i = 90; i > 0; i--){
        pointsSystem.push(i);
}

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
                
                points = pointsSystem.indexOf(turns) + 1;

                if(points === 1){
                    window.alert(`Ha completado el juego en ${turns} turnos, sumando así 1 punto.`);
                } else{
                    window.alert(`Ha completado el juego en ${turns} turnos, sumando así ${points} puntos. ¡Enhorabuena!`);
                }
                
                showRanking();

                break;
            }
        }    
    anotherGame = newGame();
    }
}

function newUser(){
    userName = prompt('Bienvenid@, ¿cuál es su nombre?');
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
        firstLine = false;
        var goodCard;
        
        do{
            card = generateCardBoard();
            console.log(card[0]);
            console.log(card[1]);
            console.log(card[2]);
            goodCard = prompt(`Su cartón tiene estas tres líneas:\n\n${card[0]} \n${card[1]} \n${card[2]}\n\n¿Desea cambiar de cartón?: s/n`);     
        } while (goodCard === 's')

        window.alert('El sistema de puntuación es el siguiente:\n\nSi canta bingo en 90 turnos obtiene 1 punto. Si lo canta en 89 turnos, 2 puntos, y así sucesivamente.\n\nEl máximo posible son 76 puntos, correspondientes a cantar bingo en tan solo 15 turnos.');

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

function showRanking(){
    var result = {user: userName, score: points};
    ranking.push(result);
    ranking.sort(function(a, b){
        var keyA = a.score;
        var keyB = b.score;
        if (keyA < keyB) return 1;
        if (keyA > keyB) return -1;
        return 0;
        })

    console.table(ranking);
}

bingo();