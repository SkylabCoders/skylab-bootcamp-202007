'use strict';

function Calc() {
    let start = true;
    let screen = '';
    let result = 0;
    let typeOp = '';
    const numbers = document.querySelectorAll('#num1, #num2, #num3, #num4, #num5, #num6, #num7, #num8, #num9, #num0, #coma')

    function add(num1, num2) {
        start = false;
        screen = '';
        let screenNumb = Number(num2);
        result = +(num1 + screenNumb).toFixed(2);
        document.getElementById('result').innerHTML = result;
        return result;
    }
    function subs(num1, num2) {
        start = false;
        screen = '';
        let screenNumb = Number(num2);
        result = +(num1 - screenNumb).toFixed(2);
        document.getElementById('result').innerHTML = result;
        return result;
    }
    function mult(num1, num2) {
        start = false;
        screen = '';
        let screenNumb = Number(num2);
        result = +(num1 * screenNumb).toFixed(2);
        document.getElementById('result').innerHTML = result;
        return result;
    }
    function div(num1, num2) {
        start = false;
        screen = '';
        let screenNumb = Number(num2);
        result = +(num1 / screenNumb).toFixed(2);
        document.getElementById('result').innerHTML = result;
        return result;
    }
    function del() {
        result = 0;
        screen = '';
        typeOp = '';
        start = true;
        document.getElementById('result').innerHTML = 0;
        return result;
    }
    function operation(type) {
        if (!start) {
            switch (typeOp) {
                case 'suma':
                    add(result, screen);
                    break;
                case 'resta':
                    subs(result, screen);
                    break;
                case 'multi':
                    mult(result, screen);
                    break;
                case 'div':
                    div(result, screen);
                    break;
            }
        } else {
            start = false;
            result = Number(screen);
            screen = '';
        }
        typeOp = type;
    }
    function checkComa() {
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
    function print(value) {
        if (value === '.') {
            checkComa();
        } else if (screen.length > 8) {
            return false;
        } else {
            screen += value;
            document.getElementById('result').innerHTML = screen;
        }
        
    }

    return {numbers, add, subs, mult, div, del, operation, print};
}

const calculator = Calc();