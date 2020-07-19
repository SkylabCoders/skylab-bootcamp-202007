"use strict"

let originalStage =[[0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,1,1,1,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0]];
                    
let emptyBoard = []

//Create emptyBoard identical to the originalStage
function newStage(originalStage){
    for (let i = 0; i < originalStage.length; i++) {
        emptyBoard.push([]);
        for (let j = 0; j < originalStage[i].length; j++) {
            emptyBoard[i].push(originalStage[i][j]);                
        }
    }
    runStage(emptyBoard, originalStage);

//Prints stage 2
    return(console.log(emptyBoard))
};
//We run into emptyBoard
function runStage (emptyBoard, originalStage){
    let neightbours = 0;
    for (let i = 0; i < originalStage.length; i++) {
        for (let j = 0; j < originalStage[i].length; j++) {
            let neightbours = 0;
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
            emptyBoard[i][j] = changeNum(neightbours, originalStage[i][j])
        }
        
    }
    return
};
//Funcition that revive or kill cels
function changeNum (neightbours, originalStageCel){
    if(originalStageCel === 1 && (neightbours>3 || neightbours < 2)){
        return 0;
    } else if (originalStageCel === 1 && (neightbours === 2 || neightbours === 3)){
        return 1;            
    } else if (originalStageCel === 0 && neightbours === 3){
        return 1;
    } else {
        return originalStageCel
    }
};

//Calling the function
newStage(originalStage)

//set interval
let x = setInterval();