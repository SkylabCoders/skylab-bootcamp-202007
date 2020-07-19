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
let classes = document.querySelectorAll('.grid');


conway();


function conway () {
    generateInitialState();
    printSecondState();
}

function generateInitialState () {
    for (let k = 0; k < initialGrid[0].length; k++) {
        for (let l = 0; l < initialGrid.length; l++) {
            classes[k * initialGrid[0].length + l].addEventListener('click', function (e) {
                event.preventDefault();
                classes[k * initialGrid[0].length + l].classList.add('paint');
                initialGrid[l][k] = 1;
            })
        }
    }
}

function printSecondState() {
    let run = document.querySelector('.run');
    
    run.addEventListener('click', function (e) {
        debugger
        event.preventDefault();
        generateSecondState();
        
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
    })
}


function generateSecondState() {
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

