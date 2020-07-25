/* Francesc Brugarolas - skylab bootcamp 202007 - test */
'use strict';

// const obj = {
//     map: function map(fn){
//         let res = [];
//         for (let el of this.array){
//             res = [...res, fn(el)];
//         }
//         return res;
//     },
//     array: [1, 2, 3]
// }


const bowl = {
    b_map: mapa,
    b_filter: filtro,
    b_find: encontrar,
    b_findIndex: encontrarIndice,
    b_some: algun,
    b_someType: algunTipo, // added feature, returns true if some elements are from a type, false otherwise
    b_every: todos,
    b_everyType: todosTipo, // added feature, returns true if all elements are from a type, false otherwise
    b_indexOf: indiceDe,
    b_lastIndexOf: ultimoIndiceDe,
    b_push: añadePost,
    b_unshift: añadeAnte,
    b_pop: eliminaPost,
    b_shift: eliminaAnte,
    b_slice: cortar,
    b_fill: rellena,
    b_reverse: invierte,
    b_reduce: reduce,
    b_reduceRight: reduceDerecha,
    b_copyWithin: copiarEn,
    b_join: junta,
    b_toString: aString,
    b_toNumber: todosaNumero, // added feature - returns new array where all elements are coerced to a Number
    b_flat: aplana, // added feature - flattens all levels
    b_flatn: aplanan,
    b_forEach: paraCada,
    b_includes: incluye,
    b_howMany: cuantos  // added feature - returns n instances of a value in the arr, -1 if none
}
// aNumber, FLAT depth N, shuffle, SORT + algorithms
// function validation to remove validation code form functions
// insert it into a class

function mapa (arr, fn, thisArg){
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
  
function filtro (arr, fn, thisArg){
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

function encontrar (arr, fn){
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

function encontrarIndice (arr, fn){
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

function algun (arr, fn){
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

function algunTipo (arr, type){
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

function todos (arr, fn){
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

function todosTipo (arr, type){
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

function indiceDe (arr, value, initialPosition = 0){
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

function ultimoIndiceDe (arr, value){
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

function añadeAnte (arr, value){
    try {
        if (arr instanceof Array === false) throw 'Error, el argumento debe ser un array.';
        return [value, ...arr];
    } catch (e) {
        console.log(e);
    } 
}

function añadePost (arr, value){
    try {
        if (arr instanceof Array === false) throw 'Error, el argumento debe ser un array.';
        return [...arr, value];
    } catch (e) {
        console.log(e);
    } 
}

function eliminaAnte (arr){
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

function eliminaPost (arr){
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

function cortar (arr, start = 0, end = arr.length){
    try {
        if (arr instanceof Array === false) throw 'Error, el argumento debe ser un array.';
        if (end > arr.length && start < 0) throw 'Error, ínidces fuera de rango.';
        let res = [];
        for (let i = start; i<end; i++){
            res.push(arr[i]);
        }
        return res;
    } catch (e) {
        console.log(e);
    } 
}

function rellena (arr = [], value, start = 0, end = arr.length){
    try {
        if (arr instanceof Array === false) throw 'Error, el argumento debe ser un array.';
        if (end > arr.length && start < 0) throw 'Error, ínidces fuera de rango.';

        for (let i = start; i<end; i++){
            arr[i] = value;
        }
        return res;
    } catch (e) {
        console.log(e);
    }     
}

function invierte (arr){
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

function reduce (arr, fn){
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

function reduceDerecha (arr, fn){
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

function concatena (arr, otroarr, otrosarg){
    try {
        if (arr instanceof Array === false) throw 'Error, el argumento debe ser un array.';
        return [...arr, ...otroarr, ...otrosarg];
    } catch (e) {
        console.log(e);
    }     
}

function copiarEn (arr, target, start, end){
    try {
        if (arr instanceof Array === false) throw 'Error, el argumento debe ser un array.';
        if (target > arr.length || start > arr.length || end > arr.length) throw 'Error, fuera de rango.';
        if (target < 0){ target = arr.length + target };
        if (start < 0){ start = arr.length + start };
        if (end < 0){ end = arr.length + end };
        if (target < 0 || start < 0 || end < 0) throw 'Error, fuera de rango.';

        let res = arr;
        for (let i = start; i < end; i++){
            res[i] = value;
        }
        return res;
    } catch (e) {
        console.log(e);
    }     
}

function junta (arr, separator){
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

function aString (arr){
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

function todosaNumero (arr){
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

function aplana (arr){
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

function aplanan (arr, depth = 1){
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

function paraCada (arr, fn, thisArg){
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

function incluye (arr, value, start = 0){
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

function cuantos (arr, value, start = 0){
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
bowl.b_map(ejemplo, foo, dummy);