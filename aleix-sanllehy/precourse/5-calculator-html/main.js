'use strict';
let result = document.getElementById("result");
let num = "0";
let numbers = ["", ""];
let operator;

// the first two functions 
function clearNumber() {
	document.querySelector("#result").innerHTML = 0;
	num = "0";
}

function deleteLastChar() {
	num = num.slice(0, num.length - 1);
	if (num.length === 0) {
		num = "0";
	}
	console.log("creating number... : " + num);
	document.getElementById("result").innerHTML = num;
}
// clearAll resets the calculator to a starting point
function clearAll() {
	clearNumber();
	numbers = ["", ""];
	operator = null;
}

// provided we get some decimals on the result number, we cut them at a maximum of four
function roundTo4(num) {
	return +(Math.round(num + "e+4") + "e-4");
}

// this function registers every number key we press
// the if statement prevent any chance of getting leading zeroes
function addToNum(numValue) {
	if (num === "0") {
		num = num.slice(1);
	}
	num += numValue;
	console.log("creating number... : " + num);
	document.getElementById("result").innerHTML = num;
}

// this function adds the decimal notation needed, only once
function addDecimalToNum() {
	if (num.length === 0 || num === "0" || num === "") {
		addToNum("0.");
	}
	else if (!num.includes(".")) {
		addToNum(".");
	}
}

// this function pivots the current number to the array as soon as an operator is set
// as soon as we have an operator and the first two positions of the numbers array filled, the calculate function is called
function setOperator(operatorValue) {
	if (!operator) {
		numbers[0] = num;
		console.log ("numbers[0] : " + numbers[0]);
		numbers[0] = parseFloat(numbers[0]);
		num = "0";
		operator = operatorValue;
		if (operator === "=") {
			numbers[0] = calculate(numbers, operator);
			document.getElementById("result").innerHTML = numbers[0];
		}
	}
	else if (num !== "") {
		numbers[1] = num;
		numbers[1] = parseFloat(numbers[1]);
		num = "0";
		console.log (operator);
		numbers[0] = calculate(numbers, operator);
		operator = "";
	}
	operator = operatorValue;
	document.getElementById("result").innerHTML = numbers[0];
}

// this function acts as a switch for every operator key given
function calculate(numbers, operator) {
	switch (operator) {
		case "+":
			numbers[0] = numbers[0] + numbers[1];
			break;
		case "-":
			numbers[0] = numbers[0] - numbers[1];
			break;
		case "*":
			numbers[0] = numbers[0] * numbers[1];
			break;
		case "/":
			numbers[0] = numbers[0] / numbers[1];
			break;
		case "=":
			numbers[0] = roundTo4(numbers[0]);
			return numbers[0];
			break;
	}
	numbers[0] = roundTo4(numbers[0]);
	console.log("result : " + numbers[0]);
	return numbers[0];
}

// declaration of every calculator key

let num0Button = document.querySelector("#num0");
let num1Button = document.querySelector("#num1");
let num2Button = document.querySelector("#num2");
let num3Button = document.querySelector("#num3");
let num4Button = document.querySelector("#num4");
let num5Button = document.querySelector("#num5");
let num6Button = document.querySelector("#num6");
let num7Button = document.querySelector("#num7");
let num8Button = document.querySelector("#num8");
let num9Button = document.querySelector("#num9");
let decimalButton = document.querySelector("#decimal");

let backButton = document.querySelector("#back");
let clearNumberButton = document.querySelector("#clearnumber");
let clearAllButton = document.querySelector("#clearall");

let addButton = document.querySelector("#add");
let subtractButton = document.querySelector("#subtract");
let multiplyButton = document.querySelector("#multiply");
let divideButton = document.querySelector("#divide");
let equalButton = document.querySelector("#equal");

// added the proper listeners to any declared key
num0Button.addEventListener("click", function () { addToNum(0); });
num1Button.addEventListener("click", function () { addToNum(1); });
num2Button.addEventListener("click", function () { addToNum(2); });
num3Button.addEventListener("click", function () { addToNum(3); });
num4Button.addEventListener("click", function () { addToNum(4); });
num5Button.addEventListener("click", function () { addToNum(5); });
num6Button.addEventListener("click", function () { addToNum(6); });
num7Button.addEventListener("click", function () { addToNum(7); });
num8Button.addEventListener("click", function () { addToNum(8); });
num9Button.addEventListener("click", function () { addToNum(9); });

decimalButton.addEventListener("click", function () { addDecimalToNum(); });

backButton.addEventListener("click", function () { deleteLastChar(); });
clearNumberButton.addEventListener("click", function () { clearNumber(); });
clearAllButton.addEventListener("click", function () { clearAll(); });

add.addEventListener("click", function () { setOperator("+"); });
subtract.addEventListener("click", function () { setOperator("-"); });
multiply.addEventListener("click", function () { setOperator("*"); });
divide.addEventListener("click", function () { setOperator("/"); });
equalButton.addEventListener("click", function () { setOperator("="); });

/* ignore this code, just testing a different approach to get the functions to work
document.querySelector(".key").onclick = function () {
	switch (document.(".key").innerHTML) {
	case "0": addToNum (0); break;
	case "1": addToNum (1); break;
	case "2": addToNum (2); break;
	case "3": addToNum (3); break;
	case "4": addToNum (4); break;
	case "5": addToNum (5); break;
	case "6": addToNum (6); break;
	case "7": addToNum (7); break;
	case "8": addToNum (8); break;
	case "9": addToNum (9); break;
	}
}*/