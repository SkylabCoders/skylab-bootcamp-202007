/* Francesc Brugarolas - skylab bootcamp 202007 - test */
'use strict';

export default class Bowl {
    constructor(input){
        this.array = input;
        this.b_map = function mapa (fn, thisArg = this, arr = this.array){
            try {
                if (typeof(fn) !== 'function') throw 'Error, el argumento debe ser una función.';
                if (arr instanceof Array === false) throw 'Error, el argumento debe ser un array.';
                let result = [];

                for (let el of arr){
                    if (thisArg !== 'undefined'){
                        let fun = fn.bind(thisArg, el);
                        result = [...result, fun()];
                    } else {
                        result = [...result, fn(el)];
                    }
                }

                return result;
            } catch (e) {
                console.log(e);
            }
        }
        
        this.b_filter = function filtro (fn, thisArg = this, arr = this.array){
            try {
                if (typeof(fn) !== 'function') throw 'Error, el argumento debe ser una función.';
                if (arr instanceof Array === false) throw 'Error, el argumento debe ser un array.';
                let result = [];

                for (let el of arr){
                    let fun = fn.bind(thisArg, el)
                    if (fn(el)) {result = [...result, fun()]};
                }

                return result;
            } catch (e) {
                console.log(e);
            }
        }

        this.b_find = function encontrar (fn, arr = this.array){
            try {
                if (typeof(fn) !== 'function') throw 'Error, el argumento debe ser una función.';
                if (arr instanceof Array === false) throw 'Error, el argumento debe ser un array.';

                for (let el of arr){
                    if (fn(el)) {return true;}
                }
            } catch (e) {
                console.log(e);
            }
        }

        this.b_findIndex = function encontrarIndice (fn, arr = this.array){
            try {
                if (typeof(fn) !== 'function') throw 'Error, el argumento debe ser una función.';
                if (arr instanceof Array === false) throw 'Error, el argumento debe ser un array.';
                let result = [];

                for (let i = 0; i < arr.lenght; i++){
                    if (fn(el)) {result = i}
                    return result;
                }
            } catch (e) {
                console.log(e);
            }
        }

        this.b_some = function algun (fn, arr = this.array){
            try {
                if (typeof(type) !== 'string') throw 'Error, el argumento del tipo debe ser un string.';
                if (arr instanceof Array === false) throw 'Error, el argumento debe ser un array.';

                for (let el of arr){
                    if (fn(el)) {return true;}
                }
            } catch (e) {
                console.log(e);
            }   
        }

        this.b_someType = function algunTipo (type, arr = this.array){
            try {
                if (typeof(type) !== 'string') throw 'Error, el argumento del tipo debe ser un string.';
                if (arr instanceof Array === false) throw 'Error, el argumento debe ser un array.';

                for (let el of arr){
                    if (typeof(el) === type){ return true; }
                }
                return true;
            } catch (e) {
                console.log(e);
            }      
        }

        this.b_every = function todos (fn, arr = this.array){
            try {
                if (typeof(type) !== 'string') throw 'Error, el argumento del tipo debe ser un string.';
                if (arr instanceof Array === false) throw 'Error, el argumento debe ser un array.';

                for (let el of arr){
                    if (!fn(el)) {return false;}
                }
                return true;
            } catch (e) {
                console.log(e);
            }  
        }

        this.b_everyType = function todosTipo (type, arr = this.array){
            try {
                if (typeof(type) !== 'string') throw 'Error, el argumento del tipo debe ser un string.';
                if (arr instanceof Array === false) throw 'Error, el argumento debe ser un array.';

                for (let el of arr){
                    if (!(typeof(el) === type)){ return false; }
                }
                return true;
            } catch (e) {
                console.log(e);
            }    
        }

        this.indexOf = function indiceDe (value, initialPosition = 0, arr = this.array){
            try {
                if (arr instanceof Array === false) throw 'Error, el argumento debe ser un array.';

                let count = 0;
                for (let i = 0; i<arr.length; i++){
                    if (arr[i] === value){
                        if (count === initialPosition){ return i; }
                        count++;
                    }
                }
                return;
            } catch (e) {
                console.log(e);
            } 
        }

        this.b_lastIndexOf = function ultimoIndiceDe (value, arr = this.array){
            try {
                if (arr instanceof Array === false) throw 'Error, el argumento debe ser un array.';

                let count = 0;
                for (let i = arr.length-1; i >= 0; i--){
                    if (arr[i] === value){
                        return i;
                    }
                }
                return;
            } catch (e) {
                console.log(e);
            } 
        }

        this.b_unshift = function añadeAnte (value, arr = this.array){
            try {
                if (arr instanceof Array === false) throw 'Error, el argumento debe ser un array.';
                return [value, ...arr];
            } catch (e) {
                console.log(e);
            } 
        }

        this.b_post = function añadePost (value, arr = this.array){
            try {
                if (arr instanceof Array === false) throw 'Error, el argumento debe ser un array.';
                return [...arr, value];
            } catch (e) {
                console.log(e);
            } 
        }

        this.b_shift = function eliminaAnte (arr = this.array){
            try {
                if (arr instanceof Array === false) throw 'Error, el argumento debe ser un array.';
                
                let res = [];
                for (let i = 1; i<arr.length; i++){
                    res.push(arr[i]);
                }
                return res;
            } catch (e) {
                console.log(e);
            } 
        }

        this.b_pop = function eliminaPost (arr = this.array){
            try {
                if (arr instanceof Array === false) throw 'Error, el argumento debe ser un array.';
                
                let res = [];
                for (let i = 0; i<arr.length - 1; i++){
                    res.push(arr[i]);
                }
                return res;
            } catch (e) {
                console.log(e);
            } 
        }

        this.b_slice = function cortar (start = 0, end = this.arr.length, arr = this.array){
            try {
                if (arr instanceof Array === false) throw 'Error, el argumento debe ser un array.';
                if (end > arr.length || start < 0) throw 'Error, ínidces fuera de rango.';
                let res = [];
                for (let i = start; i<end; i++){
                    res.push(arr[i]);
                }
                return res;
            } catch (e) {
                console.log(e);
            } 
        }

        this.b_fill = function rellena (value, start = 0, end = arr.length, arr = this.array){
            try {
                if (arr instanceof Array === false) throw 'Error, el argumento debe ser un array.';
                if (end > arr.length || start < 0) throw 'Error, ínidces fuera de rango.';

                for (let i = start; i<end; i++){
                    arr[i] = value;
                }
                return res;
            } catch (e) {
                console.log(e);
            }     
        }

        this.b_reverse = function invierte (arr = this.array){
            try {
                if (arr instanceof Array === false) throw 'Error, el argumento debe ser un array.';

                let res = []
                for (let i = arr.lenght - 1; i >= 0; i--){
                    res.push(arr[i]);
                }
                return res;
            } catch (e) {
                console.log(e);
            }     
        }

        this.b_reduce = function reduce (fn, arr = this.array){
            try {
                if (arr instanceof Array === false) throw 'Error, el argumento debe ser un array.';

                let res = arr[0];
                for (let i = 1; i < arr.length; i++){
                    res = fn(res, arr[i]);
                }
                return res;
            } catch (e) {
                console.log(e);
            }     
        }

        this.b_reduceRight = function reduceDerecha (fn, arr = this.array){
            try {
                if (arr instanceof Array === false) throw 'Error, el argumento debe ser un array.';

                let res = arr[arr.length -1];
                for (let i = arr.length - 2; i >= 0; i--){
                    res = fn(res, arr[i]);
                }
                return res;
            } catch (e) {
                console.log(e);
            }     
        }

        this.b_concat = function concatena (otroarr, otrosarg, arr = this.array){
            try {
                if (arr instanceof Array === false) throw 'Error, el argumento debe ser un array.';
                return [...arr, ...otroarr, ...otrosarg];
            } catch (e) {
                console.log(e);
            }     
        }

        this.b_copyWithin = function copiarEn (target, start = 0, end = this.array.length, arr = this.array){
            try {
                if (arr instanceof Array === false) throw 'Error, el argumento debe ser un array.';
                if (target > arr.length || start > arr.length || end > arr.length) throw 'Error, fuera de rango.';
                if (target < 0){ target = arr.length + target };
                if (start < 0){ start = arr.length + start };
                if (end < 0){ end = arr.length + end };
                if (target < 0 || start < 0 || end < 0) throw 'Error, fuera de rango.';

                let res = arr;
                for (let i = start; i < end; i++){
                    if (i < start){
                        res[i] = arr[i];
                    } else if (i >= start && i < end){
                        res[i] = value;
                    } else {
                        res[i] = arr[i];
                    }
                }
                return res;
            } catch (e) {
                console.log(e);
            }     
        }

        this.b_join = function junta (separator, arr = this.array){
            try {
                if (arr instanceof Array === false) throw 'Error, el argumento debe ser un array.';
                if (typeof(separator) !== 'string') throw 'Error, el separador debe ser un string.';

                let res = '' + arr[i];
                for (let i = 1; i<arr.length; i++){
                    res = res + separator + arr[i];
                }
                return res;
            } catch (e) {
                console.log(e);
            }     
        }

        this.b_toString = function aString (arr = this.array){
            try {
                if (arr instanceof Array === false) throw 'Error, el argumento debe ser un array.';

                let res = '' + arr[i];
                for (let i = 1; i<arr.length; i++){
                    res = `${res},${arr[i]}`;
                }
            } catch (e) {
                console.log(e);
            }     
        }

        this.b_everyToNumber = function todosaNumero (arr = this.array){
            try {
                if (arr instanceof Array === false) throw 'Error, el argumento debe ser un array.';

                let res = [];
                for (let el of arr){
                    res = [...res, Number(el)]
                }
                return res
            } catch (e) {
                console.log(e);
            }     
        }

        this.b_flatten = function aplana (arr = this.array){
            if (arr instanceof Array === false) throw 'Error, el argumento debe ser un array.';
            try{
                let res = [];
                for (let el of arr){
                    if (el instanceof Array) { 
                        aplana (el); 
                    }
                    res.push(el);
                }
                return res.join(',');
            } catch (e) {
                console.log(e);
            }
        }

        this.b_flat = function aplanan (depth = 1, arr = this.array){
            if (arr instanceof Array === false) throw 'Error, el argumento debe ser un array.';
            let nivel = 1;
            function aplanar(arrInterno){
                try{
                    let res = [];
                    for (let el of arrInterno){
                        if (nivel <= depth){
                            if (el instanceof Array) { 
                                nivel++;
                                aplanar (el); }
                        }
                        res.push(el);
                    }
                    return res.join(',');
                } catch (e) {
                    console.log(e);
                }
            }
            aplanar(arr);
        }

        this.b_forEach = function paraCada (fn, thisArg = this, arr = this.array){
            try {
                if (typeof(fn) !== 'function') throw 'Error, el argumento debe ser una función.';
                if (arr instanceof Array === false) throw 'Error, el argumento debe ser un array.';

                for (let i = 0; i<arr.length; i++){
                    if (thisArg !== 'undefined'){
                        let fun = fn.bind(thisArg, arr[i], i, arr);
                        fun();
                    } else {
                        fn(arr[i], i, arr);
                    }
                }
                return;
            } catch (e) {
                console.log(e);
            }
        }

        this.b_includes = function incluye (value, start = 0, arr = this.array){
            try {
                if (arr instanceof Array === false) throw 'Error, el argumento debe ser un array.';

                for (let i = start; i<arr.length; i++){
                    if (arr[i] === value) {
                        return true;
                    }
                }
                return false;
            } catch (e) {
                console.log(e);
            }
        }

        this.b_howMany = function cuantos (value, start = 0, arr = this.array){
            try {
                if (arr instanceof Array === false) throw 'Error, el argumento debe ser un array.';

                let count = 0;
                for (let i = start; i<arr.length; i++){
                    if (arr[i] === value) {
                        count++;
                    }
                }
                return (count === 0) ? -1 : count;
            } catch (e) {
                console.log(e);
            }
        }
    }

}

let mybowl = new Bowl([1, 2, 3, 4, 5, 6, 7, 8, 9]);

console.log(mybowl.b_map);

console.log(mybowl.b_map(e => e *2));


// debugger;
let ejemplo = [{name: 'John'}, {name: 'Meow', species: 'cat'}, {name: 'Karl', species: 'human'}];
let a = [[1, 2], 3, [4], [[5, 6], [7, [8, [9, 10, [11, [12, [13, 14], 15], 16]]]]]];
function foo(){
    console.log(this.name);
}

function fuu(obj){
    console.log(obj.name);
}
let dummy = {name: 'something'};

console.log('MAP METHOD WITH CONTEXT:');
ejemplo.map(foo, dummy);
console.log('MAPA METHOD WITH CONTEXT:');
mybowl.array = ejemplo;
mybowl.b_map(foo, dummy);