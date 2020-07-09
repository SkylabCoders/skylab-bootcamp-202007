//functions 
var sum = function () {
    return +num1 + +num2;
}
var minus = function () {
    return num1 - num2;
}
var multiply = function () {
    return num1 * num2;
}
var division = function () {
    if (num2 != 0)
        return num1 / num2;
    else                    //Catch the 0 division error
        return "infinite";
}
var sqrt = function () {
    if (num1 != -1)
        return Math.sqrt(num1);
    else                    //Catch  the -1 square root indefinition.
        return "imaginary number 'i'";
}
//to show only 3 decimals if it is necesary
function fixed(x) {
    if (Number.isInteger(x) || isNaN(x))
        return x;
    else
        return Number.parseFloat(x).toFixed(3);
}
//calculate operations and print result
function calculator(num1, num2) {

    var array = [];
    array.push(fixed(sum()));
    array.push(fixed(minus()));
    array.push(fixed(multiply()));
    array.push(fixed(division()));
    array.push(fixed(sqrt()));
    return array;
}
var option;
do {
    //Keep asking even gets a valid number
    do {
        num1 = prompt("Write the first parameter.");
        if (isNaN(num1) || num1 == '')
            console.log("Must be a number!, Cannot be empty");
    } while (isNaN(num1) || num1 == '');

    // Second number Can be Empty, if it is, will be get the sqrt of num1
    do {
        num2 = prompt("Write the second parameter.");
        if (isNaN(num2))
            console.log("Must be a number!");
    } while (isNaN(num2));

    var results = calculator(num1, num2);
    //print the results.
    if (num2 != '') {
        console.info("The numbers are:", num1, "and", num2, "\nTheir sum is", results[0], "\nIts subtraction is:", results[1], "\nTheir multiple is:", results[2], "\nAnd their division is:", results[3]);
    } else
        console.info("The square root of", num1, "is:", results[4]);

    option = prompt("New numbers? y/n");
} while (option == "y")
console.log ('Bye!');
