
// Analiza si el numero es entero y fijará decimales si se requiere
function fixeDecimals(num) {
    if(!isNaN(num)) {
        if (num % 1 === 0) {
            return num
        } else {
            return num.toFixed(3)
        }
    } 
}

function calculator(num1,num2){
    var result = [];
    
        if((typeof(num1) === "number") && (typeof(num2) === "number")){
            let resultSum = num1 + num2;
            let resultRest = num1 - num2;
            let resultMult = num1 * num2;
            let resultDiv = num1 / num2;
            
            result.push(resultSum)
            result.push(resultRest)
            result.push(resultMult)
            result.push(resultDiv)
            
            
            for(let i = 0; i < result.length; i++){
                 switch (i) {
                    case 0:
                        console.log(`${num1} + ${num2} = ${fixeDecimals(result[i])}`);
                        break;
                    case 1:
                        console.log(`${num1} - ${num2} = ${fixeDecimals(result[i])}`);
                        break;
                    case 2:
                        console.log(`${num1} * ${num2} = ${fixeDecimals(result[i])}`);
                        break;
                    case 3:
                        console.log(`${num1} / ${num2} = ${fixeDecimals(result[i])}`);
                        break;
                    default:
                    break;
                } 
            }
       
        } else if ((num1 !== undefined) && (num2 === undefined)){
            let raizCuadrada = Math.sqrt(num1);
            
            console.log(fixeDecimals(raizCuadrada));

        } else if ((num1 === undefined) && (num2 !== undefined)){
            let raizCuadrada = Math.sqrt(num2);
            
            console.log(fixeDecimals(raizCuadrada));
        } else {
            console.log('Debe introducir dos valores numéricos');
        }
    }
    
    calculator(4,6);

