function bingo() {
    var carton;
    var randomNumber;
    var i = 0;
    var bingo = false;
    var lineaCantada = false;
    var bombo = [];
    var b = 0;

    function usuario() {
        var name = prompt("Introduzca su nombre:");
        if (name === "") {
            usuario();
        } else if (name == null) {
            console.log("Adiós!");
        } else {
            namePlayer = name;
            console.log(`¡Bienvenido/a ${name}!`);
            generateCarton();
        }
    }

    function confirTurn() {
        return confirm("¿Jugamos?");
    }

    function otherCarton() {
        var newCarton = prompt("Seguimos con este cartón?", "Si/No");
        switch (newCarton) {
            case "Si":
                generateRandomNumber();
                confirTurn();
                break;
            case "No":
                generateCarton();
                break;
            default:
                otherCarton();
                break;
        }
    }

    function generarBombo() {
        while (b < 99) {
            randomNumber = generateRandomNumber();
            if (bombo.indexOf(randomNumber) == -1) {
                bombo.push(randomNumber);
                b++;
            }
        }
        b = 0;
    }

    function generateRandomNumber() {
        return (randomNumber = Math.floor(Math.random() * 99 + 1));
    }

    function generateCarton() {
        carton = new Array();
        while (i < 15) {
            randomNumber = generateRandomNumber();
            if (carton.indexOf(randomNumber) == -1) {
                carton.push(randomNumber);
                i++;
            }
        }
    }

    function verificarLinea() {
        for (var i = 0; i < carton.length; i++) {
            if (bombo[b] == carton[i]) {
                carton[i] = "X";
            }
            console.log(
                carton.slice(0, 4).join(" ") +
                "\n" +
                carton.slice(5, 9).join(" ") +
                "\n" +
                carton.slice(10, 14).join(" ")
            );
        }
        if (lineaCantada != true) {
            if (
                (carton[0] == "X" &&
                    carton[1] == "X" &&
                    carton[2] == "X" &&
                    carton[3] == "X" &&
                    carton[4] == "X") ||
                (carton[5] == "X" &&
                    carton[6] == "X" &&
                    carton[7] == "X" &&
                    carton[8] == "X" &&
                    carton[9] == "X") ||
                (carton[10] == "X" &&
                    carton[11] == "X" &&
                    carton[12] == "X" &&
                    carton[13] == "X" &&
                    carton[14] == "X")
            ) {
                lineaCantada = true;
                console.log("LINEA!!!!!!!");
            }
        }
        confirTurn();
    }

    function verificarBingo() {
        const isArrayFullCross = (currentValue) => currentValue == "X";
        if (carton.every(isArrayFullCross)) {
            console.log("BINGO");
            bingo = true;
        }
    }
    usuario();
    otherCarton();
    generarBombo();

    for (b = 0; b < 99; b++) {
        verificarLinea();
        verificarBingo();
        if (bingo == true);
        if (!confirTurn()) break;
    }
}

bingo();