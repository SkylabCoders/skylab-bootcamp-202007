var num1 = 0;
var num2 = 0;
var op = '';
var number = '';
var check = false;
var preResult;

//Guarda los numeros en la variable "number", imprime en pantalla los numeros y va realizando las operaciones en segundo plano.
//El if sirve para poner un limite de caracteres permitidos.
function printInScreen(id) {
    if(number.length < 22){    
        number += id.innerHTML;
        
        document.getElementById("screen").innerHTML = number;

        if(check === true){
            anotherOp();
        }
    }
}

//Establece el operador seleccionado en la variable "op", y utiliza "check" para saber si ya se ha usado un operador o no.
function operator(oper){

    op = oper.innerHTML;

    if(check === false){
        num1 = parseFloat(number);
        number = '';
        check = true;
    } else {
        document.getElementById('screen').innerHTML = preResult;
        num1 = preResult;
        number = '';
    }

}


//Esta funcion realiza las operaciones en segundo plano, guardando el resultado que se va generando por cada numero clickeado.
function anotherOp(){

    num2 = parseFloat(number);

    var result;

    switch (op){
        case "÷":
            result = num1 / num2;
            break;

        case "x":
            result = num1 * num2;
            break;

        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;
    }

    preResult = result;

}

//Imprime en pantalla el resultado final al presionar la tecla "=".
function equalSign (){
    
    document.getElementById('screen').innerHTML = preResult;

}

//Resetea todas las variables para volver a utilizarla.
function reset(){
    document.getElementById("screen").textContent ="0";
    num1 = 0;
    num2 = 0;
    number = '';
    op = '';
    preResult = 0;
    check = false;
}

//Limpia la pantalla y la variable number, para volver a escribir sin perder la operacion anterior.
function ac(){
    document.getElementById("screen").textContent = "0";
    number = '';
}
