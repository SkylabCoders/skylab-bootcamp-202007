function calculator(num1, num2) {
    const sumSymbol = '+';
    const subsSymbol = '-';
    const multSymbol = '*';
    const divSymbol = '/';
    const equalSymbol = '=';
    const alert = 'El valor o los valores introducidos no son un numero';
    var results = [];
    var actualResult = 0;

    if (!isNaN(num1) && num2 == undefined) {
        results.push(fixDecimals(Math.sqrt(num1)));
        console.log(results);
    } else if (isNaN(num1) || isNaN(num2)) {
        console.log(alert);
    } else {
        actualResult = fixDecimals(num1 + num2);
        results.push(num1 + sumSymbol + num2 + equalSymbol + actualResult);
        actualResult = fixDecimals(num1 - num2);
        results.push(num1 + subsSymbol + num2 + equalSymbol + actualResult);
        actualResult = fixDecimals(num1 * num2);
        results.push(num1 + multSymbol + num2 + equalSymbol + actualResult);
        actualResult = fixDecimals(num1 / num2);
        results.push(num1 + divSymbol + num2 + equalSymbol + actualResult);
        console.log(results);
    }
}
function fixDecimals(actualResult) {
    actualResult = actualResult.toString();
    const decimalPoint = '.';
    const lastZero = '0';
    const allZeros = '000';
    if (actualResult.indexOf(decimalPoint) >= 0) {
        for (var i = (actualResult.indexOf(decimalPoint) + 3); actualResult.indexOf(decimalPoint) <= i; i--) {
            if (actualResult.substring((actualResult.indexOf(decimalPoint) + 1), (actualResult.indexOf(decimalPoint) + 4)) == allZeros) {
                actualResult = actualResult.substring(0, actualResult.charAt(decimalPoint) + 1);
                break;
            } else if (actualResult.charAt(i) == lastZero) {
                actualResult = actualResult.substring(0, (i));
            } else {
                actualResult = actualResult.substring(0, i + 1);
                break;
            }
        }
    }
    return actualResult
}

calculator(4);

