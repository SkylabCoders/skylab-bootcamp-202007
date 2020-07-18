'use strict'

const initialGrid = 
        [[0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]]

const finalGrid =
        [[0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]]

let i = 0;
let j = 0;

function conway() {
    for (i = 0; i < initialGrid[0].length; i++) {
        for (j = 0; j < initialGrid.length; j++) {
            if(cornerUpLeft()) {
                calculateCornerUpLeft();
            }
            if(cornerUpRight()) {
                calculateCornerUpRight();
            }
            if(cornerDownLeft()) {
                calculateCornerDownLeft();
            }
            if(cornerDownRight()) {
                calculateCornerDownRight();
            }

            if(border()) {
                calculateBorder();
            }
            if(central()) {
                calculateCentral()
            }
        }
    }
return finalGrid;
}

function cornerUpLeft() {
    const cornerUpLeft = false;

    if(i && j === 0) { corner = true; }

    return cornerUpLeft;
}

function calculateCornerUpLeft() {
    switch(initialGrid[i][j]) {
        case 1:
            if(initialGrid[i][j+1] + initialGrid[i+1][j] + initialGrid[i+1][j+1] >= 2) { finalGrid [i][j] === 1};
            break;
        case 0:
            if(initialGrid[i][j+1] + initialGrid[i+1][j] + initialGrid[i+1][j+1] === 3) { finalGrid [i][j] === 1};
            break;
    }
}

function cornerUpRight() {
    const cornerUpRight = false;

    if(i === 0 && j === initialGrid[0].length - 1) { corner = true; }

    return cornerUpRight;
}

function calculateCornerUpRight() {

}

function cornerDownLeft() {
    const cornerDownLeft = false;

    if(i === initialGrid.length - 1 && j === 0) { corner = true; }

    return cornerDownLeft;
}

function calculateCornerDownLeft() {

}

function cornerDownRight() {
    const cornerDownRight = false;

    if(i === initialGrid.length - 1 && j === initialGrid[0].length - 1) { corner = true; }

    return cornerDownRight;
}

function calculateCornerDownRight() {

}



conway();