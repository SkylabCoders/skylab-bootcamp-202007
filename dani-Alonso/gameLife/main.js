let initalState = [
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
let secondState = [
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
let counter = 0;
let board = document.querySelector('.board');
let boardClass = document.querySelectorAll('.boardClass');
let start = document.querySelector('.start');
let divCounter = 0;
let count = 0;
divCounterSecond = 0;
board.addEventListener('click', function(e) {
    e.target.classList.add('black');
});
start.addEventListener('click', function() {
    changeState();
    setInterval(changeState(), 100);
});

function counterNeighbours(i, j) {
    //check neighbours
    if (initalState[i - 1][j - 1] === 1) {
        counter++;
    }
    if (initalState[i - 1][j] === 1) {
        counter++;
    }
    if (initalState[i - 1][j + 1] === 1) {
        counter++;
    }
    if (initalState[i][j - 1] === 1) {
        counter++;
    }
    if (initalState[i][j + 1] === 1) {
        counter++;
    }
    if (initalState[i + 1][j - 1] === 1) {
        counter++;
    }
    if (initalState[i + 1][j] === 1) {
        counter++;
    }
    if (initalState[i + 1][j + 1] === 1) {
        counter++;
    }
    //conditions
    if (initalState[i][j] === 1 && counter < 2) {
        secondState[i][j] = 0;
    }
    if (initalState[i][j] === 1 && (counter === 2 || counter === 3)) {
        secondState[i][j] = 1;
    }
    if (initalState[i][j] === 1 && counter > 3) {
        secondState[i][j] = 0;
    }
    if (initalState[i][j] === 0 && counter === 3) {
        secondState[i][j] = 1;
    }

    counter = 0;
}

function neighbours() {
    for (let i = 1; i < initalState.length - 1; i++) {
        for (let j = 1; j < initalState[i].length - 1; j++) {
            counterNeighbours(i, j);
        }
    }

    printSecondState();
    initialState = [...secondState];
}

function changeState() {
    for (let i = 0; i < initalState.length; i++) {
        for (let j = 0; j < initalState[i].length; j++) {
            if (boardClass[divCounter].className === 'boardClass black') {
                initalState[i][j] = 1;
            }
            divCounter++;
        }
    }
    neighbours();
}

function printSecondState() {
    console.log(secondState);
    let divCounterSecondState = 0;
    for (let i = 0; i < secondState.length; i++) {
        for (let j = 0; j < secondState[i].length; j++) {
            if (secondState[i][j] === 1) {
                boardClass[divCounterSecondState].classList.add('black');
                divCounterSecondState++;
            } else {
                boardClass[divCounterSecondState].classList.remove('black');
                divCounterSecondState++;
            }
        }
    }
}