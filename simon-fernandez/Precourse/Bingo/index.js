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
//shows the given array
function showArray(desiredArray) {
    var count=0
    var outArray="";
    var lineCounter=0;
    for (let i = 0; i < desiredArray.length; i++) {
        if (desiredArray[i].number=="X") {
            lineCounter++;
        }
        outArray+=desiredArray[i].number+" ";
    }
    if (lineCounter==5) {
        console.log("LINEA!");
    }
    console.log(outArray);
}
//ask the user if he wants to continue the game
function askTurn() {
    var question=prompt("Do you want with the next turn?\nYes\nNo").toUpperCase();
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
function randomNumber() {
    return Math.floor((Math.random() * 5) + 1);
}
//check if all fields has an "X"on them
function gameOverCheck(desiredArray) {
    var gameOverCounter=0;
    for (let i = 0; i < desiredArray.length; i++) {
        if (desiredArray[i].number=="X") {
            gameOverCounter++;
        }
    }
    if (gameOverCounter==5) {
        return true;
    }
}
function endGame() {
    var endGameCheck;
    while (!endGameCheck) {
        endGameCheck=prompt("Want to Play Again?\nYes\nNo").toUpperCase();
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
function bingo() {
    //insert the user name and save it
    var user;
    var turnCounter=0;
    var play;
    while(!user){
    user=prompt("Welcome please insert your name");
    }
    var bingoCard = [
        { number: 1, matched: false },
        { number: 2, matched: false },
        { number: 3, matched: false },
        { number: 4, matched: false },
        { number: 5, matched: false },
    ];
    showArray(bingoCard);
    play=askTurn();
    while (play) {
        turnCounter++;
        var randomNum=randomNumber();
        console.log(randomNum);
        for (let i = 0; i < bingoCard.length; i++) {
            if (bingoCard[i].number==randomNum) {
                bingoCard[i].number="X";
            }            
        }
        showArray(bingoCard);
        if (gameOverCheck(bingoCard)) {
            console.log("GAME OVER "+turnCounter);
            if (endGame()) {
                bingo();
            }
            else{
               break;
            }
        }
            play=askTurn();
    }
    console.log ("bye");
}
bingo();