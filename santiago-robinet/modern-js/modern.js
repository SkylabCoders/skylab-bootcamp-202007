'use strict'
/*
AS A SEO specialist, I WANT to obtain specific filtered information SO THAT I can 
implement most accurate digital marketing strategies.

GIVEN an array full of information, WHEN  I passed that array as argument, THEN I obtain 
filtered information depending wich propertie I call.

*/

const Bowl = {
    
    mymap: function (arr, some){
        const newArr = [];
        for(let i = 0; i < arr.length; i++){
            if(arr[i] === some){
                newArr = [some];
            }
        }
    
        return newArr;
    },
    
    
    myfilter: function (arr, some){
        let testArray = null;
        for(let i = 0; i < arr.length; i++){
            if(arr[i] === some){
                testArray++
            }
        }
    
        let lastArray = new Array(testArray);
        for(let i = 0; i < lastArray.length; i++){
            lastArray[i] = some;
        }
        return lastArray;
    },
    
    
    
    mymap: function (arr, func){
        const newArray = [];
        for(let i = 0; i < arr.length; i++){
            let result = func(arr[i]);
            newArray[i] = result;
        }
    
        return newArray
    }

}



















