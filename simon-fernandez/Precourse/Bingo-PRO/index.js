/*
BINGO GAME! 🎲🎰
Realiza un programa que simule un Bingo. Cuando se ejecute, pedirá el nombre del jugador y deberá guardarse. Durante el primer turno se mostrará un cartón con 15 números (excluyendo el 0 siempre), para pasar al siguiente turno el usuario deberá confirmar mediante confirm() visualizandose otro número, si coincide con alguno de los existentes en el cartón, cambiará por una "X" o un 0. El cartón se mostrará, al final de cada turno, con los cambios efectuados, indicando al usuario qué número se ha encontrado. El programa deberá preguntar al usuario al inicio de cada turno si desea continuar, en caso de que se continúe, seguirá el mismo patrón que hasta el momento.
Por supuesto, cuando todos los números de una misma línea sean "X", mostrará un mensaje "LÍNEA!", pero la ejecución seguirá, el juego solo acabará cuando todos los números estén a "X".
Cuando el juego concluya, deberá decirle al usuario en cuantos turnos se ha completado el cartón. Por último, deberá preguntar si desea volver a jugar.
Comenzar por una versión muy pequeña y básica nos hará tener un programa de principio a fin, es decir, que empieza, que acaba y haga lo que queramos a muy pequeña escala, una vez lo tengamos todo bien dividido podremos empezar a extenderlo tanto como queramos.
Si funciona con 5 números deberá funcionar con 15, no? 😁
Requisitos de la versión mínima:
Cartón con solo 5 números, sin necesidad de ser generados random. Solo necesitamos un número random cuando recorramos el cartón y veamos si hay alguna coincidencia. No necesitamos asegurarnos que el número random de cada turno no haya salido en turnos anteriores, recuerda que estamos en la mínima versión posible, eso ya lo solucionaremos. Si hay coincidencia, vamos a reemplazar el número por una 'X' y mostramos el cartón modificado
Separarlo todo en funciones, englobado en una función global llamada bingo(), tal que:
function()=> Generar Numero Random Bombo
function()=> Nuevo turno (Match carton[i] === randomNum)
function() => Preguntar Nuevo Turno

WorkFlow:
PRO
Cuando se muestre el carton, se preguntará al usuario si realmente quiere ese cartón o generar otro, si realmente quiere ese cartón, deberá responder "Yes" para proceder
Establece un sistema de puntos, en cuantos más turnos se complete el cartón, menos puntos (el sistema de puntos intégralo como quieras), por el contrario, a menos turnos, más puntos.
Antes de empezar el juego, muestra el sistema de puntos al usuario.
Ranking de usuarios (ordenado por puntos).
var bingoCard = [
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    //next line
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false }
];

*/
//FALTA extraer los valores del objeto
//scores muy bajos revisar los repetidos

//shows the given array
function showArray(desiredArray) {
    var count = 0
    var outArray = "";
    var lineCounter = 0;
    for (let i = 0; i < desiredArray.length; i++) {
        count++;
        if (desiredArray[i].matched == true) {
            lineCounter++;
        }
        if (lineCounter == 5) {
            if (linea == false) {
                console.log("LINEA!");
                linea = true;
            }
        }
        if (count == 5) {
            count = 0;
            lineCounter = 0;
            outArray += desiredArray[i].number + "\n";
        }
        else {
            outArray += desiredArray[i].number + " ";
        }

    }

    console.log(outArray);
}
//ask the user if he wants to continue the game
function askTurn() {
    //var question = prompt("Do you want with the next turn?\nYes\nNo").toUpperCase();
    var question="YES";
    switch (question) {
        case "YES":
            return true;
        case "NO":
            return false;
        default:
            askTurn();
            break;
    }
    return question;
}
//generates a random number
function randomNumber(repeatCheck) {

    var randomCheck = true;
    while (randomCheck) {
        randomCheck = false;
        var randomNumb = Math.floor((Math.random() * 100) + 1);
        for (let i = 0; i < repeatCheck.length; i++) {
            if (randomNumb == repeatCheck[i]) {
                randomCheck = true;
            }
        }
    }
    repeatCheck.push(randomNumb);
    return randomNumb;
}
//check if all fields has an "X"on them
function gameOverCheck(desiredArray) {
    var gameOverCounter = 0;
    for (let i = 0; i < desiredArray.length; i++) {
        if (desiredArray[i].number == "X") {
            gameOverCounter++;
        }
    }
    if (gameOverCounter == 15) {
        return true;
    }
}
//ask user if he ant to play again
function endGame() {
    userScore()
    var endGameCheck;
    while (!endGameCheck) {
        endGameCheck = prompt("Want to Play Again?\nYes\nNo").toUpperCase();
        switch (endGameCheck) {
            case "YES":
                return true;

            case "NO":
                return false
            default:
                endGame();
        }
    }
}
// collect the users scores
function userScore(turnCounter,user) {
    this.user=user;
    this.turnCounter=turnCounter;
}

function bingo() {
    //insert the user name and save it
    
    var user;
    var turnCounter = 0;
    var play;
    while (!user) {
        user = prompt("Welcome, this Game has a score system which you start with 100 points and each turn cost you 1 point you will see the final score when you finish the card.\n Please insert your name");
    }
    var repeatCheck = []
    var confirmCard = true;


    while (confirmCard) {
        repeatCheck = [];
        var bingoCard = [
            { number: randomNumber(repeatCheck), matched: false },
            { number: randomNumber(repeatCheck), matched: false },
            { number: randomNumber(repeatCheck), matched: false },
            { number: randomNumber(repeatCheck), matched: false },
            { number: randomNumber(repeatCheck), matched: false },
            //next line
            { number: randomNumber(repeatCheck), matched: false },
            { number: randomNumber(repeatCheck), matched: false },
            { number: randomNumber(repeatCheck), matched: false },
            { number: randomNumber(repeatCheck), matched: false },
            { number: randomNumber(repeatCheck), matched: false },
            //next line
            { number: randomNumber(repeatCheck), matched: false },
            { number: randomNumber(repeatCheck), matched: false },
            { number: randomNumber(repeatCheck), matched: false },
            { number: randomNumber(repeatCheck), matched: false },
            { number: randomNumber(repeatCheck), matched: false }
        ];
        showArray(bingoCard);
        var askUser = "";

        while (askUser == "") {
            askUser = prompt("Do you want this card?\nType yes to confirm\n other word or blank equals to NO").toUpperCase();
            if (askUser == "YES") {
                confirmCard = false;
            }

        }
    }
    repeatCheck = [];
    play = askTurn();
    while (play) {
        turnCounter++;
        var randomNum = randomNumber(repeatCheck);
        console.log(randomNum);
        for (let i = 0; i < bingoCard.length; i++) {
            if (bingoCard[i].number == randomNum) {
                bingoCard[i].number = "X";
                bingoCard[i].matched = true;
            }
        }
        showArray(bingoCard);
        if (gameOverCheck(bingoCard)) {
            console.log("GAME OVER " + turnCounter + " turns, your score is: "+(100-turnCounter));
            //userScore(turnCounter,user);
            console.log("test");
            debugger;
            score.push(new userScore(turnCounter,user));
            debugger;
            for (let j = 0; j < score.length; j++) {
                console.log(score[j].userScore.keys(user)+" "+100-score[j].userScore.keys(turnCounter));   
            }
            if (endGame()) {
                bingo();
            }
            else {
                break;
            }
        }
        play = askTurn();
    }
    console.log("bye");
}
var score=[];
var linea = false;
bingo();