var resultados = [];
var resultSum = 0;
var resultRest = 0;
var resultMult = 0;
var resultDiv = 0;

var num1 = parseFloat(prompt('Introduzca el primer número'));
var num2 = parseFloat(prompt('Introduzca el segundo número'));


while (isNaN(num1) && isNaN(num2)){
    alert('Introduce al menos un número');
    num1 = parseFloat(prompt('Introduzca el primer número'));
    num2 = parseFloat(prompt('Introduzca el segundo número'));
}


if (isNaN(num1)) {
    var resultCuad02 = Math.sqrt(num2);
    if (num2 % 1 == 0) {
        console.log(`La raíz cuadrada de ${num2} es ${resultCuad02}`)
    } else {
        console.log(`La raíz cuadrada de ${num2} es ${resultCuad02.toFixed(3)}`);
    }

} else if (isNaN(num2)) {
    var resultCuad01 = Math.sqrt(num1);
    if (num1 % 1 == 0) {
        console.log(`La raíz cuadrada de ${num1} es ${resultCuad01}`)
    } else {
        console.log(`La raíz cuadrada de ${num1} es ${resultCuad01.toFixed(3)}`);
}

} else {
    resultSum = num1 + num2;
    resultRest = num1 - num2;
    resultMult = num1 * num2;
    resultDiv = num1 / num2;

        // He tenido muchos problemas para hacer que, si el nº tiene muchos decimales, dejarle solo 3 (No sé si esta solución es correcta)
        if ((num1 % 1 != 0) && (num2 % 1 != 0)){
            num1 = num1.toFixed(3);
            num2 = num2.toFixed(3);
            resultSum = resultSum.toFixed(3);
            resultRest = resultRest.toFixed(3);
            resultMult = resultMult.toFixed(3);
            resultDiv = resultDiv.toFixed(3);
        } else if ((num1 % 1 != 0) && (num2 % 1 == 0)){
            num1 = num1.toFixed(3);
            resultSum = resultSum.toFixed(3);
            resultRest = resultRest.toFixed(3);
            resultMult = resultMult.toFixed(3);
            resultDiv = resultDiv.toFixed(3);
        } else if ((num1 % 1 == 0) && (num2 % 1 != 0)){
            num2 = num2.toFixed(3);
            resultSum = resultSum.toFixed(3);
            resultRest = resultRest.toFixed(3);
            resultMult = resultMult.toFixed(3);
            resultDiv = resultDiv.toFixed(3);
        }  

    resultados.push(`${num1} + ${num2} = ${resultSum}, ${num1} - ${num2} = ${resultRest}, ${num1} * ${num2} = ${resultMult}, ${num1} / ${num2} = ${resultDiv}`);
    
    console.log(`El resultado de todas las operaciones con tus números son: ${resultados}`);
}




