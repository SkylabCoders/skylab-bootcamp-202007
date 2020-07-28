/* Francesc Brugarolas - skylab bootcamp 202007 - test */
'use strict';

function fnUpAndDown(){
    function print(args, operation){
        let txt = '';
        switch (operation){
            case 'increment':
                txt = 'incremented';
                break;
            case 'decrement':
                txt = 'decremented';
                break;
            case 'square':
                txt = 'squared';
                break;
            case 'changeSign':
                txt = 'with the sign changed';
                break;
        }
        let output = `The number ${txt} is ${args}.`;
        return console.log(output);
    }

    function increment(n){
        return print(n + 1, 'increment');
    }
    function decrement(n){
        return print(n -1, 'decrement');
    }
    function square(n){
        return print(n**2, 'square');
    }
    function changeSign(n){
        return print(-n, 'changeSign');
    }

    function abstract(value, fun){
        fun(value);
    }
    return {abstract, increment, decrement, square, changeSign};
}

let operator = fnUpAndDown();

let test = [0,1,3,10,1,2,4,11,12,32,-2,98,-34];

for (let el of test){
    console.log('operator + ', operator.increment(el));
    console.log('operator - ', operator.decrement(el));
    console.log('operator ^2 ', operator.square(el));
    console.log('operator +/- ', operator.changeSign(el));
    console.log('abstract + ', operator.abstract(el, operator.increment));
    console.log('abstract - ', operator.abstract(el, operator.decrement));
    console.log('abstract ^2 ', operator.abstract(el, operator.square));
    console.log('abstract +/- ', operator.abstract(el, operator.changeSign));
}



let a = Array.from(0);
for (let i = 0; i < 1000000; i++){
  a.push(Math.random()*100);
}

let b = [1, 2, 3, 4, 5, 6];

const reductor = (c, d) => c + d;
console.log(b.reduce(reductor));
