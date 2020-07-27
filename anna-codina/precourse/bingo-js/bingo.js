let ranking = [];
function bingo() {
    const namePetition = 'Hola ¿Cómo te llamas?';
    const welcome = 'Bien venido ';
    const welcomeEnd = ', vamos ajugar al bingo. Cada turno turno extra que te tome completar el bingo a partir de los 15 turnos restará un putno a tu puntuación total. Siendo 100 tu máxima puntuación. ¡Buena suerte!';
    const newTurn = '¿Quiere jugar otro turno?';
    const newGame = '¿Quieres jugar otra partida?';
    let userName = prompt(namePetition);
    console.log(welcome + userName + welcomeEnd);
    do {
        var totalTurns = 1;
        var lineChecker = false;
        var initialPoints = 115;
        var points;
        var restNumbers = [];
        var bingoChecker = false;
        var actualBingoCard = bingoCardgenerator();
        restNumbersGeneartor(99, restNumbers);
        do {
            turn(totalTurns, restNumbers, actualBingoCard);
            points = initialPoints - totalTurns;
            lineChecker = lineDone(lineChecker, actualBingoCard);
            bingoChecker = bingoDone(bingoChecker, actualBingoCard);
            totalTurns++
        } while (!bingoChecker && confirm(newTurn));
        if (bingoChecker) {
            finishGame(userName, points, totalTurns);
        }
    } while (confirm(newGame));
}


// funcion encargada de generar todos los numeros aleatorios necesarios para el juego.
function randomNumber(num) {
    let actualnumber = Math.random() * num;
    actualnumber = Math.floor(actualnumber);

    return actualnumber;
}

// funcion que crea de forma aleatoria los numeros que saldran en el carton llamando la funcion randomNumber. Para evitar que nos salga el 0 buscaremos un numero entre 00 a 98 y le sumaremos 1.
function bingoCardgenerator() {
    var bingoCard;
    do {
        var posiblesNumeros = [];
        restNumbersGeneartor(99, posiblesNumeros) // Para evitar que salgan numeros repetidos en el cartón.
        bingoCard = {
            linea1: [
                { number: nuevoNumeroBombo(posiblesNumeros), matched: false },
                { number: nuevoNumeroBombo(posiblesNumeros), matched: false },
                { number: nuevoNumeroBombo(posiblesNumeros), matched: false },
                { number: nuevoNumeroBombo(posiblesNumeros), matched: false },
                { number: nuevoNumeroBombo(posiblesNumeros), matched: false },
            ],
            linea2: [
                { number: nuevoNumeroBombo(posiblesNumeros), matched: false },
                { number: nuevoNumeroBombo(posiblesNumeros), matched: false },
                { number: nuevoNumeroBombo(posiblesNumeros), matched: false },
                { number: nuevoNumeroBombo(posiblesNumeros), matched: false },
                { number: nuevoNumeroBombo(posiblesNumeros), matched: false },
            ],
            linea3: [
                { number: nuevoNumeroBombo(posiblesNumeros), matched: false },
                { number: nuevoNumeroBombo(posiblesNumeros), matched: false },
                { number: nuevoNumeroBombo(posiblesNumeros), matched: false },
                { number: nuevoNumeroBombo(posiblesNumeros), matched: false },
                { number: nuevoNumeroBombo(posiblesNumeros), matched: false },
            ],
        }
        bingoCardUserFriendly(bingoCard);
        var answer = confirm('¿Quieres jugar con este cartón?');
    } while (!answer);
    return bingoCard;
}

// Adapta de forma amigable para el usuario el cartón de juego y lo imprime en cosola
function bingoCardUserFriendly(card) {
    console.log('Tu cartón:');
    for (let i in card) {
        var friendlycard = [];
        for (let j in card[i]) {
            friendlycard.push(card[i][j].number);
        }
        console.log(friendlycard)
    }
}

// Generaremos un array en el que introduciremos todos los numeros que queremos dentro del bombo virtual. Evitando así que nos salgan numeros repetidos y a la vez tener bucles infinitos. 
function restNumbersGeneartor(numeroTotal, array) {
    var i = 1
    do {
        array.push(i);
        i++;
    } while (i <= numeroTotal);
}

// Gestor de turnos:
function turn(numTurns, arraynum, card) {
    var numActual = nuevoNumeroBombo(arraynum);
    actualizadorBingoCard(numActual, card);
    bingoCardUserFriendly(card);
    console.log(numTurns);
}

// Generador del numero que saldra en cada turno del bombo virutal.
function nuevoNumeroBombo(arrayNumbers) {
    var numRandom = randomNumber(arrayNumbers.length);
    var numBombo = arrayNumbers[numRandom];
    arrayNumbers.splice(numRandom, 1);
    return numBombo;
}
// Actualizador del carton de bingo después de cada nuevo numero.
function actualizadorBingoCard(newNumber, card) {
    var indice = false;
    for (var i in card) {
        // comprobaremos si existe el numero en el cartón
        for (var j in card[i]) {
            if (card[i][j].number == newNumber) {
                indice = true;
                card[i][j].number = 'X';
                card[i][j].matched = true;
            }
        }
    }
    if (indice) {
        console.log('¡El numero ' + newNumber + ' se encuentra en tu cartón!');
    } else {
        console.log('El numero ' + newNumber + ' no se encuentra en tu cartón.');
    }
}

// comprobador de si se ha hecho linea y en caso de hacerlo si se ha cantado con anterioridad o no.
function lineDone(lineCheckerGlobal, card) {
    const lineString = '¡LINEA!'
    if (!lineCheckerGlobal) {
        for (var i in card) {
            var indice = true;
            for (var j in card[i]) {
                if (card[i][j].matched == false) {
                    indice = false;
                    break;
                }
            }
            if (indice) {
                console.log(lineString);
                lineCheckerGlobal = true;
                return lineCheckerGlobal;
            }
        }
    }
    return lineCheckerGlobal;
}
// comprobador de si se ha hecho bingo o no.
function bingoDone(bingoCheckerGlobal, card) {
    var indice = true;
    for (var i in card) {
        for (var j in card[i]) {
            if (card[i][j].matched == false) {
                indice = false;
                break;
            }
        }
    }
    if (indice) {
        console.log('¡BINGO!');
        bingoCardUserFriendly();
        bingoCheckerGlobal = true;
        return bingoCheckerGlobal;
    }
}

// fin partida
function finishGame(usuario, puntos, turnos) {
    var resultados = { user: usuario, score: puntos };
    ranking.push(resultados);
    ranking = ranking.sort(ordenadoDescendente);
    var posicion = ranking.indexOf(resultados);
    posicion++;
    console.log('Su puntuación es de ' + puntos + ' puntos, ha tardado ' + turnos + ' turnos en terminar el cartón y su ranking es: ' + posicion + 'º');
    mostrarRanking(ranking);
}
// Funcion de ordenado del array de rankings de forma que la mayor puntuación quede en primer lugar y se ordene de forma descendente.
function ordenadoDescendente(user1, user2,) {
    if (user1.score > user2.score) {
        return -1;
    } else if (user1.score < user2.score) {
        return 1;
    } else {
        return 0;
    }
}
function mostrarRanking(arrayRanking) {
    var posicionUsuario = 1;
    for (let i in arrayRanking) {
        console.log(posicionUsuario + '-' + 'Usuario: ' + arrayRanking[i].user + ' points:' + arrayRanking[i].score);
        posicionUsuario++;
    }
}