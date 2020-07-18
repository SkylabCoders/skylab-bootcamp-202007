localStorage.clear();

function bingo() {

    var lineWasted = false;
    var surrender = false;
    var generatedNumbers = [];
    var points = 1500;

    var name = prompt("Cual es tu nombre?", "Introducir nombre");
    console.log("Bienvenido " + name);
    do {
        var respuesta = false;
        var carton = generateCarton();
        printCarton(carton);
        respuesta = confirm("Quieres continuar con este carton?");
    } while (!respuesta);

    printRules();
    console.log("Empieza el juego!!");

    game();

    function game() {
        var gameRunning = true;
        var turnCount = 0;
        while (gameRunning) {
            if (askNewTurn()) {
                turnCount++;
                points -= turnCount * 2;
                var randomNumber = generateRandomNumber(); // Generar numero random
                console.log("Numero generado: " + randomNumber);
                carton = checkMatch(randomNumber, carton); // Mirar si esta dentro del carton, si lo encuentra lo imprime
                if (!lineWasted && checkLine(carton)) {
                    console.log("LINIAA!! Felicidades, obtienes 50 puntos.");
                    points += 50;
                    lineWasted = true;
                }
                if (checkBingo(carton)) {
                    gameRunning = false;
                    console.log(`"BINGO!! Felicidades ${name}.`);
                }
            } else {
                gameRunning = false;
                surrender = true;
            }
        }
        if (!surrender) {
            if (points < 0) {
                points = 0;
            }
            console.log(`Fin del juego ${name}. Turnos totales: ${turnCount}. Puntos: ${points}`);
        } else {
            points = 0;
            console.log(`Te has rendido ${name} en ${turnCount} turnos. Obtienes 0 puntos.`);
        }

        localStorage.setItem(name, points);
        printRanking();

        if (confirm("Deseas pasar al siguiente turno? Si no, acabara el juego")) {
            bingo();
        }

    }

    function printRanking() {
        console.log("RANKING:");
        for (var i = 0; i < localStorage.length; i++) {
            console.log(`  - Nombre: ${localStorage.key(i)}, Puntos: ${localStorage.getItem(localStorage.key(i))}`);
        }
    }

    function printRules() {
        console.log("Reglas de funcionamiento:\n   - Empiezas con 1500 puntos.\n   - Por cada turno que pase se pierde 1 punto y se duplica por cada turno que pase.");
    }

    function askNewTurn() {
        var newTurn = confirm("Deseas pasar al siguiente turno? Si no, acabara el juego");
        return newTurn;
    }

    function generateCartonNumber() {
        return Math.ceil(Math.random() * 35);
    }

    // Genera un nuevo numero aleatorio que no se haya generado anteriormente.
    function generateRandomNumber() {
        do {
            var number = Math.ceil(Math.random() * 35); //El .ceil redondea hacia arriba, por lo que excluye el 0 siempre.
        } while (isRepeated(generatedNumbers, number));
        generatedNumbers.push(number);
        return number;
    }

    // Comprueba si el numero esta dentro del array que recibe.
    function isRepeated(numbersArray, number) {
        for (var i in numbersArray) {
            if (number == numbersArray[i]) {
                return true;
            }
        }
        return false;
    }

    function generateCarton() {
        var cartonFunction = [
            { number: generateCartonNumber(), matched: false },
            { number: generateCartonNumber(), matched: false },
            { number: generateCartonNumber(), matched: false },
            { number: generateCartonNumber(), matched: false },
            { number: generateCartonNumber(), matched: false },
            //next line
            { number: generateCartonNumber(), matched: false },
            { number: generateCartonNumber(), matched: false },
            { number: generateCartonNumber(), matched: false },
            { number: generateCartonNumber(), matched: false },
            { number: generateCartonNumber(), matched: false },
            //next line
            { number: generateCartonNumber(), matched: false },
            { number: generateCartonNumber(), matched: false },
            { number: generateCartonNumber(), matched: false },
            { number: generateCartonNumber(), matched: false },
            { number: generateCartonNumber(), matched: false }
        ];

        return cartonFunction;
    }

    // Comprueba si el numero generado esta en el carton y cambia ese numero por una X
    function checkMatch(randomNumber, userCarton) {
        var matched = false;
        for (var i = 0; i < userCarton.length; i++) {
            if (userCarton[i].number == randomNumber) {
                userCarton[i].matched = true;
                matched = true;
            }
        }
        if (matched) {
            console.log("El numero aleatorio está en tu carton!. Puntos: " + points);
            printCarton(userCarton);
        } else {
            console.log("No ha habido suerte, prueba en el siguiente turno.  Puntos: " + points);
        }

        return userCarton;
    }

    function printCarton(userCarton) {
        var count = 0;
        var strCarton = "";
        for (var i = 0; i < userCarton.length; i++) {
            if (!userCarton[i].matched) {
                strCarton += `${userCarton[i].number}, `;
            } else {
                strCarton += `X, `;
            }
            count++;
            if (count == 5) {
                strCarton += "\n";
                count = 0;
            }
        }

        console.log("Carton:\n" + `${strCarton}`);
    }


    function checkLine(userCarton) {
        var line = false;

        if (userCarton[0].matched && userCarton[1].matched && userCarton[2].matched && userCarton[3].matched && userCarton[4].matched) {
            line = true;
        }

        if (userCarton[5].matched && userCarton[6].matched && userCarton[7].matched && userCarton[8].matched && userCarton[9].matched) {
            line = true;
        }

        if (userCarton[10].matched && userCarton[11].matched && userCarton[12].matched && userCarton[13].matched && userCarton[14].matched) {
            line = true;
        }
        return line;
    }

    // Comprueba si hay bingo en el carton.
    function checkBingo(userCarton) {
        var count = 0;
        for (var i = 0; i < userCarton.length; i++) {
            if (userCarton[i].matched) {
                count++;
            }
        }

        if (count == userCarton.length) {
            return true;
        }
        return false;
    }
}