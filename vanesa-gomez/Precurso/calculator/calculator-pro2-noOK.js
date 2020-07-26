// Declaramos un array vacío para guardar todos los números.    
    let numbers = [];

    // Array para ir guardando los clicks del usuario y luego transformar a numero
    let visorArray = [];


    let sumResult = 0;
    let restResult = 0;
    let multResult = 0;
    let divResult = 0;

// La función mira si el número es entero, de lo contrario fija únicamente 3 decimales:
    function fixeDecimals(num) {
        if(!isNaN(num)) {
            if (num % 1 === 0) {
                return num
            } else {
                return num.toFixed(3)
            }
        } 
    }

// Filtramos los números y almacenamos en 'numbers'.
    /*for(let i = 0; i < arguments.length; i++) {
        if(!isNaN(arguments[i])) {
            numbers.push(arguments[i]);
        }
    }*/

    // Comprobaciones para saber qué queremos hacer en casa caso:
    // Guardamos en una variable el length del array porque lo usaremos luego para no repetir código.
    
    const numbersLength = numbers.length;

    // Si no hay ningún número:
    if(numbers.length === 0) {
        console.log('Debe ingresar al menos un número');
    } 
    // Si sólo hay un número:
    if(numbers.length === 1) {
        const squareRoot = fixeDecimals(Math.sqrt(numbers[0]));
        console.log(`La raíz cuadrada de ${numbers[0]} es ${squareRoot}`)
    }
    // Si hay más de un número:
    if(numbers.length > 1) {
        const sum = function (accumulator, currentValue) {
            return accumulator + currentValue
        }
        const rest = function (accumulator, currentValue) {
            return accumulator - currentValue
        }
        const mult = function (accumulator, currentValue) {
            return accumulator * currentValue
        }
        const div = function (accumulator, currentValue) {
            return accumulator / currentValue
        }
    
    sumResult = fixeDecimals(numbers.reduce(sum));
    restResult = fixeDecimals(numbers.reduce(rest));
    multResult = fixeDecimals(numbers.reduce(mult));
    divResult = fixeDecimals(numbers.reduce(div));

    console.log(`
    Suma: ${sumResult},
    Resta: ${restResult},
    Multiplicación: ${multResult},
    División: ${divResult}`);
    }   


// Esta función guardará el valor actual de la pantalla
function saveNumber(number){
    if(visorArray.join("").length <= 20){
        visorArray.push(number);
        console.log(visorArray);
        let visorValue = visorArray.join("");
        
        //console.log(visorValue);
        document.getElementById("visor").innerHTML = visorValue;
    }
}

// Esta funcion borra todo lo que se vea en el visor
function clearOne() {
    visorArray = [];
    document.getElementById("visor").innerHTML = 0;
}

// Esta función guardará la operación que desee hacer el usuario.


