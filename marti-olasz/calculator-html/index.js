var ans = 0; //Ultimo resultado
var operation = []; //Numeros y simbolos de la poeracion actual
var position = 0;  //Ultima posicion del input leida

function number(x){
//Function para introducir un numero al input
    if (document.getElementById("input").value == "0") {
        document.getElementById("input").value = x;
    }
    else{
        document.getElementById("input").value += x;
    }
}

function symbol(x){
//Function para introducir un simbolo al input
    if (document.getElementById("input").value == "0" && x == '-') {
        document.getElementById("input").value = x;
    }
    else if(operation.length == 0){
        //Si la array operation esta vacia añadimos los primeros digitos como primer numero y el simbolo de operacion
        operation.push(document.getElementById("input").value);
        operation.push(x);
        position = operation[0].length + 1;
        document.getElementById("input").value += x;
    }
    else{
        //Sino llamamos a solve y añadimos el simbolo al input y a la array 
        solve();
        document.getElementById("input").value += x;
        operation.push(x);
        position += 1;
    }
}

function solve(){
//Funcion para resolver la operacion, es llamada cuando la array operation tiene los dos numeros y el simbolo
    operation.push(document.getElementById("input").value.substr(position));
    ans = calculator(parseFloat(operation[0]),parseFloat(operation[2]),operation[1]);
    document.getElementById("input").value = ans;

    position = ans.toString().length;
    operation = [ans];

}

function calculator(a, b, operation) {
//Funcion para calcular la operacion
    switch (operation) {
        case '+':
            return a + b;
            break;
        case '-':
            return a - b;
            break;
        case '*':
            return a * b;
            break;
        case '/':
            return a / b;
            break;
    }
}

function reset() {
//Funcion para el boton AC
    document.getElementById("input").value = 0;
    operation = [];
}

function dot(){
//Funcion para añadir un punto
    document.getElementById("input").value += '.';
}

function ansF(){
//Funcion para añadir ans al input
    if (document.getElementById("input").value == "0") {
        document.getElementById("input").value = ans;
    }
    else{
        document.getElementById("input").value += ans;
    }
}

