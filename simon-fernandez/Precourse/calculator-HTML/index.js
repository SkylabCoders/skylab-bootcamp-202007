/**
 *
 * @calculator
 * @simonbesteiro Simón Fernández Besteiro <simonbesteiro@gmail.com>
 *
 * Created at: 2020-01-20 
 */
//First input
function firstInput() {
    num1 = prompt("Insert the first number", "");
}
//Second input
function secondInput() {
    num2 = prompt("Insert the second number", "");
}
//calculate the sum of num1 and num2
function sum(num1, num2) {
    myArray.push(num1 + num2);
}
//calculate the substraction of num1 and num2
function sub(num1, num2) {
    myArray.push(num1 - num2);
}
//calculate the multiplication of num1 and num2
function multi(num1, num2) {
    myArray.push(num1 * num2);
}
//calculate the division of num1 and num2
function divi(num1, num2) {
    myArray.push(num1 / num2);
}
//Control the decimals on the given value
function decimals(controlDecimals) {
    controlDecimals = controlDecimals.toFixed(3);
    while (controlDecimals[controlDecimals.length - 1] === "0" || controlDecimals[controlDecimals.length - 1] === ".") {
        debugger;
        controlDecimals = controlDecimals.substring(0, controlDecimals.length - 1);
    }
    return controlDecimals;
}
//varibles containing the input vaulues
var num1;
var num2;
//array which saves the results
var myArray = [];
firstInput();
//check the variable num1 is a number
while (isNaN(parseFloat(num1))) {
    window.alert("The first value is not numeric");
    firstInput();

}
secondInput();
//check the second number is a number
while (isNaN(parseFloat(num2)) && num2 != "") {
    window.alert("The second value is not numeric");
    secondInput();
}
if (num2 == "") {
    console.log("The square value of " + num1 + " is " + Math.sqrt(num1).toFixed(3));
}
else {
    //call the functions which saves the values on the array and shows them on the console
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    sum(num1, num2);
    sub(num1, num2);
    multi(num1, num2);
    divi(num1, num2);
    console.log("The sum is " + decimals(myArray[0]));
    console.log("The substraction is " + decimals(myArray[1]));
    console.log("The multiplication is " + decimals(myArray[2]));
    console.log("The division is " + decimals(myArray[3]));
}


