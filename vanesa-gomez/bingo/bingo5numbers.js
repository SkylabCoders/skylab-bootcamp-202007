
let isBingo = false;
let newTurn = true;
let carton = generateCarton(5);
let generatedNumbers = [];
let name;

function bingo() {
    userName(); 
    let anotherGame = newGame();
    
    while(anotherGame) {
        let turn = 0;
        let carton = generateCarton(5);
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
    name = prompt('Por favor indique su nombre de jugador');
    if(name == '') {
        userName();
    } else if (!isNaN(name)) {
        alert('Introduce unicamente letras');
        userName();
    } else if (name == null) {
        console.log('See you! bye!!');
    } else {
        console.log (`Bienvenid@ ${name}!`);
    }
}



// Function quieres empezar una partida?
function newGame() {
    let isNewGame = prompt('¿Desea una nueva partida? y/n');
    if(isNewGame === 'y') {
        isNewGame = true;
    } else {
        isNewGame = false;
        window.alert('¡Gracias por jugar, Chao pescao!');
        console.log(`¡Gracias por jugar ${name}. ¡HASTA PRONTO!`);
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
        generatedNumbers = [];
        carton = [];
    }
}

// Generar carton con numeros random:
function generateCarton(numbers) {
    // El parámetro de entrada nos indicará cuántos números tendrá el cartón
    let carton = [];
    while(carton.length < numbers){
        let randomN = Math.floor(Math.random() * 90 + 1);
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
function generateRandomNumber(){

    let newBall;
    let isInclude = false;

    do {
        newBall = Math.floor(Math.random() * 90 + 1);
        isInclude = generatedNumbers.includes(newBall); // True or False.
    } while (isInclude);

    generatedNumbers.push(newBall);
    console.log(`Ha salido el numero ${newBall}`);
    return newBall;
    

   // min = Math.ceil(min);
   // max = Math.floor(max);
}