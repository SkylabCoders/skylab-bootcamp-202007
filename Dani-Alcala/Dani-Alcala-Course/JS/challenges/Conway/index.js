'use strict'

let initialGrid = 
        [[0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]]

let finalGrid =
        [[0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]]

let i;
let j;
let counter;
const classes = document.querySelectorAll('.grid');


function conway () {
    hideElements();
    switchGrid();
    reloadWeb();
    generateInitialState();
    run();
}

conway();


function switchGrid () {
    const switchGrid = document.querySelector('.switch');
    
    switchGrid.addEventListener('click', function (event) {
        event.preventDefault();              
        showElements();
    })
}

function hideElements () {
    for (let k = 0; k < initialGrid[0].length; k++) {
        for (let l = 0; l < initialGrid.length; l++) {
            if(k === 0) {
                classes[k + l * initialGrid[0].length].classList.add('hidden');
            }
            if(l === 0) {
                classes[k + l * initialGrid[0].length].classList.add('hidden');
            }
        }
    }
}

function showElements () {
    for (let k = 0; k < initialGrid[0].length; k++) {
        for (let l = 0; l < initialGrid.length; l++) {
            if(k === 0) {
                classes[k + l * initialGrid[0].length].classList.add('show');
            }
            if(l === 0) {
                classes[k + l * initialGrid[0].length].classList.add('show');
            }
        }
    }
}

function reloadWeb () {
    const reloadWeb = document.querySelector('.reload');
    
    reloadWeb.addEventListener('click', function (event) {
        event.preventDefault();              
        location.reload();
    })
}

function generateInitialState () {
    for (let k = 0; k < initialGrid[0].length; k++) {
        for (let l = 0; l < initialGrid.length; l++) {
            classes[k + l * initialGrid[0].length].addEventListener('click', function (event) {
                event.preventDefault();
                classes[k + l * initialGrid[0].length].classList.add('paint');
                initialGrid[k][l] = 1;
            })
        }
    }
}

function run() {
    const run = document.querySelector('.run');
    
    run.addEventListener('click', function (event) {
        event.preventDefault();
        generateNextState();
        printSecondState();
    })
}

function printSecondState () {
    for (let k = 0; k < initialGrid[0].length; k++) {
        for (let l = 0; l < initialGrid.length; l++) {
            if(finalGrid[k][l] === 1) {
                classes[k + l * initialGrid[0].length].classList.add('paint');
            }
            else {
                classes[k + l * initialGrid[0].length].classList.remove('paint');
            }
        }
    }
    setTimeout(autoNextState, 1000);
}

function autoNextState() {
    initialGrid = finalGrid;

    finalGrid =
    [[0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]]

    generateNextState();
    printSecondState();
}

function generateNextState() {
    for (i = 0; i < initialGrid[0].length; i++) {
        for (j = 0; j < initialGrid.length; j++) {
            switch(initialGrid[i][j]) {
                case 1:
                    if(aliveNeighbours() === 2 || aliveNeighbours() === 3) {
                        finalGrid[i][j] = 1
                    };
                    break;
                case 0:
                    if(aliveNeighbours() === 3) {
                        finalGrid[i][j] = 1
                    };
                    break;
            }
        }
    }
}

/* checks the neighbours */
function aliveNeighbours() { 
    counter = 0;

    if(typeof(initialGrid[i][j+1]) !== 'undefined') {counter += initialGrid[i][j+1]}
    if(typeof(initialGrid[i][j-1]) !== 'undefined') {counter += initialGrid[i][j-1]}
    
    if(typeof(initialGrid[i+1]) !== 'undefined') {
        if(typeof(initialGrid[i+1][j]) !== 'undefined') {counter += initialGrid[i+1][j]}
        if(typeof(initialGrid[i+1][j+1]) !== 'undefined') {counter += initialGrid[i+1][j+1]}
        if(typeof(initialGrid[i+1][j-1]) !== 'undefined') {counter += initialGrid[i+1][j-1]}
    }
    
    if(typeof(initialGrid[i-1]) !== 'undefined') {
        if(typeof(initialGrid[i-1][j]) !== 'undefined') {counter += initialGrid[i-1][j]}
        if(typeof(initialGrid[i-1][j+1]) !== 'undefined') {counter += initialGrid[i-1][j+1]}
        if(typeof(initialGrid[i-1][j-1]) !== 'undefined') {counter += initialGrid[i-1][j-1]}
    }
    return counter;        
}