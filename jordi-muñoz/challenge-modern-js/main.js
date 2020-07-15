'use strict';

/* 

As a 
I want to 
So that 

Given.. 
When.. 
Then..

*/

const bowl = {
    map: function (array, callback) {
        let newArray = [];
        for (let i = 0; i < array.length; i++) {
            newArray[newArray.length] = callback(array[i]);
        }
        return newArray;
    },

    filter: function(array, callback) {
        let newArray = [];
        for (let i = 0; i < array.length; i++) {
            if (callback(array[i])) {
                newArray[newArray.length] = array[i];
            }
        }
        return newArray;
    },

    find: function(array, callback) {
        for (let i = 0; i < array.length; i++) {
            if (callback(array[i])) {
                return array[i];
            }
        }
        return undefined;
    },

    findIndex: function(array, callback) {
        for (let i = 0; i < array.length; i++) {
            if (callback(array[i])) {
                return i;
            }
        }
        return -1;
    },

    fill: function(array, numb, index1, index2) {
        for (let i = 0; i < array.length; i++) {
            if (index1) {
                array[index1] = numb;
            } else {
                array[i] = numb;
            }
            
            
        }
        return array;
    }
};
let resultMap = bowl.map([1,2,3,4,5,6], (e) => e + '0');
console.log(resultMap);
let resultFilter = bowl.filter([1,2,3,4,5,6], (e) => e < 3);
console.log(resultFilter);
let resultFind = bowl.find([1,2,3,4,5,6], (e) => e < 3);
console.log(resultFind);
let resultFindIndex = bowl.findIndex([1,2,3,4,5,6], (e) => e < 3);
console.log(resultFindIndex);