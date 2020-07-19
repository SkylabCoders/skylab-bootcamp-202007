"use strict"

let originalStage =[[0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,1,1,1,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0]];

//Create emptyBoard identical to the originalStage
let emptyBoard = []
for (let k = 0; k < originalStage.length; k++) {
    emptyBoard.push([]);
    for (let l = 0; l < originalStage[k].length; l++) {
        emptyBoard.push(originalStage[k][l]);                
    }
}

//We run into emptyBoard
let neightbours = 0;
for (let i = 0; i < originalStage.length; i++) {
    for (let j = 0; j < originalStage[i].length; j++) {
//Compare the neightbours of the originalStage and print into the emptyBoard
        if(originalStage[i] !== undefined && originalStage[i][j + 1] === 1){
            neightbours++;
        }
        if(originalStage[i] !== undefined && originalStage[i][j - 1] === 1){
            neightbours++;
        }
        if(originalStage[i - 1] !== undefined && originalStage[i - 1][j] === 1){
            neightbours++;
        }
        if(originalStage[i + 1] !== undefined && originalStage[i + 1][j] === 1){
            neightbours++;
        }
        if(originalStage[i - 1] !== undefined && originalStage[i - 1][j - 1] === 1){
            neightbours++;
        }
        if(originalStage[i - 1] !== undefined && originalStage[i - 1][j + 1] === 1){
            neightbours++;
        }
        if(originalStage[i + 1] !== undefined && originalStage[i + 1][j - 1] === 1){
            neightbours++;
        }
        if(originalStage[i + 1] !== undefined && originalStage[i + 1][j + 1] === 1){
            neightbours++;
        }
        if(originalStage[i][j] === 1 && neightbours>3 || neightbours < 2){
            emptyBoard[i][j] = 0;
        } else if (originalStage[i][j] === 1 && neightbours === 2 || neightbours === 3){
            emptyBoard[i][j] = 1;            
        } else if (originalStage[i][j] === 0 && neightbours === 3){
            emptyBoard[i][j] = 1;
        } else {
            emptyBoard[i][j] = originalStage[i][j]
        }

    }
}

//Funcition that revive or kill cels

//Calling the function
//Print stage 2
console.log(emptyBoard);
