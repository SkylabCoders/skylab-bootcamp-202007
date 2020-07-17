function calculadora (num1, num2) {
    var resultados = [];
    var resultado= 0;
    if (!isNaN(num1) && num2 == undefined) {
     //Diferenciamos si entra un solo número para realizar la raiz cuadrada;
        resultados.push(Math.sqrt(num1).toFixed(3));
        console.log(resultados);
    } else if (isNaN(num1) || isNaN(num2)){
    //Avisamos al usuario si uno de uno de los valores no es un numero;
        console.log('El valor o los valores introducidos no son un numero');  
    } else {
    //Realizamos las operaciones, redondeamos usando la función definida posteriormente y las almacenamos en el array de resultados;
        resultado = (num1 + num2);
        resultado = redondeo(resultado);
        resultados.push(num1 + '+' + num2 + '=' + resultado);
        resultado = (num1 - num2);
        resultado = redondeo(resultado);
        resultados.push(num1 + '-' + num2 + '=' + resultado);
        resultado = (num1 * num2);
        resultado = redondeo(resultado);
        resultados.push(num1 + '*' + num2 + '=' + resultado);
        resultado = (num1 / num2);
        resultado = redondeo(resultado);
        resultados.push(num1 + '/' + num2 + '=' + resultado);
        console.log(resultados);
    }
}
//Función para realizar el redondeo (hasta 3 decimales como máximo) de los numeros con decimales;
function redondeo(resultado){
    resultado = resultado.toString();
    // Comprobar si hay decimales o no;
    if (resultado.indexOf('.') >= 0) {
        for (var i = (resultado.indexOf('.')+3); resultado.indexOf('.') <= i ; i--){
            if (resultado.substring((resultado.indexOf('.')+1),(resultado.indexOf('.')+4)) == '000') {
                //si hay decimales pero los tres primeros son 000 devolveremos un numero entero;
                resultado = resultado.substring(0, resultado.charAt('.')+1);
                break;
            } else if(resultado.charAt(i) == '0' ) {
                // quitamos los decimales que no contengan valor numerico;
                resultado= resultado.substring(0, (i));
            } else {
                // en caso de que tenga resultado con valor numerico nos devolverá el numero con decimales;
                resultado = resultado.substring(0, i+1);
                break;
            }
        }
    }
    return resultado
}

calculadora('hola',3);

