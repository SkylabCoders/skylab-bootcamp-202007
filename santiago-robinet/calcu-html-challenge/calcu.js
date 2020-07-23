'use strict'

function Calc(){
    let num1 = null;
    let num2 = null;
    let numString = '';
    let switcher = false;
    

    function sum(num1, num2){
        screen = num1 + num2;
        return screen;
    }

    function sub(num1, num2){
        screen = num1 - num2;
        return screen;
    }
    
    function mult(num1, num2){
        screen = num1 * num2;
        return screen;
    }
    
    function div(num1, num2){
        screen = num1 / num2;
        return screen;
    }

    function reset(){
        num1 = 0;
        num2 = 0;
        document.getElementById('screen').innerHTML = 0;
        // return 0
    }

    function capture(number){
        if(numString.length  < 18){

            numString += number.innerHTML;
    
            console.log(numString)
    
            document.getElementById('screen').innerHTML = numString; 
        }

    }

    // function ac(){
    //     document.getElementById('screen').innerHTML = 0;
    //     if(switcher ===){

    //     }
    // }
    // function operator(){

    // }


    return {sum, sub, mult, div, reset, capture}

}

const calculator = Calc();