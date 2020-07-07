'use strict';
function calculator(num1, num2) {
    var results;
    if (num2 == null) {
        if (typeof num1 !== "number") {
            results = "Error, este programa sólo acepta números.";
        }
        else {
            results = ["ResultSquareRoot = " + " " + Math.round((Math.sqrt(num1)) * 1000) / 1000];
        }
    } else if (typeof num1 !== "number" || typeof num2 !== "number") {
        results = "Error, este programa sólo acepta números.";
    } else {
        results = ["ResultSum = " + " " + Math.round((num1 + num2) * 1000) / 1000, " " + "ResultSubstraction =" + " " + Math.round((num1 - num2) * 1000) / 1000, " " + "ResultProduct =" + " " + Math.round((num1 * num2) * 1000) / 1000, " " + "ResultDivision =" + " " + Math.round((num1 / num2) * 1000) / 1000];
    }
    return results;
}