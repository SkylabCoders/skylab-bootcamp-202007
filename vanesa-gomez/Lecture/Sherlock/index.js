let sherlock = {
    address: {
        city: 'London'
    }
};

let watson = {
    address: sherlock.adress
};

let obj = {};

obj.__proto__.smell = 'banana';

console.log (sherlock.smell);
console.log (watson.smell);