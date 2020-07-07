
let isBingo = false;
let newTurn = true;
let carton = [];
let outNumbers = [];


function bingo() {
    userName(); 
    let anotherGame = newGame();
    
    while(anotherGame) {
        let turn = 0;
        carton = generateCarton(5);
        console.log(`Este es su cartón --> ${carton}.`);
        
        while(!isBingo && newTurn) {
            let ball = generateRandomNumber();
            matchCarton(ball,carton);
            turn += 1;

           if(isBingo) {
               window.alert(`Ha finalizado el juego en ${turn} turnos`);
               isBingo = false;
               break;
           }
       } 
       anotherGame = newGame();
    }
}
bingo();

// Function username
function userName(){
    let userName = prompt('Por favor indique su nombre de jugador');
    console.log (`Bienvenid@ ${userName}!`);
}

// Function quieres empezar una partida?
function newGame() {
    let isNewGame = prompt('¿Desea una nueva partida? y/n');
    if(isNewGame === 'y') {
        isNewGame = true;
    } else {
        isNewGame = false;
        window.alert('¡Gracias por jugar, Chao pescao!');
    }
return isNewGame;
}

// Function quieres un nuevo turno?
function askNewTurn() {
    newTurn = window.confirm('¿Quiere un nuevo turno?');

    return newTurn;
}

// función que comprueba si la bola esta en el cartón.
function matchCarton(ball, carton) {
    for(let i = 0; i < carton.length; i++) {
        if(ball === carton[i]) {
            carton[i] = 'X';
        }
    }
    console.log(carton);
    let cartonIncomplete = carton.find(number => typeof(number) === 'number');
    if(cartonIncomplete){
        isBingo = false;
        askNewTurn();
    } else {
        window.alert('¡FELICIDADES HA HECHO BINGO!');
        isBingo = true;
    }
}

// Generar carton con numeros random:
function generateCarton(numbers) {
    // El parámetro de entrada nos indicará cuántos números tendrá el cartón
    let carton = [];
    while(carton.length < numbers){
        let randomN = Math.floor(Math.random() * 9 + 1);
        let existe = false;
        for(let i = 0; i < carton.length; i++){
            if(carton[i] == randomN) {
                existe = true;
            }
        }
        if(!existe){
            carton[carton.length] = randomN;
        }
    }

    return carton;
}

// Generar bola random sin repetición:
function generateRandomNumber() {
    while(outNumbers.length < 9) {
        let historialBalls = false;
        newBall = Math.floor(Math.random() * 9 + 1);
            for(let i = 0; i < outNumbers.length; i++) {
                if(outNumbers[i] == newBall) {
                    historialBalls = true;
                }
            }
    if(!historialBalls) {
        outNumbers.push(newBall);
        }
    }
    console.log(`Ha salido el número: ${newBall}`);

    historialBalls = false;
    return newBall;
}
