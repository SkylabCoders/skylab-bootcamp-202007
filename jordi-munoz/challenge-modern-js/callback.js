const increment = (num) => {
    return 'the increment is: ' + (num + 1);
}
const decrement = (num) => {
    return 'the decrement is: ' + (num - 1);
}

function calculator(num, callback) {
    return callback(num)
}
const calc = calculator(2, increment);
console.log(calc);