function bingo(){
    userName = prompt('Hola ¿Cómo te llamas?', 'Escriba su nombre aquí.');
    console.log('Bien venido ' + userName + ', vamos ajugar al bingo. Cada turno turno extra que te tome completar el bingo a partir de los 15 turnos restará un putno a tu puntuación total. Siendo 100 tu máxima puntuación. ¡Buena suerte!');
    do { // controlamos el flujo de acciones durante la partida
        var totalTurns = 1;
        var comprobadorLinea = false;
        var puntuacionInicial = 115;
        var puntuacion;
        var numerosRestantes = [];
        var comprobadorBingo = false;
        var actualBingoCard = bingoCardgenerator(); // Almacenaremos el cartón actual.
        generarNumRestantes(99, numerosRestantes); // Almacenamos los nº quwe no han salido durante la partida
        do {
            turn(totalTurns, numerosRestantes, actualBingoCard, comprobadorLinea, comprobadorBingo);
            puntuacion = puntuacionInicial-totalTurns;
            comprobadorLinea = cantarLinea(comprobadorLinea, actualBingoCard);
            comprobadorBingo = cantarBingo(comprobadorBingo, actualBingoCard);
            totalTurns++
        } while (!comprobadorBingo && confirm('¿Quiere jugar otro turno?'));
// si se cumplen las caracteristicas necesarias se llegará al final de la partida.
        if (comprobadorBingo){
        finPartida(userName, puntuacion, totalTurns);
        }
    } while (confirm('¿Quieres jugar otra partida?'));
}

var ranking = [];

// funcion encargada de generar todos los numeros aleatorios necesarios para el juego.
function randomNumber(num){
    var numero = Math.random()*num;
    numero = Math.floor(numero);

    return numero;
};

// funcion que crea de forma aleatoria los numeros que saldran en el carton llamando la funcion randomNumber. Para evitar que nos salga el 0 buscaremos un numero entre 00 a 98 y le sumaremos 1.
function bingoCardgenerator(){
    var bingoCard;
    do {
        var posiblesNumeros = [];
        generarNumRestantes(99, posiblesNumeros) // Para evitar que salgan numeros repetidos en el cartón.
        bingoCard = {
            linea1: [
                { number: nuevoNumeroBombo(posiblesNumeros), matched: false },
                { number: nuevoNumeroBombo(posiblesNumeros), matched: false },
                { number: nuevoNumeroBombo(posiblesNumeros), matched: false },
                { number: nuevoNumeroBombo(posiblesNumeros), matched: false },
                { number: nuevoNumeroBombo(posiblesNumeros), matched: false },
            ],
            linea2:[
                { number: nuevoNumeroBombo(posiblesNumeros), matched: false },
                { number: nuevoNumeroBombo(posiblesNumeros), matched: false },
                { number: nuevoNumeroBombo(posiblesNumeros), matched: false },
                { number: nuevoNumeroBombo(posiblesNumeros), matched: false },
                { number: nuevoNumeroBombo(posiblesNumeros), matched: false },
            ],
            linea3:[
                { number: nuevoNumeroBombo(posiblesNumeros), matched: false },
                { number: nuevoNumeroBombo(posiblesNumeros), matched: false },
                { number: nuevoNumeroBombo(posiblesNumeros), matched: false },
                { number: nuevoNumeroBombo(posiblesNumeros), matched: false },
                { number: nuevoNumeroBombo(posiblesNumeros), matched: false },
            ],
        }
        bingoCardUserFriendly(bingoCard);
        var respuesta = prompt('¿Quieres jugar con este cartón?', 'Yes, No');
        respuesta = respuesta.toLocaleUpperCase();
    } while (respuesta !== 'YES');
    return bingoCard;
};

// Adapta de forma amigable para el usuario el cartón de juego y lo imprime en cosola
function bingoCardUserFriendly(card){
    console.log('Tu cartón:');
    for (i in card){
        var friendlycard = [];
        for (j in card[i]){
            friendlycard.push(card[i][j].number);
        }
        console.log(friendlycard)
    }
}

// Generaremos un array en el que introduciremos todos los numeros que queremos dentro del bombo virtual. Evitando así que nos salgan numeros repetidos y a la vez tener bucles infinitos. 
function generarNumRestantes(numeroTotal, array){
    var i = 1
    do {
        array.push(i);
        i++;
    } while (i<=numeroTotal);
}

// Gestor de turnos:
function turn(numTurns, arraynum, card){
        var numActual = nuevoNumeroBombo(arraynum);
        actualizadorBingoCard(numActual,card);
        bingoCardUserFriendly(card);
        console.log(numTurns);  
};

// Generador del numero que saldra en cada turno del bombo virutal.
function nuevoNumeroBombo(arrayNumbers){
    var numRandom = randomNumber(arrayNumbers.length);
    var numBombo = arrayNumbers[numRandom];
    arrayNumbers.splice(numRandom, 1);
    return numBombo;
};
// Actualizador del carton de bingo después de cada nuevo numero.
function actualizadorBingoCard(newNumber,card){ 
    var indice = false;
    for (var i in card) {
        // comprobaremos si existe el numero en el cartón
        for (var j in card[i]){
            if (card[i][j].number == newNumber){
                indice = true;
                card[i][j].number = 'X';
                card[i][j].matched = true;
            } 
        }
    }   
        if (indice){
            console.log('¡El numero ' + newNumber + ' se encuentra en tu cartón!' );
        } else {
            console.log('El numero ' + newNumber + ' no se encuentra en tu cartón.');
        } 
};

// comprobador de si se ha hecho linea y en caso de hacerlo si se ha cantado con anterioridad o no.
function cantarLinea(comprobadorLineaGlobal,card){ 
    if (!comprobadorLineaGlobal){    
        for (var i in card) {
            var indice = true;
            for (var j in card[i]){
                if (card[i][j].matched == false){
                    indice = false;
                    break;
                } 
            }
            if (indice){
                console.log('¡LINEA!');
                comprobadorLineaGlobal = true;
                return comprobadorLineaGlobal;
            }
        }
    }
    return comprobadorLineaGlobal;
}
// comprobador de si se ha hecho bingo o no.
function cantarBingo(comprobadorBingoGlobal, card){
    var indice = true;
    for (var i in card) {
        for (var j in card[i]){
            if (card[i][j].matched == false){
                indice = false;
                break;
            } 
        }
    }
    if (indice){
        console.log('¡BINGO!');
        bingoCardUserFriendly();
        comprobadorBingoGlobal = true;
        return comprobadorBingoGlobal;
    }
};

// fin partida
function finPartida(usuario, puntos, turnos) {
    var resultados = {user: usuario, score: puntos};
    ranking.push(resultados);
    ranking = ranking.sort(ordenadoDescendente);
    var posicion = ranking.indexOf(resultados);
    posicion++;
    console.log('Su puntuación es de ' + puntos + ' puntos, ha tardado ' + turnos + ' turnos en terminar el cartón y su ranking es: ' + posicion + 'º');
    mostrarRanking(ranking);
};
// Funcion de ordenado del array de rankings de forma que la mayor puntuación quede en primer lugar y se ordene de forma descendente.
function ordenadoDescendente (user1, user2,){
    if (user1.score>user2.score){
        return -1;
    } else if (user1.score<user2.score){
        return 1;
    } else {
        return 0;
    }
};
// Muestra el array Ranking a una versión amigable para el usuario en consola.
function mostrarRanking(arrayRanking){
    var posicionUsuario = 1;
    for(i in arrayRanking){
        console.log(posicionUsuario + '-' + 'Usuario: ' + arrayRanking[i].user + ' Puntuacion:' + arrayRanking[i].score);
        posicionUsuario++;
    }
};