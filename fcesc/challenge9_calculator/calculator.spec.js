/* Francesc Brugarolas - Skylab bootcamp 2020-07 - Precurs */
'use strict';

import Calculator from './calculator.js';


describe('Testing Conway Game of Life', ()=>{
    let calc;
    beforeEach(()=>{calc = new Calculator();});

    it('', () => {
        expect(calc.test(2, 'addition', 5)).toBe(7);
    });

    it('', () => {
        expect(calc.test(2, 'substraction', 5)).toBe(-3);
    });

    it('', () => {
        expect(calc.test(2, 'division', 5)).toEqual(0.4);
    });

    it('', () => {
        expect(calc.test(2, 'product', 5)).toBe(10);
    });

    it('', () => {
        expect(calc.test(2, 'changeSign')).toBe(-2);
    });

    it('', () => {
        expect(calc.test(2, 'percent')).toEqual(0.02);
    });

});