"use strict";

var buttons = document.getElementById('buttons');
var result = document.getElementById('result');
var operations = '0';
var operationComplete = false;


function lastValue(){
    //Return the last character
    return operations.substring(operations.length-1);  
}

function writeOperation(text){
    if(operations === '0' && text !== '.') {
        operations = '';
        result.textContent = '';
    }
    
    if(operationComplete && isNaN(text)){
        operations = result.textContent;
        operationComplete = false;
    }

    if(operationComplete && !isNaN(text)){
        result.textContent = '';
        operations = '';
        operationComplete = false;
    }

    //El último valor es un signo y luego el que llega es un número (menos con el punto)
    if(isNaN(lastValue()) && !isNaN(text)) {
        if(lastValue() !== '.'){
            result.textContent = result.textContent.substring(result.textContent.length);
            console.log('yes');
        } 
    }

    //El último metido y comprueba el siguiente escrito
    //Dos símbolos. Sustituimos el último por el nuevo
    if(isNaN(lastValue()) && isNaN(text)){
        operations = operations.substring(0, operations.length-1);
    }
    
    if (result.textContent.length < 12){
        operations += text;
        result.textContent += text; 
    }
     

    if(text === '+' || text === '-' || text === '*' || text === '/'){
        result.textContent = eval(operations.substring(0, operations.length-1));
        operations = eval(operations.substring(0, operations.length-1)).toString() + text;
        console.log('signo');
    }

    //Si la longitud es mayor de 8 cambiamos tamaño
    //pongo el else para restaurarlo, sino se queda pequeño
    if(result.textContent.length > 8){
        result.style.fontSize = '2rem';
    } else {
        result.style.fontSize = '3rem';
    }

    console.log(operations);
} 

function resultReset(){
    result.textContent = '0';
    operations = '';
}

function writeDelete(){
    result.textContent = result.textContent.substring(0, result.textContent.length-1);
    operations = operations.substring(0, operations.length-1);
}

function writeResult(){
    if(isNaN(lastValue())){
        operations = operations.substring(0, operations.length-1);
    }

    result.textContent = eval(operations);
    operationComplete = true;

    //Si la longitud es mayor de 12 bajamos tamaño y cortamos, no emostramos más números
    if(result.textContent.length > 12){
        result.style.fontSize = '2rem';
        result.textContent = result.textContent.substring(0, 12);
        console.log('entra');
    //Si es mayor de 8 solo cambiamos tamaño
    } else if(result.textContent.length > 8){
        result.style.fontSize = '2rem';
    } 
}


buttons.addEventListener('click', function(event){
    if(event.target != result){
        switch(event.target.textContent){
            case 'AC':
                resultReset();
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
})
