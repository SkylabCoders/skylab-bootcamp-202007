//scenario 1 and 2

'use strict'

function closureChallenge() {
    const increment = function (number) {
        return number + 1;
    }
    const decrement = function (number) {
        return number - 1;
    }
    return {increment, decrement} 
}

console.log(closureChallenge().increment(0)); //pq es un objeto, no una funcion, por eso no puedo poner closureChallenge()(0)
console.log(closureChallenge().decrement(0));


//scenario 3

function closureChallenge2(operator) {
    const increment = function (number) {
        return number + 1;
    }
    const decrement = function (number) {
        return number - 1;
    }
    if(operator === 'sum') return increment;
    if(operator === 'subs') return decrement;
    else(console.log('Error')) //falla pq hay otro error que hay que controlar
}

console.log(closureChallenge2('sum')(0)); 
console.log(closureChallenge2('subs')(0));
console.log(closureChallenge2('prod')(0)); //falla pq hay otro error que hay que controlar

//lo ha hecho con if(typeof .... 'function') para que no pete la última parte