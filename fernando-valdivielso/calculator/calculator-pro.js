function suma(sum1) {     
    let sum1 = 0;
    for (let num in arguments) {
        sum1 += arguments[num];     
    }
    console.log(sum1)
    return sum1; 
}

function resta() {
    let resta1 = 0;
    for (let num in arguments) {
        resta1 -= arguments[num];
    }
    console.log(resta1);
    return resta1;
}

function producto() {
    let prod1 = 1;
    for (let num in arguments) {
        prod1 *= arguments[num];
    }
    console.log(prod1)
    return prod1;
}

function division() {
    let div1 = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        div1 /= arguments[i];
    }
    console.log(div1);
    return div1;
}


    
function calculator() {
    suma();
    resta();
    producto();
    division();
    console.log(sum1 + ' ' + resta1 + ' ' + prod1 + ' ' + div1)
}


// function newNumbers(){
//     let startAgain;
//     const newNumbers = confirm('New numbers?');
//     if (newNumbers) {
//         startAgain = parseInt(prompt('Introduce los números que quieras (separados por comas)'));
//     } else {
//         return;    
//     }
//     startAgain = startAgain.split(',');
//     console.log(startAgain);
    

//     function sum() {
//         let sum1 = 0;
//         for (let num in arguments) {
//                 sum1 += arguments[num];     
//         }
//         console.log(sum1);
//     }
// }   

calculator(10, 5, 2);


