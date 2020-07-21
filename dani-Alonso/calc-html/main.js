function Calc() {
    const [
        button7,
        button8,
        button9,
        button4,
        button5,
        button6,
        button1,
        button2,
        button3,
        button0,
        buttonComa,
        buttonEqual,
        buttonAC,
        buttonSum,
        buttonRest,
        buttonMult,
        buttonDiv
    ] = document.querySelectorAll('.num');

    const button = [
        button7,
        button8,
        button9,
        button4,
        button5,
        button6,
        button1,
        button2,
        button3,
        button0,
        buttonComa,
        buttonEqual,
        buttonAC,
        buttonSum,
        buttonRest,
        buttonMult,
        buttonDiv
    ];
    for (let i = 0; i < button.length; i++) {
        debugger;
        button[i].addEventListener('click', () => {
            return (currentNumber = number.target(button[i].innerHTML));
        });
    }
    //let screen = '';
    let sum = function(a, b) {
        result = a + b;
        return result;
    };
    let rest = function(a, b) {
        result = a - b;
        return result;
    };
    let mult = function(a, b) {
        result = a * b;
        return result;
    };
    let div = function(a, b) {
        result = a / b;
        return result;
    };

    let ac = function() {
        return 0;
    };

    let screen = function() {};

    return { sum, rest, mult, div, ac };
}