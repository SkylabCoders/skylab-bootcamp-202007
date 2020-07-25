/* Francesc Brugarolas - Skylab bootcamp 2020-07 - Precurs */
'use strict';

import Calculator from './calculator.js';


describe('Testing a simple calculator', ()=>{
    let calc;
    beforeEach(()=>{calc = new Calculator();});

    test('', () => {
        expect(calc.test(2, 'addtestion', 5)).toBe(7);
    });

    test('', () => {
        expect(calc.test(2, 'substraction', 5)).toBe(-3);
    });

    test('', () => {
        expect(calc.test(2, 'division', 5)).toEqual(0.4);
    });

    test('', () => {
        expect(calc.test(2, 'product', 5)).toBe(10);
    });

    test('', () => {
        expect(calc.test(2, 'changeSign')).toBe(-2);
    });

    test('', () => {
        expect(calc.test(2, 'percent')).toEqual(0.02);
    });

});