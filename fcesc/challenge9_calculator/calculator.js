/* Francesc Brugarolas - Skylab bootcamp 2020-07 - Precurs */
'use strict';

export default class Calculator {
    constructor(){
        this.DOM_ELEMENTS = new Map()
        this.SESSIONDATA = {
            current: 0,
            previous: 0,
            operand: 0,
            binaryOperator: {shortRep: '', name: ''}
        }
        this.DOM_NAMES_BYCLASS = {
            super: ['el_super_calc', 'el_super_c'], 
            num: ['el_num_0', 'el_num_1', 'el_num_2', 'el_num_3', 'el_num_4', 'el_num_5', 'el_num_6', 'el_num_7', 'el_num_8', 'el_num_9'],
            unary: ['el_unary_percent', 'el_unary_changeSign'],
            op: ['el_op_addition', 'el_op_substraction', 'el_op_division', 'el_op_product'],
            screen: ['el_screen_calc'],
            decimal: ['el_decimal'],
            all: []
        }
        
        this.getAllClasses = function getAllClasses(){
            this.DOM_NAMES_BYCLASS.all = Array.from([...this.DOM_NAMES_BYCLASS.super,...this.DOM_NAMES_BYCLASS.num,...this.DOM_NAMES_BYCLASS.op,...this.DOM_NAMES_BYCLASS.unary,...this.DOM_NAMES_BYCLASS.screen,...this.DOM_NAMES_BYCLASS.decimal]);
        }

        /* DOM ELEMENTS */
        this.findDOMElements = function findDomeElements(){
            for (let el of this.DOM_NAMES_BYCLASS.all){
                this.DOM_ELEMENTS.set(el, document.querySelector('#' + el));
            }
        }

        /* DOM MOUSE */
        this.injectDOMListeners = function injectDOMListeners(){
            // numbers
            for (let el of this.DOM_NAMES_BYCLASS.num){
                this.DOM_ELEMENTS.get(el).addEventListener('click', () => { this.numbers(this.DOM_ELEMENTS.get(el).innerHTML); } );
            }
            // decimal point
            this.DOM_ELEMENTS.get('el_decimal').addEventListener('click', () => { this.decimal(); } );
            // unary operators
            this.DOM_ELEMENTS.get('el_unary_changeSign').addEventListener('click', () => { this.unary_changeSign(); } );
            this.DOM_ELEMENTS.get('el_unary_percent').addEventListener('click', () => { this.unary_percent(); } );
            // binary operators
            this.DOM_ELEMENTS.get('el_op_addition').addEventListener('click', () => { this.op_addition(); } );
            this.DOM_ELEMENTS.get('el_op_substraction').addEventListener('click', () => { this.op_substraction(); } );
            this.DOM_ELEMENTS.get('el_op_division').addEventListener('click', () => { this.op_division(); } );
            this.DOM_ELEMENTS.get('el_op_product').addEventListener('click', () => { this.op_product(); } );
            // supers
            this.DOM_ELEMENTS.get('el_super_c').addEventListener('click', () => { this.super_c(); } );
            this.DOM_ELEMENTS.get('el_super_calc').addEventListener('click', () => { this.super_calc(); } );
        }

        /* CALCULUS HARDCORE */
        this.numbers = function numbers(num){
            if (Number(num) !== 0) {
                this.SESSIONDATA.current = Number(this.SESSIONDATA.current + '' + num);
            } else {
                this.SESSIONDATA.current = this.SESSIONDATA.current + '0';
            }
            this.printCurrentVal();
        }
        this.decimal = function decimal(){
            let base = Number(this.SESSIONDATA.current);
            let baseStr = String(this.SESSIONDATA.current);
            if (base === 0 && baseStr !== '0.'){
                this.SESSIONDATA.current = '0.';
            } else if (Number.isInteger(base) && baseStr[baseStr.length - 1] !== '.'){
                this.SESSIONDATA.current = this.SESSIONDATA.current + '.';
            } else {
                return this.printError('ERR-Sintaxi: + 1 punt decimal.');
            }
            return this.printCurrentVal();
        }
        this.unary = function unary(fn){
            this.SESSIONDATA.current = Number(this.SESSIONDATA.current);
            this.SESSIONDATA.previous = this.SESSIONDATA.current;
            if (this.rangeCheck()){
                fn();
                this.printCurrentVal();
                return this.SESSIONDATA.current;
            } else {
                this.printCurrentVal()
                return this.SESSIONDATA.current;
            }
        }
        this.unary_changeSign = function unary_changeSign(){
            this.unary(() => this.SESSIONDATA.current = this.SESSIONDATA.current * -1);
        }
        this.unary_percent = function unary_percent(){
            this.unary(() => this.SESSIONDATA.current = this.SESSIONDATA.current / 100);
        }
        this.op_addition = function op_addition(){
            this.binary('+', 'addition');
        }
        this.op_substraction = function op_substraction(){
            this.binary('-', 'substraction');
        }
        this.op_division = function op_division(){
            this.binary('/', 'division');
        }
        this.op_product = function op_product(){
            this.binary('*', 'product');
        }
        this.super_c = function super_c(){
            this.SESSIONDATA.current = 0;
            this.SESSIONDATA.previous = 0;
            return this.printCurrentVal();
        }
        this.binary = function binary(shortRep, name){
            if (this.rangeCheck()) {
                let number = Number(this.SESSIONDATA.current);
                this.SESSIONDATA.operand = number;
                this.SESSIONDATA.previous = number;
                this.SESSIONDATA.binaryOperator.shortRep = shortRep;
                this.SESSIONDATA.binaryOperator.name = name;
                this.SESSIONDATA.current = 0;
                this.printCurrentVal();
            }
        }
        this.super_calc = function super_calc(operator = undefined){
            if (this.rangeCheck()){
                this.SESSIONDATA.current = Number(this.SESSIONDATA.current);
                switch (this.SESSIONDATA.binaryOperator.name){
                    case 'addition':
                        this.SESSIONDATA.current = this.SESSIONDATA.operand + this.SESSIONDATA.current;
                        break;
                    case 'substraction':
                        this.SESSIONDATA.current = this.SESSIONDATA.operand - this.SESSIONDATA.current;
                        break;
                    case 'division':
                        this.SESSIONDATA.current = this.SESSIONDATA.operand / this.SESSIONDATA.current;
                        break;
                    case 'product':
                        this.SESSIONDATA.current =this. SESSIONDATA.operand * this.SESSIONDATA.current;
                        break;
                    default:
                        this.unary(operator);
                        break;

                }
                this.printCurrentVal();
                this.SESSIONDATA.operand = 0;
                this.SESSIONDATA.binaryOperator.shortRep = '';
                this.SESSIONDATA.binaryOperator.name = '';
            }
        }
        /* ----------------------------------------------------------- */

        /* SAFETY CHECK */
        this.rangeCheck = function rangeCheck(){
            let numToTest = Number(this.SESSIONDATA.current);
            if ( !(Number.isFinite(numToTest)) ){
                this.SESSIONDATA.current = 0;
                this.printError('ERR-Operació no definida (indeterminacions,etc).');
                return false;
            } else if (Number.isNaN(numToTest)) {
                this.SESSIONDATA.current = 0;
                this.printError('ERR-Rang: ha de ser un nombre.')
                return false;
            } else if (Math.abs(numToTest) > Number.MAX_VALUE) {
                this.SESSIONDATA.current = 0;
                this.printError('ERR-Rang: nombre > màxim calculadora.');
                return false;
            } else if (Math.abs(numToTest) < Number.EPSILON) {
                this.SESSIONDATA.current = 0;
                this.printError('ERR-Rang: nombre < sensibiltat calculadora.');
                return false;
            } else {
                return true;
            }
        }
        // Error messages
        this.printError = function printError(err){
            this.DOM_ELEMENTS.get('el_screen_calc').innerHTML = err;
        }
        /* ----------------------------------------------------------- */

        /* UTILS */
        this.printCurrentVal = function printCurrentVal(){
            let value;
            if (this.SESSIONDATA.current < 0){
                value = '-' + this.SESSIONDATA.current;
            } else {
                value = '' + this.SESSIONDATA.current;
            }
            this.DOM_ELEMENTS.get('el_screen_calc').innerHTML = value;
        }
        /* ----------------------------------------------------------- */

        /* RUN */
        this.init = function init(){
            this.getAllClasses();
            this.findDOMElements();
            this.injectDOMListeners();
            this.printCurrentVal();
        }

        this.test = function test(op1, operator, op2 = undefined){
            if( op2 === undefined ){
                this.SESSIONDATA.current = op1;
            } else {
                this.SESSIONDATA.current = op2;
                this.SESSIONDATA.previous = op1;
            }
            this.super_calc(operator);
            return this.SESSIONDATA.current();
        }
    }
}

let calculadora = new Calculator();
calculadora.init();
