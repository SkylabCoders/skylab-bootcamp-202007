//scenario 3

const array = ['sum', 'subs'];

function callbackChallenge(callback) {
    const increment = function (number) {
        return number + 1;
    }
    const decrement = function (number) {
        return number - 1;
    }
    if(callback() === 'sum') return increment;
    if(callback() === 'subs') return decrement;
    else(console.log('Error')) //falla pq hay otro error que hay que controlar
}

console.log(callbackChallenge(function(array) { return array[0] }, (0))); 
console.log(callbackChallenge(function(array) { return array[1] }, (0))); 


//falla, repasar