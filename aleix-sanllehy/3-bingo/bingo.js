var ranking = [];
function bingo() {
    var username;
    var isLine = false
    var isBingo = false;
    var startingScore = 90
    var turns = 0;
    var finalScore;
    var bingoCard = [];

    function filler() { console.log("\n"); }
    function endGame() { console.log("🖖Good bye!"); }
    function itsAMatch() { console.log("✔️IT'S A MATCH! The number " + newNumber + " is in the card."); }
    function notAMatch() { console.log("❌The number " + newNumber + " is not in the list. Stay frosty and keep trying."); }
    function callLine() { console.log("🔊HALT! That's a LINE! 🎉🎉🎉 You got all the numbers in a row."); }
    function callBingo() { console.log("🔊STOP RIGHT THERE! That's a B-I-N-G-O! 🎊🎊🎊 Winner winner chicken dinner!"); }

    // Si y solamente si el usuario introduce un nombre, le daremos la bienvenida y le pasaremos por pantalla las instrucciones del juego
    function greetings() {
        username = window.prompt("Welcome, stranger. Please enter your name:", "Your name here...");
        if (username === "" || username === null) {
            greetings();
        }
        else {
            console.log("👋Welcome, " + username + "! Let's play Bingo.");
            console.log("📜Rules are simple: you get a card with 15 random numbers in it from range 1 to 90.");
            console.log("📜As soon as the numbers are called, you can check if they match with any of the numbers of your card.");
            console.log("📜The less turns to match every number in your card, the more points you get up to a total of 90.");
            console.log("📜Good luck!");
        }
    }

    // Función que genera números enteros, según parámetro, entre el 1 y el 90 de forma aleatoria
    function rnJesus(maxNumbers) {
        var numbers = [];
        while (numbers.length < maxNumbers) {
            var i = Math.floor(Math.random() * 90) + 1;
            if (numbers.indexOf(i) === -1) {
                numbers.push(i);
            }
        }
        return numbers;
    }

    //Antes de crear el cartón, ya tenemos lista la secuencia de números que saldrán del bombo
    var numbers = rnJesus(90);
    var newNumber = numbers[0];

    // Esta función llama al generador de números, pasando 15 como parámetro, y los guarda en un array
    // Para introducir cada elemento del array en el cartón, se recorre bingoCard[i][j] y se añade siempre el primer elemento de la lista, el cual se irá borrando con el método shift
    function randomNumber(card) {
        var numbersToCard = rnJesus(15);
        for (i in card) {
            for (j in card[i]) {
                card[i][j].number = numbersToCard[0];
                numbersToCard.shift();
            }
        }
    }

    function bingoCardMaker() {
        var bingoCard = {
            row1: [
                { number: randomNumber, matched: false },
                { number: randomNumber, matched: false },
                { number: randomNumber, matched: false },
                { number: randomNumber, matched: false },
                { number: randomNumber, matched: false }],
            row2: [
                { number: randomNumber, matched: false },
                { number: randomNumber, matched: false },
                { number: randomNumber, matched: false },
                { number: randomNumber, matched: false },
                { number: randomNumber, matched: false }],
            row3: [
                { number: randomNumber, matched: false },
                { number: randomNumber, matched: false },
                { number: randomNumber, matched: false },
                { number: randomNumber, matched: false },
                { number: randomNumber, matched: false }]
        };
        randomNumber(bingoCard);
        return bingoCard;
    }

    // Esta función genera tres arrays, uno por cada fila de números del cartón, que devuelve por pantalla de forma amigable para el usuario
    function cardToArray(card) {
        for (i in card) {
            var arrayCard = [];
            for (j in card[i]) {
                arrayCard.push(card[i][j].number);
            }
            console.log(arrayCard);
        }
    }

    // Esta función crea un cartón, lo devuelve por pantalla de forma amigable y pregunta al usuario si quiere ese cartón o uno nuevo.
    function showBingoCard() {
        bingoCard = bingoCardMaker();
        cardToArray(bingoCard);
        console.log("Your brand new card. Click OK or press Enter if you want to play with this card. Any other answer will get you a new one.")
        var answer = confirm("Do you want to play with this card? Click OK or press Enter to proceed");
        if (!answer) {
            console.log("Ok then, let's make a new card...");
            filler();
            showBingoCard();
        }
        else {
            return bingoCard;
        }
    }

    // Función que actualiza los datos del objeto bingoCard. Por cada match, sustituye el número entero por una X y la condición matched pasa a true.
    function updateBingoCard(newNumber, card) {
        for (var i in card) {
            for (var j in card[i]) {
                if (card[i][j].number == newNumber) {
                    card[i][j].number = "X";
                    card[i][j].matched = true;
                    var isMatch = card[i][j].matched;
                    itsAMatch();
                }
            }
        }
        if (!isMatch) {
            notAMatch();
        }
    }

    // Función que revisa si hay línea. Solamente se ejecutará mientras la variable isLine sea false. Recorre cada array hasta que se encuentre un matched con la condición false, y pasa el siguiente.
    //En el momento en que encuentre todos true, isLine pasará a condición true y se llamará la línea por primera y última vez.
    function checkLine(line, card) {
        if (!line) {
            for (var i in card) {
                line = true;
                for (var j in card[i]) {
                    if (card[i][j].matched == false) {
                        line = false;
                        break;
                    }
                }
                if (line) {
                    callLine();
                    return line;
                }
            }
        }
        return line;
    }

    // Función que revisa si hay bingo. // Recorre todos los arrays comprobando la condición matched de cada uno de los objetos. Si el objeto tiene un matched false, se cierra el bucle.
    // En caso contrario, la variable isBingo pasa a ser true, y llamamos a bingo. Asumimos que, a cada llamada de la función, bingo será cierto hasta que se demuestre lo contrario por medio del bucle.
    function checkBingo(bingo, card) {
        bingo = true;
        for (var i in card) {
            for (var j in card[i]) {
                if (card[i][j].matched == false) {
                    bingo = false;
                    break;
                }
            }
        }
        if (bingo) {
            callBingo();
            return bingo;
        }
    };

    // La gestión de turnos es la siguiente: cogemos el primer número de la secuencia de numeros y lo quitamos de la lista. Anunciamos el turno y actualizamos el estado del cartón.
    function turnFlow(turns, card) {
        newNumber = numbers[0];
        numbers.shift();
        console.log("🔊Turn: " + turns + ". The next number is 🥁🥁🥁... " + newNumber);
        updateBingoCard(newNumber, card);
        cardToArray(card);
    }

    //Función que ordena el ranking
    function rankingDesc(a, b) {
        return b.score - a.score;
    }

    //Función de devuelve por pantalla el ranking
    function showRanking(ranking) { // Pruebo distintos métodos de separación de datos del ranking.
        console.log("🏆RANKING🏆");
        //console.log("#,PLAYER,SCORE");
        console.log("#\PLAYER\tSCORE");
        var rank = 1;
        var medal;
        for (i in ranking) {
            if (rank === 1) { medal = "🥇"; }
            else if (rank === 2) { medal = "🥈"; }
            else if (rank === 3) { medal = "🥉"; }
            else { medal = ""; }
            //console.log(+rank+','+ranking[i].user+','+ranking[i].score);
            console.log(rank + medal + '\t' + ranking[i].user + '\t' + ranking[i].score);
            rank++;
        }
    }

    // Cuando termine el juego, nos devuelve por pantalla la puntuación y el número de turnos. Nos pregunta también si queremos hacer una nueva partida.
    function gameOver(username, finalScore, turns) {
        var userScore = { user: username, score: finalScore };
        ranking.push(userScore);
        ranking = ranking.sort(rankingDesc);
        console.log("Your score is " + finalScore + " points, and lasted " + turns + " turns to match every number in the card.");
        showRanking(ranking);
        console.log("Care for a rematch? Click OK or press Enter to proceed. If not, press Esc to escape")
        var rematch = confirm("Care for a rematch? Click OK or press Enter to proceed. If not, press Esc to escape")
        filler();
        if (rematch) {
            bingo();
        }
        else {
            endGame();
        }
    }

    greetings();

    showBingoCard();
    // Mediante un while controlamos que la condición de isBingo siga siendo falsa. Mientras tanto, un confirm() nos permite avanzar los turnos o salir de la partida.
    // Tras cada turno y antes de empezar el siguiente, llamaremos a las funciones de comprobación de linea y bingo.
    while (!isBingo) {
        var answer = confirm("Continue? Click OK or press Enter to proceed. If not, press Esc to escape")
        if (answer) {
            turns++;
            turnFlow(turns, bingoCard, isLine, isBingo);
            isLine = checkLine(isLine, bingoCard);
            isBingo = checkBingo(isBingo, bingoCard);
            if (isBingo) { // En el momento en que sea bingo, restamos un turno sumado previamente. El resultado final, así como el numero de turnos y el nombre del usuario, se pasarán como parámetros a gameOver.;
                finalScore = startingScore - turns;
                gameOver(username, finalScore, turns);
                break;
            }
        }
        else {
            endGame();
            break;
        }
    }
}
bingo();