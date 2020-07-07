/*** 
 * CALCULATOR 
 * 
*/

//  Declaration of variables and regEx patterns
let firstNumber = parseFloat(prompt("Please, introduce the first number: "))
let secondNumber = parseFloat(prompt("Please, introduce the second number: "))
let intPattern = /^[1-9]\d*(\.\d+)?$/
let notIntPattern = /^\D+$/
let results = []

//  This function make cals and also display results in the console
const MAKECALCS = (firstNumber, secondNumber) => {
    //  If bot parameters are numbers this part is beign executed
    if (intPattern.test(firstNumber) && intPattern.test(secondNumber))
        console.log(
        `
        Calcs: \n 
        The sum is : ${limitDeciamlsandPush(firstNumber + secondNumber)} \n 
        The subtraction is : ${limitDeciamlsandPush(firstNumber - secondNumber)} \n 
        The product is :  ${limitDeciamlsandPush(firstNumber * secondNumber)} \n
        The quotient is: ${limitDeciamlsandPush(firstNumber / secondNumber)} \n
        Results are beign stored in results array: [${results}]
        `
        )
    //  If both parameters are not numbers then this statement
    else if (notIntPattern.test(firstNumber) && notIntPattern.test(secondNumber)) {
        return "Por favor introduzca solo números"
    }
    // If only one number then square root will be display
    else 
        console.log(`The squared number of the input is : ${Math.pow(firstNumber, 2) || Math.pow(secondNumber, 2)}`)
}
//  This part limit results to three decimals and also push the results to the result array
let limitDeciamlsandPush = (input) => {
    let roundInput = Math.round(input * 1000) / 1000
    results.push(roundInput)
    return roundInput
}

MAKECALCS(firstNumber, secondNumber);
