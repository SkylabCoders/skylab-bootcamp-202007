"use strict"

var result = document.getElementById("result");
var reset = document.getElementById("reset");
var deleteLast = document.getElementById("deleteLast");
var divisor = document.getElementById("divisor");
var num7 = document.getElementById("num7");
var num8 = document.getElementById("num8");
var num9 = document.getElementById("num9");
var multiplication = document.getElementById("multiplication");
var num4 = document.getElementById("num4");
var num5 = document.getElementById("num5");
var num6 = document.getElementById("num6");
var rest = document.getElementById("rest");
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var num3 = document.getElementById("num3");
var sumatory = document.getElementById("sumatory");
var num0 = document.getElementById("num0");
var comma = document.getElementById("comma");
var equal = document.getElementById("equal");

var currentTotal = '0';
var savedCurrent = '0';
var operation = '';
var counterComma = 0;

reset.addEventListener("click", function(){resetResult()});
deleteLast.addEventListener("click", function(){resetLast()});
divisor.addEventListener("click", function(){printResult('/')});
num7.addEventListener("click", function(){printResult('7')});
num8.addEventListener("click", function(){printResult('8')});
num9.addEventListener("click", function(){printResult('9')});
multiplication.addEventListener("click", function(){printResult('x')});
num4.addEventListener("click", function(){printResult('4')});
num5.addEventListener("click", function(){printResult('5')});
num6.addEventListener("click", function(){printResult('6')});
rest.addEventListener("click", function(){printResult('-')});
num1.addEventListener("click", function(){printResult('1')});
num2.addEventListener("click", function(){printResult('2')});
num3.addEventListener("click", function(){printResult('3')});
sumatory.addEventListener("click", function(){printResult('+')});
num0.addEventListener("click", function(){printResult('0')});
comma.addEventListener("click", function(){printResult(',')});
equal.addEventListener("click", function(){printResult('=')});


function printResult(number){
  if (currentTotal === "0") {
    currentTotal = number;
    document.getElementById("result").innerHTML = currentTotal;
  } else {
      if(number === ',' & counterComma === 0){
        currentTotal += number; 
        document.getElementById("result").innerHTML = currentTotal;
        counterComma = 1;
      }
      else if(number === '+' || number === '-' || number === 'x' || number === '/'){
        savedCurrent = currentTotal;
        operation = number;
        currentTotal = '0'
        document.getElementById("result").innerHTML = operation;
      }
      else if (number !== ',' && number !== '='){
        currentTotal += number; 
        document.getElementById("result").innerHTML = currentTotal;
      }
      else if (number === '='){ 
        var totalResult = '0';

        switch(operation){
            case "+": 
                totalResult = parseInt(savedCurrent) + parseInt(currentTotal);
                document.getElementById("result").innerHTML = totalResult;
                currentTotal = totalResult;
                //savedCurrent = '0';
                break;
            case "-":
                totalResult = parseInt(savedCurrent) - parseInt(currentTotal);
                document.getElementById("result").innerHTML = totalResult;
                currentTotal = totalResult;
                //savedCurrent = '0';
                break;
            case "x":
                totalResult = parseInt(savedCurrent) * parseInt(currentTotal);
                document.getElementById("result").innerHTML = totalResult;
                currentTotal = totalResult;
                //savedCurrent = '0';
                break;
            case "/":
                totalResult = parseInt(savedCurrent) / parseInt(currentTotal);
                document.getElementById("result").innerHTML = totalResult;
                currentTotal = totalResult;
                //savedCurrent = '0';
                break;
            default: 
            currentTotal = '0';
            savedCurrent = '0';
                break;    
        }
      }
  }
}

function resetResult(){
  document.getElementById("result").innerHTML = '0';
  currentTotal = '0';
  counterComma = 0;
}

function resetLast(){
    document.getElementById("result").innerHTML = savedCurrent;
  }



