//BLINKER
let initialState = [];
let finalState = [];
let count = 0;
let countPosition = 0;
let numberRows = 20;
let numberColumns = 20;
let squareBlack = document.querySelectorAll('.black');
let board = document.querySelector('.board');
let fragment = document.createDocumentFragment();
let squares = 400;
let startBtn = document.querySelector('.start');
let stopBtn = document.querySelector('.stop');

function gameOfLife() {
    //CREATE BOARD
    function createBoard() {
        for (let i = 0; i < squares; i++) {
            let generateSquare = document.createElement('DIV');
            fragment.appendChild(generateSquare);
            generateSquare.classList.add('square');
        }
        board.appendChild(fragment);
    }
    createBoard();
    let square = document.querySelectorAll('.square');
    //BOTONES
    board.addEventListener('click', function(e) {
        e.target.classList.add('black');
    });
    //Create initialState al clicar el botón, según lo que ha pintado el usuario
    startBtn.addEventListener('click', function() {
        //Cuando hago clic llamo a una función cada medio segundo donde empieza todo mi código.
        //No vuelve a este lugar porque cuando da una vuelta, copio array y empieza desde el recorrido de vecinos, no desde crear el array.
        createArray();
        setInterval(play, 100);
    });

    function play() {
        getNeighbour();
    }
    stopBtn.addEventListener('click', function() {
        location.reload(true);
    });
    //Create the initial array looking at the drawing
    function createArray() {
        while (initialState.length < numberRows) {
            let arrayForCreateRowsInitial = [];
            for (let i = 0; i < numberColumns; i++) {
                //El problema es que i volvía a ser 0 y no me movía de la posición del primer array en i
                if (square[countPosition].className === 'square black') {
                    arrayForCreateRowsInitial[i] = 1;
                } else {
                    arrayForCreateRowsInitial[i] = 0;
                }
                countPosition++;
            }
            initialState.push(arrayForCreateRowsInitial);
        }
        createFinalArray();
        getNeighbour();
    }
    //Creamos el finalState array
    function createFinalArray() {
        finalState = [];
        while (finalState.length < numberRows) {
            let arrayForCreateRowsFinal = [];
            for (let i = 0; i < numberColumns; i++) {
                //El problema es que i volvía a ser 0 y no me movía de la posición del primer array en i
                arrayForCreateRowsFinal[i] = 0;
            }
            countPosition++;
            finalState.push(arrayForCreateRowsFinal);
        }
    }
    //LOGIC
    //1 count -2 ==> 0
    //1 count 2/3 ==> 1
    //1 count +3 ==> 0
    //0 Count 3 ==> 1
    function getNeighbour() {
        for (let i = 1; i < initialState.length - 1; i++) {
            for (let j = 1; j < initialState[i].length - 1; j++) {
                countNeighbour(i, j);
            }
        }
        paintFinalState();
        // Pinto el finalState y luego cambio un array por otro:
        // [initialState, finalState] = [finalState, initialState];
        // initialState = finalState;
        initialState = [...finalState];
        createFinalArray();
    }

    function countNeighbour(i, j) {
        if (initialState[i][j - 1] === 1) count++;
        if (initialState[i][j + 1] === 1) count++;
        if (initialState[i - 1][j - 1] === 1) count++;
        if (initialState[i - 1][j] === 1) count++;
        if (initialState[i - 1][j + 1] === 1) count++;
        if (initialState[i + 1][j - 1] === 1) count++;
        if (initialState[i + 1][j] === 1) count++;
        if (initialState[i + 1][j + 1] === 1) count++;
        if (initialState[i][j] === 1) {
            if (count < 2 || count > 3) {
                finalState[i][j] = 0;
            }
            if (count === 2 || count === 3) {
                finalState[i][j] = 1;
            }
        } else {
            if (count === 3) {
                finalState[i][j] = 1;
            }
        }
        count = 0;
    }
    //Cogemos el array final y cambiamos colores
    function paintFinalState() {
        let countFinalState = 0;
        for (let i = 0; i < finalState.length; i++) {
            for (let j = 0; j < finalState[i].length; j++) {
                if (finalState[i][j] === 1) {
                    square[countFinalState].classList.add('black');
                    countFinalState++;
                } else {
                    square[countFinalState].classList.remove('black');
                    countFinalState++;
                }
            }
        }
    }
}
gameOfLife();