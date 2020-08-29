console.log(Math.pow(1, 1));

setTimeout(function() { console.log(2)}, 0);

console.log(3);

var interval = setInterval(function() {
    console.log(4);
    setTimeout(function() {
        console.log(5);
    }, 500);
}, 1000)

setTimeout(function() {
    clearInterval(interval);
    console.log(6);
}, 1100)

console.log(7);