//store number keys variables
var number0 = document.getElementById('num0');
var number1 = document.getElementById('num1');
var number2 = document.getElementById('num2');
var number3 = document.getElementById('num3');
var number4 = document.getElementById('num4');
var number5 = document.getElementById('num5');
var number6 = document.getElementById('num6');
var number7 = document.getElementById('num7');
var number8 = document.getElementById('num8');
var number9 = document.getElementById('num9');
var numberComa = document.getElementById('coma');

var reset = document.getElementById('ac');
var back = document.getElementById('back');
//store operational keys variables
var suma = document.getElementById('sum');
var resta = document.getElementById('rest');
var multi = document.getElementById('mult');
var div = document.getElementById('div');
var total = document.getElementById('igual');

var screen = '';

//print Functions for each number key
function printNumb(number) {
    if (screen.length > 8) {
        return false;
    } else {
        screen += number;
        document.getElementById('result').innerHTML = screen;
    }
}
number0.onclick = function () {
    printNumb(0);
}
number1.onclick = function () {
    printNumb(1);
}
number2.onclick = function () {
    printNumb(2);
}
number3.onclick = function () {
    printNumb(3);
}
number4.onclick = function () {
    printNumb(4);
}
number5.onclick = function () {
    printNumb(5);
}
number6.onclick = function () {
    printNumb(6);
}
number7.onclick = function () {
    printNumb(7);
}
number8.onclick = function () {
    printNumb(8);
}
number9.onclick = function () {
    printNumb(9);
}
numberComa.onclick = function () {
    for (let i = 0; i < screen.length; i++) {
        if (screen[i] === '.') {
            return false;
        }
    }
    if (screen === '' || screen.length > 8) {
        return false;
    } else {
        screen += '.';
        document.getElementById('result').innerHTML = screen;
    }
}
reset.onclick = function () {
    screen = '';
    cont = 0;
    lastOp = '';
    start = true;
    document.getElementById('result').innerHTML = 0;
}
back.onclick = function () {
    screen = '';
    document.getElementById('result').innerHTML = 0;
}

//operational Functions for each math operation
var cont = 0;
var lastOp = '';
var start = true;

function sumaOp() {
    var screenNum = Number(screen);
    cont = cont + screenNum;
    cont = +cont.toFixed(2);
    screen = '';
    document.getElementById('result').innerHTML = cont;
    start = false;
}
function restOp() {
    var screenNum = Number(screen);
    cont = cont - screenNum;
    cont = +cont.toFixed(2);
    screen = '';
    document.getElementById('result').innerHTML = cont;
    start = false;
}
function multOp() {
    var screenNum = Number(screen);
    cont = cont * screenNum;
    cont = +cont.toFixed(2);
    screen = '';
    document.getElementById('result').innerHTML = cont;
    start = false;
}
function divOp() {
    var screenNum = Number(screen);
    cont = cont / screenNum;
    cont = +cont.toFixed(2);
    screen = '';
    document.getElementById('result').innerHTML = cont;
    start = false;
}

function testLastOp() {
    if (!start) {
        switch (lastOp) {
            case 'suma':
                sumaOp();
                break;
            case 'resta':
                restOp();
                break;
            case 'multi':
                multOp();
                break;
            case 'div':
                divOp();
                break;
        }
    } else {
        start = false;
        cont = Number(screen);
        screen = '';
    }
}

suma.onclick = function () {
    testLastOp();
    lastOp = 'suma';
}
resta.onclick = function () {
    testLastOp();
    lastOp = 'resta';
}
multi.onclick = function () {
    testLastOp();
    lastOp = 'multi';
}
div.onclick = function () {
    testLastOp();
    lastOp = 'div';
}
total.onclick = function () {
    switch (lastOp) {
        case 'suma':
            sumaOp();
            break;
        case 'resta':
            restOp();
            break;
        case 'multi':
            multOp();
            break;
        case 'div':
            divOp();
            break;
    }
    cont = +cont.toFixed(2);
    document.getElementById('result').innerHTML = cont;
    lastOp = '';
}
