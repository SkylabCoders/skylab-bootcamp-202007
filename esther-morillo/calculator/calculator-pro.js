var numerosTotal = [];
var addNum = 0;
var numerosTotalSinNaN = numerosTotal;
var otroNum;

var num = parseFloat(prompt('Introduce un número'));

    while (isNaN(num)) {
        num = parseFloat(prompt('Introduce un número válido'));
    }
    numerosTotal.push(num);  

preguntaNumero2();

function preguntaNumero2() {   
otroNum = prompt('¿Quieres introducir otro número?');
comprobarNumero();
}

function preguntaErrorNumero2() {
    otroNum = prompt('No es válido. ¿Quieres introducir otro número?');
    comprobarNumero();
}


function comprobarNumero() {
    
    if (otroNum == null) {
        numerosTotalSinNaN = numerosTotal.filter(value => !Number.isNaN(value));
        calculator();
    } else if (otroNum == '' || isNaN(otroNum)){
        preguntaErrorNumero2();
    } else {
        otroNum = Number(otroNum);
        numerosTotal.push(otroNum);
        calculator();
    }
}


function calculator(){
    function sum(){     
        var resultSum = 0;
            for (argument in arguments) {
                resultSum += arguments[argument];    
            }
        return resultSum; 
    }
    
    function rest(){     
        var resultRest = numerosTotalSinNaN[0] + numerosTotalSinNaN[0];
            for (argument in arguments) {
                resultRest -= arguments[argument];
            }
        return resultRest;
    }
    
    function mult(){     
        var resultMult = 1;
            for (argument in arguments) {
                resultMult *= arguments[argument];    
            }
        return resultMult; 
    }
    
    function div(){     
        var resultDiv = Math.pow(numerosTotalSinNaN[0], 2);
            for (argument in arguments) {
                resultDiv /= arguments[argument];    
            }
        return resultDiv; 
    }
    console.log(`La suma de los número introducidos (${numerosTotalSinNaN}) es ${sum(...numerosTotalSinNaN)}`);
    console.log(`La resta de los número introducidos (${numerosTotalSinNaN}) es ${rest(...numerosTotalSinNaN)}`);
    console.log(`La multiplicación de los número introducidos (${numerosTotalSinNaN}) es ${mult(...numerosTotalSinNaN)}`);
    console.log(`La división de los número introducidos (${numerosTotalSinNaN}) es ${div(...numerosTotalSinNaN)}`);
}

function volver(){
    var pregunta = prompt('¿Quieres volver a añadir otro número?', 'S/N').toLowerCase();
    switch(pregunta) {
        case 's':
            console.log('¡Genial! Añade otro ;)');
            addNum = parseFloat(prompt('¿Qué número quieres añadir?'));
            numerosTotal.push(addNum);
            numerosTotalSinNaN = numerosTotal.filter(value => !Number.isNaN(value));
            calculator();
            volver();
            break;
        case 'n':
            console.log('¡Hasta la próxima!');
            break;
        default:
            console.log('No has escogido S o N');
            volver();
    }
}

volver();