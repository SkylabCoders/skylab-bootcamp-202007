"use strict"

let output;

let originalStage =[[0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,1,1,1,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0]];

//Create output identical to the originalStage
function newStage(){
     let input;
    if(output === undefined){

        output = [];
        input = originalStage;
    } else {
        input = output;
        output = []
    }
    printResult(input)
    for (let i = 0; i < input.length; i++) {
        output.push([]);
        for (let j = 0; j < input[i].length; j++) {
            output[i].push(input[i][j]);                
        }
    }    
    runStage(output, input);

//Prints stage 2
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
    return(console.log(output))
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


//set interval
//setInterval(function ({newStage()}), 3000);

let start = null;
document.querySelector(".start").addEventListener("click", function(){
    event.preventDefault(event);
    if(start === null){
        start = setInterval(function(){
            newStage(originalStage)
        },2000);
    }
})

document.querySelector(".pause").addEventListener("click", function(){
    event.preventDefault(event);
    clearInterval(start)
})

document.querySelector(".reset").addEventListener("click", function(){
    event.preventDefault();
    window.location.reload();
})

function printResult (input){
    let screen = document.querySelectorAll(".cel");
    let counter = 0;
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
            if(input[i][j]===1){
                screen[counter].style.backgroundColor = "orange";
            } else {
                screen[counter].style.backgroundColor = "black";
            }
        counter ++      
        }      
    }
}
