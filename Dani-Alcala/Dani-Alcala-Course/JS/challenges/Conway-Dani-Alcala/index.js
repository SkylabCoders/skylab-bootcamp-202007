'use strict'

let initialGrid = 
    [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

let finalGrid =
    [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

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

/* Initial grid is 6x6, so we hide the other cells */
function hideElements () {
    for (let k = 0; k < initialGrid[0].length; k++) {
        for (let l = 0; l < initialGrid.length; l++) {
            if(k < (initialGrid[0].length) / 2 || l < (initialGrid[0].length) / 2) {
                classes[k + l * initialGrid[0].length].classList.add('hidden');
            }
        }
    }
}

/* If required, we will show the 12*12 grid */
function showElements () {
    for (let k = 0; k < initialGrid[0].length; k++) {
        for (let l = 0; l < initialGrid.length; l++) {
            classes[k + l * initialGrid[0].length].style.height = '2.5vw';
            classes[k + l * initialGrid[0].length].style.width = '2.5vw';
            classes[k + l * initialGrid[0].length].classList.add('show');
        }
    }
}

/* clears the game reloading the page if required */
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

/* from the third state to infinite */
function autoNextState() {
    initialGrid = finalGrid;
    finalGrid =
        [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

    generateNextState();
    printSecondState();
}

/* The 4 conditions of the game are taken into account*/
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