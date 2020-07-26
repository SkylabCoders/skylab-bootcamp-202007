function calculator() {

    var nums = [];    // Se declara el array nums donde se guardarán los números introducidos por el usuario
    var result = [];  // Se declara el array result que devuelve por pantalla el resultado de las operaciones

    /*
        function countDecimals (x) {    // Esta función cuenta los decimales, calcula la posición del "." y la longitud tras él
            var number=x.toString();
            var index=number.indexOf(".");
            return (number.length-index-1);
        }
            
        function roundTo3 (x) { // Esta función escucha el valor devuelto en la función countDecimals
            if (countDecimals(x) > 3) { // Si el valor return de la función anterior tiene más de 3 decimales, redondeará a 3
                return x.toFixed(3);
            }
            else {
                return x;
            }
        }
    */

    function roundTo3(num) {
        return +(Math.round(num + "e+3") + "e-3");
    }

    function squareRoot(x) { return roundTo3(Math.sqrt(x)); }  // Todas las funciones de operadores: squareRoot, sum, subtract, multiply, divide
    function sum(x, y) { return roundTo3(x + y); }    // A todas ellas se le aplica la condición descrita en la función roundTo3
    function subtract(x, y) { return roundTo3(x - y); }
    function multiply(x, y) { return roundTo3(x * y); }
    function divide(x, y) { return roundTo3(x / y); }

    function askNumbers() {    // Función que pide dos números al usuario. La verificación de datos se aplicá más adelante en una serie de while e if, if else
        for (var i = 0; i < 2; i++) {
            nums[i] = (parseFloat(prompt("Porfavor, introduce un número:")));
        }
    }

    askNumbers();  // Se llama a la función askNumbers

    while ((isNaN(nums[0])) && isNaN(nums[1])) {    // Mientras ninguno de los dos valores sea numérico, el programa los pedirá de forma reiterada
        alert("Los valores introducidos no són números. Por favor, prueba otra vez.");
        askNumbers();
    }
    if (!(isNaN(nums[0])) && !(isNaN(nums[1]))) {   // Si verifica que ambos son números, mostrará por pantalla todas las operaciones
        result.push(nums[0] + ' + ' + nums[1] + ' = ' + sum(nums[0], nums[1]), nums[0] + ' - ' + nums[1] + ' = ' + subtract(nums[0], nums[1]), nums[0] + ' × ' + nums[1] + ' = ' + multiply(nums[0], nums[1]), nums[0] + ' ÷ ' + nums[1] + ' = ' + divide(nums[0], nums[1]))
        console.log(result);
    }
    else if (!(isNaN(nums[0])) && isNaN(nums[1])) { // Ambos else if comprueban que al menos uno de los valores no sea un NaN, y devuelven la raíz cuadrada del valor numérico
        result.push(squareRoot(nums[0]));
        console.log(result);
    }
    else if (isNaN(nums[0]) && !(isNaN(nums[1]))) {
        result.push(squareRoot(nums[1]));
        console.log(result);
    }
}
calculator();