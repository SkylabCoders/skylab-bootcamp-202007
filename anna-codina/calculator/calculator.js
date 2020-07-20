const Calculator = function () {
    function operation(firstOperator, secondOperator, typeOperation) {
        if (!firstOperator || !secondOperator) {
            return;
        }
        let result = 0;
        switch (typeOperation) {
            case addSymbol:
                result = firstOperator + secondOperator;
                break;
            case subSymbol:
                result = firstOperator - secondOperator;
                break;
            case mulSymbol:
                result = firstOperator * secondOperator;
                break;
            case divSymbol:
                result = firstOperator / secondOperator;
                break;
        }
        return result;
    }

    return { operation, }
}