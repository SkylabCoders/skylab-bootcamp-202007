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
    //Declaro la propiedad después de haber creado los divs con la clase, sino no sabe de qué le hablo
    let square = document.querySelectorAll('.square');


    //BOTONES
    //Square buttons - cada clic del usuario ponemos la clase black
    board.addEventListener('click', function (e) {
        e.target.classList.add('black');
    })

    //Create initialState
    startBtn.addEventListener('click', function () {
        createArray();
    });

    stopBtn.addEventListener('click', function () {
        location.reload(true);
    });



    //Create the initial array looking at the drawing
    function createArray() {
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
        setTimeout(paintInitialForLoop, 1000);
    }

    //Pintamos el array incial
    function paintInitialForLoop() {
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
        setTimeout(paintFinalState, 1000);
    }
}

gameOfLife();




