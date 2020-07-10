var Max = 25; //Numero máximo del bombo

function newCardboard(x) { //Función para generar un nuevo cartón, input cantidad de números que quieres que tenga el cartón
    var cardboard = [];
    for (let i = 0; i < x; i++) { //Llenamos la array con números aleatorios, no repetidos.
        let num = 0;
        do {
            num = Math.floor(Math.random() * Max) + 1;
        } while (cardboard.includes(num));
        cardboard.push(num);
    }
    return cardboard;
}

function checkLine(line) { //Función para comprobar si has cantado línea, input línia a comprobar
    var count = 0;
    for (let i = 0; i < line.length; i++) { //Si hay 5 "X" la línea está completa
        if (line[i] == "X") {
            count += 1;
        }
    }
    if (count == 5) {
        return true;
    }
    return false;
}

function bingo() { //Función general del Bingo
    var rank = [];

    do { //Bucle para jugar tantas partidas como quieras
        var turnos = 0;
        var linea1 = false;
        var linea2 = false;
        var linea3 = false;
        var bolas = [];

        var name = prompt("¿Com te llamas?");

        if(rank.length == 0){ //Si no hay aún datos en el rango se lo decimos al usuario
            console.log("Aún no hay partidas registradas");
        }
        else{
            for (let i = 0; i < rank.length; i++) { //Si hay datos los mostramos de forma entendible para el usuario
                console.log( (i+1) + "a pos - " + rank[i].value + " points - by " + rank[i].key);
                
            }
        }

        do { //Bucle para elegir que cartón quiere el usuario
            var cardboard = newCardboard(15);
            console.log("Hola " + name + ", este es tu cartón de bingo: " + cardboard);
        } while (!confirm("¿Quieres este cartón?"))

        while (confirm("¿Listo para pasar al siguiente turno?")) { //Bucle para cada turno
            turnos += 1;
            do { //Generamos el numero que tocara este turno, sin que este repetido
                var num = Math.floor(Math.random() * Max) + 1;
            } while (bolas.includes(num));
            bolas.push(num);
            console.log("Ha salido el " + num);


            for (let i = 0; i < cardboard.length; i++) { //Comprobamos si se ha cantado alguna línea
                if (num == cardboard[i]) {
                    cardboard[i] = "X";
                }
            }

            if (checkLine(cardboard.slice(0, 5)) && !linea1) {
                console.log("Línea!");
                linea1 = true;
            }

            if (checkLine(cardboard.slice(5, 10)) && !linea2) {
                console.log("Línea!");
                linea2 = true;
            }

            if (checkLine(cardboard.slice(10, 15)) && !linea3) {
                console.log("Línea!");
                linea3 = true;
            }

            if (linea1 && linea2 && linea3) { //Si se han cantado las 3 lineas damos la partida por terminada
                console.log("Has completado el cartón en " + turnos + " turnos");
                break;
            }
            else { //Sino mostramos el carton actual al usuario
                console.log("El estado actual de tu cartón es: " + cardboard);
            }
        }

        var puntuacion = 100 - turnos; //Assignamos los puntos al usuario
        console.log("Tu puntuación es de " + puntuacion + " puntos");

        rank.push({ //Añadimos la partida al ranking
            key: name,
            value: puntuacion
        }) 

        rank.sort(function(x, y){ //Ordenamos el ranking
            return y.value - x.value;
        })
        console.log(rank);
    } while (confirm("¿Quieres hacer otra partida?"))
}