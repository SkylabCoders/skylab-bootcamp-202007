'use strict';

// num is the string variable that constructs the number to be operated, figure by figure
// numConstructed is the final string, converted into a number
// result is the operation's result
// operator is used to know wich operation was the last one that was clicked 
// end indicates that "equal" sign has been clicked, so if a new number is clicked a reset from the result will take place,
// while if an operator is clicked, the new operation will continue operating from the previous result

var num = '';
var numConstructed;
var result = 0;
var operator = '';
var end = false;

/** Adds a new figure to a string that will be converted into a number */  
function constructNum (digit) {
    num = num + digit;
    document.getElementById('output').innerHTML = num;
}

/** Converts the string of figures to a number and resets the string */ 
function consolidateNum() {
    numConstructed = parseFloat(num);
    num = '';
}

/** The operations are conducted */
function calculateRes() {
    switch(operator) {
        case '':
            result = numConstructed;
            break;
        case 'plus':
            result += numConstructed;
            break;
        case 'minus':
            result -= numConstructed;
            break;
        case 'prod':
            result *= numConstructed;
            break;
        case 'division':
            result /= numConstructed;
            break;
    }
}

/** Reset everything, so a new operation can be done */
function reset() {
    document.getElementById('output').innerHTML = 0;
    num = '';
    result = 0;
    operator = '';
}

/** Slices the last figure of the string if required */
function delDigit() {
    var sliced;
    
    if(num !== '') {
        sliced = num.slice(0, num.length - 1);

        if(sliced.length === 0) {
            sliced = 0;
        }

        num = sliced;
        document.getElementById('output').innerHTML = sliced;
    }
}

//We listen all the events from the user
document.getElementById('zero').addEventListener('click', calculator);
document.getElementById('one').addEventListener('click', calculator);
document.getElementById('two').addEventListener('click', calculator);
document.getElementById('three').addEventListener('click', calculator);
document.getElementById('four').addEventListener('click', calculator);
document.getElementById('five').addEventListener('click', calculator);
document.getElementById('six').addEventListener('click', calculator);
document.getElementById('seven').addEventListener('click', calculator);
document.getElementById('eight').addEventListener('click', calculator);
document.getElementById('nine').addEventListener('click', calculator);
document.getElementById('sum').addEventListener('click', calculator);
document.getElementById('substr').addEventListener('click', calculator);
document.getElementById('divis').addEventListener('click', calculator);
document.getElementById('multip').addEventListener('click', calculator);
document.getElementById('equals').addEventListener('click', calculator);
document.getElementById('ac').addEventListener('click', calculator);
document.getElementById('del').addEventListener('click', calculator);
document.getElementById('dot').addEventListener('click', calculator);

/** The main calculator function. Evaluates all possibilities */
function calculator(e){
    //with a switch we cover all the possibilities
    switch(e.target.id){
        case 'zero':
            //if "equal" sign is clicked, a reset is mandatory, unless a new operation is conducted based on the previous result
            if(end) {
                reset();
                end = false;
            }
            constructNum(0);
                break;
        case 'one':
            if(end) {
                reset();
                end = false;
            }
            constructNum(1);
                break;
        case 'two':
            if(end) {
                reset();
                end = false;
            }
            constructNum(2);
                break;
        case 'three':
            if(end) {
                reset();
                end = false;
            }
            constructNum(3);
                break;
        case 'four':
            if(end) {
                reset();
                end = false;
            }
            constructNum(4);
                break;
        case 'five':
            if(end) {
                reset();
                end = false;
            }
            constructNum(5);
                break;
        case 'six':
            if(end) {
                reset();
                end = false;
            }
            constructNum(6);
                break;
        case 'seven':
            if(end) {
                reset();
                end = false;
            }
            constructNum(7);
                break;
        case 'eight':
            if(end) {
                reset();
                end = false;
            }
            constructNum(8);
                break;
        case 'nine':
            if(end) {
                reset();
                end = false;
            }
            constructNum(9);
                break;
        case 'dot':
            if(end) {
                reset();
                end = false;
            }
            constructNum('.');
                break;
        case 'sum':
            //if "equal" sign is clicked, a reset is mandatory, unless a new operation is conducted based on the previous result
            end = false;
            if(num !== '') {
                consolidateNum();
                calculateRes();
            }
            operator = 'plus';
            break;
        case 'substr':
            end = false;
            if(num !== '') {    
                consolidateNum();
                calculateRes();
            }
            operator = 'minus';
            break;
        case 'multip':
            end = false;
            if(num !== '') {    
                consolidateNum();
                calculateRes();
            }
            operator = 'prod';
            break;
        case 'divis':
            end = false;
            if(num !== '') {
                consolidateNum();
                calculateRes();
            }
            operator = 'division';
            break;          
        case 'equals':
            end = true;
            if(num !== '') {    
                consolidateNum();
                calculateRes();
                document.getElementById('output').innerHTML = +result.toFixed(15);
            }
            break;
        case 'del':
            delDigit();
            break;
        case 'ac':
            reset();
            break;
    }
}