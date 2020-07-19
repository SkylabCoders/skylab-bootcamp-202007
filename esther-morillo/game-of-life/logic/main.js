//BLINKER
let initialState = [];

let finalState = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

let arrayForCreateRows = [];
let count = 0;

let squareBlack = document.querySelectorAll('.black');
let board = document.querySelector('.board');
let fragment = document.createDocumentFragment();
let squares = 81;
let start = document.querySelector('.start')


//Create board
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

//Square buttons
board.addEventListener('click', function (e) {
    e.target.classList.add('black');
})

//Create initialState
start.addEventListener('click', function () {
    let countPosition = 0;

    while (initialState.length < 9) {
        let arrayForCreateRows = [];
        for (let j = 0; j < 9; j++) {
            //El problema es que i volvía a ser 0 y no me movía de la posición del primer array en i
            if (square[countPosition].className === "square black") {
                arrayForCreateRows[j] = 1;
            } else {
                arrayForCreateRows[j] = 0;
            }
            countPosition++
        }

        initialState.push(arrayForCreateRows);
    }

    getNeighbour();
});




//LOGIC
//1 count -2 ==> 0
//1 count 2/3 ==> 1
//1 count +3 ==> 0
//0 Count 3 ==> 1



function getNeighbour() {

    for (let i = 2; i < initialState.length - 2; i++) {
        for (let j = 2; j < initialState[i].length - 2; j++) {
            countNeighbour(i, j);
        }
    }
    
    paintFinalState();
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
        if (count < 2) {
            finalState[i][j] = 0;
        }

        if (count === 2 || count === 3) {
            finalState[i][j] = 1;
        }

        if (count > 3) {
            finalState[i][j] = 0;
        }
    } else {
        if (count === 3) {
            finalState[i][j] = 1;
        }
    }
    
    count = 0;
}

//Cogemos el array final y cambiado colores
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

function paintInitialState() {
    let countInitialState = 0;
    
        for (let i = 0; i < initialState.length; i++) {
            for (let j = 0; j < initialState[i].length; j++) {
                if (initialState[i][j] === 1) {
                   square[countInitialState].classList.add('black');
                   countInitialState++;
                } else {
                    square[countInitialState].classList.remove('black');
                    countInitialState++;
                }
            }
        }
}




