function calculator(num1, num2) {
    let output = [];                                    // array that will store the results of the different operations
    let sum = num1 + num2;
    let sub = num1 - num2;
    let pro = num1 * num2;
    let div = num1 / num2;
    let cua = Math.sqrt(num1);
    let operators = [" + ", " - ", " * ", " / "]         
    if (arguments.length == 1) {                        // checks if only one argument has been passed
        if (!isNaN(num1)) {                             // checks if the argument is a number. If not a number, line 19 runs.
            output.push(cua);                           // if its a number, adds it the the output array
            if (!Number.isInteger(cua)) {                   // checks if number is an integer
                output[0] = output[0].toFixed(3);           // if not an integer, limits it to 3 decimals
            }    
            output  = ("Raiz cuadrada de " + num1 + " = " + output);    
            return output
        } else {
            console.log("La calculadora solo acepta números");
        }   
    } else {      
        if (!isNaN(num1) && !isNaN(num2)) {                 // checks if both arguments are numbers. If not, line 36 runs
            output.push(sum);                               // if 2 numbers are passed, adds the result of the operations to the output array
            output.push(sub);
            output.push(pro);
            output.push(div);
            for (let i = 0; i < output.length; i++) {       // Loop that checks if the results of the operations are integers
                if (!Number.isInteger(output[i])) {         
                    output[i] = output[i].toFixed(3);       // if not an integer, limits it to 3 decimals
                }
                output[i]  = (num1 + operators[i] + num2 + " = " + output[i]);      // change each index of output array to give a user friendly result
            }
            return output;
        } else {
            console.log("La calculadora solo acepta números");
        }                                      
    }
}
            
    
    
            
            
   

    
    
    
   

