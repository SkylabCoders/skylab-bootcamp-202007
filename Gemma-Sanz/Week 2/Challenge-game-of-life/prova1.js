"use strict"

let emptyBoard;

//Create emptyBoard identical to the originalStage
function newStage(output){
    let input;
    if(typeof emptyBoard !== undefined){
        let originalStage =[[0,0,0,0,0,0,0],
                            [0,0,0,0,0,0,0],
                            [0,0,1,1,1,0,0],
                            [0,0,0,0,0,0,0],
                            [0,0,0,0,0,0,0]];
        emptyBoard = [];
        input = originalStage;

        output = emptyBoard;
    } else {
        input = output;
        output = []
    }
    for (let i = 0; i < input.length; i++) {
        output.push([]);
        for (let j = 0; j < input[i].length; j++) {
            output[i].push(input[i][j]);                
        }
    }
    runStage(output, input);


//Prints stage 2
    return(console.log(output))
};
//We run into output
function runStage (output, input){
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            let neightbours = 0;
//Compare the neightbours of the input and print into the output
            if(input[i] !== undefined && input[i][j + 1] === 1){
                neightbours++;
            }
            if(input[i] !== undefined && input[i][j - 1] === 1){
                neightbours++;
            }
            if(input[i - 1] !== undefined && input[i - 1][j] === 1){
                neightbours++;
            }
            if(input[i + 1] !== undefined && input[i + 1][j] === 1){
                neightbours++;
            }
            if(input[i - 1] !== undefined && input[i - 1][j - 1] === 1){
                neightbours++;
            }
            if(input[i - 1] !== undefined && input[i - 1][j + 1] === 1){
                neightbours++;
            }
            if(input[i + 1] !== undefined && input[i + 1][j - 1] === 1){
                neightbours++;
            }
            if(input[i + 1] !== undefined && input[i + 1][j + 1] === 1){
                neightbours++;
            }
            output[i][j] = changeNum(neightbours, input[i][j])
        }
        
    }
    return
};
//Funcition that revive or kill cels
function changeNum (neightbours, inputCel){
    if(inputCel === 1 && (neightbours>3 || neightbours < 2)){
        return 0;
    } else if (inputCel === 1 && (neightbours === 2 || neightbours === 3)){
        return 1;            
    } else if (inputCel === 0 && neightbours === 3){
        return 1;
    } else {
        return inputCel
    }
};


//Calling the function
newStage()

//set interval
//setInterval(function ({newStage()}), 3000);

//let cel = document.querySelectorAll(".cel");
//cel.addEventListener("click", function () => ??);