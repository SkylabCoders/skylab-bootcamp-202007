var start = true;
let screen = "";

// Variables of index.html
var b0 = document.querySelector(".b0");
var b1 = document.querySelector(".b1");
var b2 = document.querySelector(".b2");
var b3 = document.querySelector(".b3");
var b4 = document.querySelector(".b4");
var b5 = document.querySelector(".b5");
var b6 = document.querySelector(".b6");
var b7 = document.querySelector(".b7");
var b8 = document.querySelector(".b8");
var b9 = document.querySelector(".b9");
var ac = document.querySelector(".ac");
var coma = document.querySelector(".coma");
var bClear = document.querySelector(".clear");
var sum = document.querySelector(".sum");
var rest = document.querySelector(".rest");
var mult = document.querySelector(".mult");
var div = document.querySelector(".div");
var result = document.querySelector(".result");
var head = document.querySelector("#head");

//Functions screen
function printNumb(num) {
    head.innerHTML += num;
}

//WORKING IN PROGRESS (not working yet)
/*
function clearNum() {
    head.innerHTML = str.substr(0,(head.length-1));
}
*/

//Nested Handlers
b1.addEventListener("click", function (){
    head.innerHTML+= b1.innerHTML ;
});
b2.addEventListener("click", ()=> printNumb("2"));
b3.addEventListener("click", ()=> printNumb("3"));
b4.addEventListener("click", ()=> printNumb("4"));
b5.addEventListener("click", ()=>printNumb(b5.innerHTML));
b6.addEventListener("click", ()=>printNumb(b6.textContent));
b7.addEventListener("click", ()=>printNumb(b7.textContent));
b8.addEventListener("click", ()=>printNumb(b8.textContent));
b9.addEventListener("click", ()=>printNumb(b9.textContent));
bClear.addEventListener("click", ()=> clearNum());

//FUNCIÓN NO PASSAR DE 9 NUMEROS
/*
if (screen.length > 9){    
}
*/