'use strict';

function Calculator() {
    let writeScreen = document.querySelector('.screen');
    let buttons = document.querySelector('.buttons');


    buttons.addEventListener('click', function (event) {
        if (event.target != screen) {
            switch (event.target.textContent) {
                case 'AC':
                    resetScreen();
                    break;
                    //No tiene nada, la imagen se la he puesto en css
                case '':
                    writeDelete();
                    break;
                case ',':
                    writeOperation('.');
                    break;
                case 'x':
                    writeOperation('*');
                    break;
                case '÷':
                    writeOperation('/');
                    break;
                case '=':
                    writeResult();
                    break;
                default:
                    writeOperation(event.target.textContent);
                    break;
            }
        }
    });

    function writeOperation(text) {

        let numbers;
        // if (text === '0' && text !== '.') {
        //     writeScreen.textContent = '';
        // }
        console.log(text);
        numbers += text;

        writeScreen.textContent = text;


        if (writeScreen === '+' || writeScreen === '-' || writeScreen === '*' || writeScreen === '/') {

        }
    };

    function writeOperation() {

    };

    function resetScreen() {
        writeScreen.textContent = 0;
    };

    return {
        writeOperation
    };

};


const calculate = Calculator();

calculate.writeOperation;