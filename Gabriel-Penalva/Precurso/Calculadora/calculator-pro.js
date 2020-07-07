const CSUM = 0;
const CMINUS = 1;
const CMLTIPLY = 2;
const CDIV = 3;

var results = [];
var numbers = [];

var sum = function (num1, num2) {
    return +num1 + +num2;
}
var minus = function (num1, num2) {
    return num1 - num2;
}
var multiply = function (num1, num2) {
    return num1 * num2;
}
var division = function (num1, num2) {
    if (num2 != 0)
        return num1 / num2;
    else                    //Catch the 0 division error
        return "infinite";
}
var sqrt = function (num1) {
    if (num1 != -1)
        return Math.sqrt(num1);
    else                    //Catch  the -1 square root indefinition.
        return "imaginary number 'i'";
}
//to show only 3 decimals if it is necesary/* victoriarizex */
function fixed(x) {
    if (Number.isInteger(x) || isNaN(x))
        return x;
    else
        return Number.parseFloat(x).toFixed(3);
}
//calculate operations and return an array of results.
function calculator(numrs) {

    if (numrs.length >= 2) {
        var previous = new Array(4);
        previous[CSUM] = previous[CMINUS] = previous[CMLTIPLY] = previous[CDIV] = numrs[0];
        numrs.shift();//we quit the first element
        numrs.forEach(num => {

            console.log(numrs , num);
            previous[CSUM] = fixed(sum(previous[CSUM], num));
            previous[CMINUS] = fixed(minus(previous[CMINUS], num));
            previous[CMLTIPLY] = fixed(multiply(previous[CMLTIPLY], num));
            previous[CDIV] = fixed(division(previous[CDIV], num));
        });
        return previous;

    } else {
        return fixed(sqrt(numrs[0]));
    }
}
var option;
do {
    //Keep asking even gets a valid number
    do {
        numbers[0] = prompt("Write the first parameter.");
        if (isNaN(numbers[0]) || numbers[0] == '')
            console.log("Must be a number!, Cannot be empty");
    } while (isNaN(numbers[0]) || numbers[0] == '');

    // Ask for another number, stops on empty answer
    var i = 0;
    do {
        i++; //increment here and we start at position 1
        do {
            numbers[i] = prompt("Write the next parameter. If you don't want more numbers let it empty.");
            if (isNaN(numbers[i]))
                console.log("Must be a number!");
        } while (isNaN(numbers[i]));
    } while (numbers[i] != '')
    // we use pop for remove the last item of array, that must be '' (empty)
    numbers.pop();
    results = calculator(numbers.slice(0));
    //print the results.
    if (Array.isArray(results) && results.length > 1) {
        console.info("The numbers are:", numbers, "\nTheir sum is", results[CSUM], "\nIts subtraction is:", results[CMINUS], "\nTheir multiple is:", results[CMLTIPLY], "\nAnd their division is:", results[CDIV]);
    } else
        console.info("The square root of", numbers[0], "is:", results);

    option = prompt("New numbers? y/n");
    //reset the variables for a new operation
    results = [];
    numbers = [];
} while (option == "y")
console.log('Bye!');
