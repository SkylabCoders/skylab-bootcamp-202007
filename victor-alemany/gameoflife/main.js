'use strict'

let initialTable = function(columns,rows,time){
    this.table = function(){
        new array (columns,rows);
    };
    this.time = time;
}

// Blinker

let blinkerInitial = [
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0],
	[0, 1, 1, 1, 0],
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0],
];

function nextGeneration(input) {
    let output = [];

	for (let i = 0; i < input.length; i++) {
        output[i] = [];
		for (let j = 0; j < input[i].length; j++) {
            output[i].push(input[i][j]);    
        }
    }
    return nextMutation(output,input);
}

function nextMutation(output,input) {
        let vecinos = 0;
    
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
                if (input[i] !== undefined && input[i][j - 1] === 1) {vecinos++;}
                if (input[i] !== undefined && input[i][j + 1] === 1) {vecinos++;}
                if (input[i - 1] !== undefined && input[i - 1][j] === 1) {vecinos++;}
                if (input[i - 1] !== undefined && input[i - 1][j - 1] === 1) {vecinos++;}
                if (input[i - 1] !== undefined && input[i - 1][j + 1] === 1) {vecinos++;}
                if (input[i + 1] !== undefined && input[i + 1][j] === 1) {vecinos++;}
                if (input[i + 1] !== undefined && input[i + 1][j - 1] === 1) {vecinos++;}
                if (input[i + 1] !== undefined && input[i + 1][j + 1] === 1 ) {vecinos++;}
                if (vecinos === 3) {output[i][j] = 1;}    
                if(vecinos < 2 ){output[i][j] = 0;}
                if(vecinos > 3){output[i][j] = 0;}
                vecinos = 0;
        }     
    }

    blinkerInitial = output;
    return console.log(output);
}

let start = null;

document.querySelector('.initGame').addEventListener("click", function (event){
    event.preventDefault();
    printResult(blinkerInitial);
    setInterval(function(){nextGeneration(blinkerInitial);},2000);
    start = setInterval(function(){nextGeneration(blinkerInitial);},2000);
    start=null;    
});


document.querySelector('.stopGame').addEventListener('click',function(event){
    event.preventDefault();
    clearInterval(start);
    start= null;
});


function printResult(blinkerInitial){
    let table = document.querySelectorAll('.box');
    let counter = 0;   
    
    for (let i = 0; i < blinkerInitial.length; i++) {
            for (let j = 0; j < blinkerInitial.length; j++) {
                if(blinkerInitial[i][j] === 1){
                    table[counter].style.backgroundColor="#FFFFFF";
                }
                counter++;
            }
            
        }
}

