"use strict"

var output;

var initialState = blinker.initialState;
console.log(initialState);

//Create output identical to the initialState
function Life(initialState){
   

        var input = initialState;
        output = [];
    
        printResult(input);
    
    for (let i = 0; i < input.length; i++) {
        output.push([]);
        for (let j = 0; j < input[i].length; j++) {
            output[i].push(input[i][j]);                
        }
    }    

    return runStage(output, input);

//Prints stage 2
};
//We run into output
function runStage (output, input){
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            let neightbours = 0;
//Compare the neightbour of the input and print into the output
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
    return output;
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
//setInterval(function ({life()}), 3000);

let start = null;
document.querySelector(".start").addEventListener("click", function(){
    event.preventDefault(event);
    if(start === null){
        start = setInterval(function(){
            life(initialState)
        },2000);
    }
})

document.querySelector(".pause").addEventListener("click", function(){
    event.preventDefault(event);
    clearInterval(start)
    start = null;
})

document.querySelector(".reset").addEventListener("click", function(){
    event.preventDefault();
    window.location.reload();
})

function printResult (input){
    let screen = document.querySelectorAll(".cel");
    let counter = 0;
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if(input[i][j]===1){
                screen[counter].style.backgroundColor = "orange";
            } else {
                screen[counter].style.backgroundColor = "black";
            }
        counter ++      
        }      
    }
}
