// Array para ir guardando los clicks del usuario y luego transformar a numero
let visor = '';
let accumulator = 0;

let acButton = document.getElementById("ac");

let numberZeroButton = document.getElementById("number-0");
let numberOneButton = document.getElementById("number-1");
let numberTwoButton = document.getElementById("number-2");
let numberThreeButton = document.getElementById("number-3");
let numberFourButton = document.getElementById("number-4");
let numberFiveButton = document.getElementById("number-5");
let numberSixButton = document.getElementById("number-6");
let numberSevenButton = document.getElementById("number-7");
let numberEightButton = document.getElementById("number-8");
let numberNineButton = document.getElementById("number-9");
 
let divideButton = document.getElementById("divide");
let timesButton = document.getElementById("mult");
let minusButton = document.getElementById("rest");
let plusButton = document.getElementById("sum");
let equalButton = document.getElementById("equal");
let pointButton = document.getElementById("point");


// Esta función guardará el valor actual de la pantalla
function saveNumber(number){
    if(visor.length <= 10){
        visor+= number;
            document.getElementById("visor").innerHTML = visor;
    }
}

numberZeroButton.onclick = function() {
    saveNumber(0);
}
numberOneButton.onClick = function() {
    saveNumber(1);
}
numberTwoButton.onClick = function() {
    saveNumber(2);
}
numberThreeButton.onClick = function() {
    saveNumber(3);
}
numberFourButton.onClick = function() {
    saveNumber(4);
}
numberFiveButton.onClick = function() {
    saveNumber(5);
}
numberSixButton.onClick = function() {
    saveNumber(6);
}
numberSevenButton.onClick = function() {
    saveNumber(7);
}
numberEightButton.onClick = function() {
    saveNumber(8);
}
numberNineButton.onClick = function() {
    saveNumber(9);
}
pointButton.onClick = function() {
    for (let i = 0; i < visor.length; i++) {
       if (visor[i] === '.') {
           return false;
       } 
    }
    if (visor === '') {
        return false;
    } else {
        screen += '.';
        document.getElementById("visor").innerHTML = visor;
    }
}
acButton.onclick = function() {
    visor = '';
    accumulator = 0;
    lastOp = '';
    start = true;
    document.getElementById("visor").innerHTML = 0;
}

back.onClick = function() {
    visor = '';
    document.getElementById("visor").innerHTML = 0;
}

// funciones que realizarán las operaciones

let cont = 0;
let lastOp = '';
let start = true;


function sum() {
    let screenNum = Number(visor);
    cont = cont + screenNum;
    cont = +cont.toFixed(2);
    visor = '';
    document.getElementById('visor').innerHTML = cont;
    start = false;
}
function rest() {
    let screenNum = Number('visor');
    cont = cont - screenNum;
    cont = +cont.toFixed(2);
    visor = '';
    document.getElementById('visor').innerHTML = cont;
    start = false;
}
function mult() {
    let screenNum = Number('visor');
    cont = cont * screenNum;
    cont = +cont.toFixed(2);
    visor = '';
    document.getElementById('visor').innerHTML = cont;
    start = false;
}
function divide() {
    let screenNum = Number('visor');
    cont = cont / screenNum;
    cont = +cont.toFixed(2);
    visor = '';
    document.getElementById('visor').innerHTML = cont;
    start = false;
}

// función que
function testLastOp() {
    if(!start) {
        switch (lastOp) {
            case 'plusButton':
                sum();
                break;
            case 'minusButton':
                rest();
                break;
            case 'timesButton':
                mult();
                break;
            case 'divideButton':
                divide();
                break;
        }
    } else {
        start = false;
        cont = Number(visor);
        visor = '';
    }
}

plusButton.onClick = function() {
    testLastOp();
    lastOp = 'plusButton';
}
minusButton.onClick = function() {
    testLastOp();
    lastOp = 'minusButton';
}
timesButton.onClick = function() {
    testLastOp();
    lastOp = 'timesButton';
}
divideButton.onClick = function() {
    testLastOp();
    lastOp = 'divideButton';
}
equalButton.onClick = function() {
    switch(lastOp) {
        case 'plusButton':
            sum();
            break;
        case 'minusButton':
            rest();
            break;
        case 'timesButton':
            mult();
            break;
        case 'divideButton':
            divide();
            break;
    }
    cont = +cont.toFixed(2);
    document.getElementById('visor').innerHTML = cont;
    lastOp = '';
}


/* Esta funcion borra todo lo que se vea en el visor
function clearOne() {
    visor = [];
    document.getElementById("visor").innerHTML = 0;
}

divideButton.addEventListener("click", function(){

})
*/
