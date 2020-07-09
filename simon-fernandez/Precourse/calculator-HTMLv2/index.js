/**
 *
 * @calculator-HTML
 * @simonbesteiro Simón Fernández Besteiro <simonbesteiro@gmail.com>
 *
 * Created at: 2020-06-30 
 */  
/*
FALLOS:
Usar el queryall para trabajar sobre los elementos sin tantas variables
controlar que no se sale de la pantalla los numeros
MEJORAS:
poner la operacion en la parte superior de screen y abajo el resultado
*/
var screen = document.getElementById("display");
var inputCalc = screen.innerText;
var num0 = document.getElementById("0");
var num1 = document.getElementById("1");
var num2 = document.getElementById("2");
var num3 = document.getElementById("3");
var num4 = document.getElementById("4");
var num5 = document.getElementById("5");
var num6 = document.getElementById("6");
var num7 = document.getElementById("7");
var num8 = document.getElementById("8");
var num9 = document.getElementById("9");
var ac = document.getElementById("AC");
var reverse = document.getElementById("reverse");
var division = document.getElementById("division");
var multiplication = document.getElementById("multiplication");
var substraction = document.getElementById("substraction");
var add = document.getElementById("add");
var coma = document.getElementById("coma");
var equal = document.getElementById("equal");

ac.addEventListener("click",function (){
    screen.innerText="0";
})
reverse.addEventListener("click",function (){
    var cut = screen.innerText;
    var cutArray =[];
    screen.innerText="";
    for (var i = 0; i < cut.length; i++) cutArray.push(cut[i]);    
    cutArray.pop(); 
    for (var i = 0; i < cutArray.length; i++)screen.innerText+=cutArray[i];
})
num0.addEventListener("click",function (){
    if (screen.innerText==="0") screen.innerText="0";
    else screen.innerText+="0";
})
num1.addEventListener("click",function (){
    if (screen.innerText==="0") screen.innerText="1";      
    else screen.innerText+="1";
})
num2.addEventListener("click",function (){
    if (screen.innerText==="0") screen.innerText="2";      
    else screen.innerText+="2";
})
num3.addEventListener("click",function (){
    if (screen.innerText==="0") screen.innerText="3";      
    else screen.innerText+="3";
})
num4.addEventListener("click",function (){
    if (screen.innerText==="0") screen.innerText="4";      
    else screen.innerText+="4";
})
num5.addEventListener("click",function (){
    if (screen.innerText==="0") screen.innerText="5";      
    else screen.innerText+="5";
})
num6.addEventListener("click",function (){
    if (screen.innerText==="0") screen.innerText="6";      
    else screen.innerText+="6";
})
num7.addEventListener("click",function (){
    if (screen.innerText==="0") screen.innerText="7";      
    else screen.innerText+="7";
})
num8.addEventListener("click",function (){
    if (screen.innerText==="0") screen.innerText="8";      
    else screen.innerText+="8";
})
num9.addEventListener("click",function (){
    if (screen.innerText==="0") screen.innerText="9";      
    else screen.innerText+="9";
})
division.addEventListener("click",function (){
    if (screen.innerText!=="0") if (!checkOperators(screen.innerText)) screen.innerText+="÷";
})
multiplication.addEventListener("click",function (){
    if (screen.innerText!=="0") if (!checkOperators(screen.innerText)) screen.innerText+="X";
})
substraction.addEventListener("click",function (){
    if (screen.innerText!=="0") if (!checkOperators(screen.innerText)) screen.innerText+="-";
})
add.addEventListener("click",function (){
    if (screen.innerText!=="0") if (!checkOperators(screen.innerText))screen.innerText+="+";      
})
coma.addEventListener("click",function (){
    if (screen.innerText!=="0") if (!checkOperators(screen.innerText)) screen.innerText+=".";
})
equal.addEventListener("click",function (){
    inputCalc = screen.innerText;
    for (var i = 0; i < inputCalc.length; i++) {
        switch (inputCalc[i]) {
            case "+":
                addFunction(cutString(inputCalc,i));
                break;
            case "-":
                substractionFunction(cutString(inputCalc,i));
                break;
            case "÷":
                divisionFunction(cutString(inputCalc,i));
                break;
            case "X":
                multiplicationFunction(cutString(inputCalc,i));
                break;
            default:
                break;
        }
    }
})
function addFunction(sub) {
    var result=0;
    for (var j = 0; j < sub.length; j++) {
        result+=sub[j];
    }   
    screen.innerText=result;
}
function substractionFunction(sub) {
    var result=0;
    for (var j = 0; j < sub.length; j++) {
        if (j===0) result += sub[j];
        else result-=sub[j];
    }   
    screen.innerText=result;
}
function divisionFunction(sub) {
    var result=0;
    for (var j = 0; j < sub.length; j++) {
        if (j===0) result += sub[j];
        else result/=sub[j];
    }   
    screen.innerText=result;
}
function multiplicationFunction(sub) {
    var result=0;
    for (var j = 0; j < sub.length; j++) {
        if (j===0) result += sub[j];
        else result*=sub[j];
    }   
    screen.innerText=result;
}
//It cuts the string from the display into an array
function cutString (inputCalc,i) {
    var sub=[];
    sub.push(parseFloat(inputCalc.substring(0,i)));
    sub.push(parseFloat(inputCalc.substring(i+1,inputCalc.length)));
    return sub;
}
//Avoids the user can set several operators 
function checkOperators(inputCalc) {
    if (inputCalc[inputCalc.length-1] === "+" | inputCalc[inputCalc.length-1]=== "-" | inputCalc[inputCalc.length-1]=== "÷" | inputCalc[inputCalc.length-1]=== "X" | inputCalc[inputCalc.length-1]=== "," ) return true;
    else return false;
}

