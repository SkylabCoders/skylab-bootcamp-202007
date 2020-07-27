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


operator.increment(0);
operator.increment(1);
operator.increment(3);
operator.increment(10);
operator.decrement(1);
operator.decrement(2);
operator.decrement(4);
operator.decrement(11);
operator.square(12);
operator.square(32);
operator.changeSign(-2);
operator.changeSign(98);
operator.abstract(2, operator.increment);
operator.abstract(2, operator.decrement);
operator.abstract(5, operator.increment);
operator.abstract(5, operator.decrement);
operator.abstract(10, operator.increment);
operator.abstract(10, operator.decrement);
operator.abstract(1, operator.square);
operator.abstract(1, operator.changeSign);