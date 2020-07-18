'use strict'

const initialGrid = 
        [[0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]]

let finalGrid =
        [[0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]]

let i;
let j;
let counter;

function conway() {
    for (i = 0; i < initialGrid[0].length; i++) {
        for (j = 0; j < initialGrid.length; j++) {
            switch(initialGrid[i][j]) {
                case 1:
                    if(aliveNeighbours() === 2 || aliveNeighbours() === 3) { finalGrid[i][j] = 1};
                    break;
                case 0:
                    if(aliveNeighbours() === 3) { finalGrid[i][j] = 1};
                    break;
            }
        }
    }
    return finalGrid;
}

function aliveNeighbours() { 
    counter = 0;

    if(typeof(initialGrid[i][j+1]) === 'number') {counter += initialGrid[i][j+1]}
    if(typeof(initialGrid[i][j-1]) === 'number') {counter += initialGrid[i][j-1]}
    if(typeof(initialGrid[i+1]) === 'number') {
        if(typeof(initialGrid[i+1][j]) === 'number') {counter += initialGrid[i+1][j]}
        if(typeof(initialGrid[i+1][j+1]) === 'number') {counter += initialGrid[i+1][j+1]}
        if(typeof(initialGrid[i+1][j-1]) === 'number') {counter += initialGrid[i+1][j-1]}
    }
    if(typeof(initialGrid[i-1]) === 'number') {
    if(typeof(initialGrid[i-1][j]) === 'number') {counter += initialGrid[i-1][j]}
    if(typeof(initialGrid[i-1][j+1]) === 'number') {counter += initialGrid[i-1][j+1]}
    if(typeof(initialGrid[i-1][j-1]) === 'number') {counter += initialGrid[i-1][j-1]}
    }
    return counter;        
}

finalGrid = conway();
console.log(finalGrid);