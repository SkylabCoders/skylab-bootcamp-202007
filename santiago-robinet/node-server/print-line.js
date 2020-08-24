
let counter = 0;

const callback = () => {
    console.log(`Hello World..`)
    counter++
    if(counter === 5){
        clearInterval(myInterval);
        console.log('Done!!')
    }
}

let myInterval = setInterval( callback, 1000);


const franc ={
    1: 1,
    2: 3,
    3: 7,
    4: 2,
    5: 4,
    6: 5,
    7: 6,
}

console.log(Math.pow(1,1));
setTimeout(function() {console.log(2)}, 0);
console.log(3);
var interval = setInterval(function (){
    console.log(4);
    setTimeout(function(){
        console.log(5);
    }, 500)
}, 1000)
setTimeout(function(){
    clearInterval(interval);
    console.log(6);
}, 1100)
console.log(7);
