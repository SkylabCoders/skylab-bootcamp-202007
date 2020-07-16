//methods done in functions inside an object

//User stories on methods.txt

'use strict'

// reproducing map, filter and find without callback


const bowl = {
    map: function(array) {
        const newArray = [];
        for (let index = 0; index < array.length; index++) {
            newArray[index] = array[index] * 5;    
        }
        console.log(newArray);
        return newArray;
    },

    filter: function(array) {
        const newArray = [];
        let j = 0;

        for (let i = 0; i < array.length; i++) {
            if(array[i] > 1) {
                newArray[j] = array[i];
                j++;    
            }
        }
        console.log(newArray);
        return newArray;
    },

    find: function(array) {
        for (let index = 0; index < array.length; index++) {
            if(array[index] > 5) {
                console.log(array[index])
                return array[index];
            }  
        }
        console.log(undefined)
        return undefined;
    }
}

//Scenario 1
bowl.map([4, 2, 7, -1]);
bowl.map([-3, 1, 6, 0]);
bowl.map([-3, null, 6, 0]);
bowl.map([undefined, 1, 6, 0]);

bowl.filter([4, 3, 7, -1, 3])
bowl.filter([null, 3, undefined, -1, 3, 3])

bowl.find([4, 3, 7, -1, 3]);
bowl.find([4, 3, null, -1, 3]);




// reproducing map, filter and find with callback


const bowlWithCallbacks = {
    map: function(array, callbackMap) {
        const newArray = [];
        for (let index = 0; index < array.length; index++) {
            newArray[index] = callbackMap(array[index]);
        }
        console.log(newArray);
        return newArray;
    },

    filter: function(array, callbackFilter) {
        const newArray = [];
        let j = 0;

        for (let i = 0; i < array.length; i++) {
            if(callbackFilter(array[i])) {
                newArray[j] = array[i];
                j++;    
            }
        }
        console.log(newArray);
        return newArray;
    },

    find: function(array, callbackFind) {
        for (let index = 0; index < array.length; index++) {
            if(callbackFind(array[index])) {
                console.log(array[index])
                return array[index];
            }  
        }
        console.log(undefined)
        return undefined;
    }
}


//Scenario 1
bowlWithCallbacks.map([4, 2, 7, -1], function(number) {
    return number * 5;});
bowlWithCallbacks.map([-3, 1, 6, 0], function(number) {
    return number * 5;});
bowlWithCallbacks.map([-3, null, 6, 0], function(number) {
    return number * 5;});
bowlWithCallbacks.map([undefined, 1, 6, 0], function(number) {
    return number * 5;});

bowlWithCallbacks.filter([4, 3, 7, -1, 3], function(number) {
        if(number > 1) {
            return true;
        }
        else{
            return false;
        }
    });
bowlWithCallbacks.filter([null, 3, undefined, -1, 3, 3], function(number) {
        if(number > 1) {
            return true;
        }
        else{
            return false;
        }
    });

bowlWithCallbacks.find([4, 3, 7, -1, 3], function(number) {
    if(number > 5) {
        return true;
    }
    else{
        return false;
    }
});
bowlWithCallbacks.find([4, 3, null, -1, 3], function(number) {
    if(number > 5) {
        return true;
    }
    else{
        return false;
    }
});


//Scenario 2
bowlWithCallbacks.map([4, 2, 7, -1], function(number) {
    return number + 1.5;});
bowlWithCallbacks.map([-3, 1, 6, 0], function(number) {
    return number + 1.5;});
bowlWithCallbacks.map([-3, null, 6, 0], function(number) {
    return number + 1.5;});
bowlWithCallbacks.map([undefined, 1, 6, 0], function(number) {
    return number + 1.5;});

bowlWithCallbacks.filter([4, 3, 7, -1, 3], function(number) {
        if(number === 0) {
            return true;
        }
        else{
            return false;
        }
    });
bowlWithCallbacks.filter([null, 3, undefined, -1, 3, 3], function(number) {
        if(number === 0) {
            return true;
        }
        else{
            return false;
        }
    });

bowlWithCallbacks.find([4, 3, 7, -1, 3], function(number) {
    if(number < 2) {
        return true;
    }
    else{
        return false;
    }
});
bowlWithCallbacks.find([4, 3, null, -1, 3], function(number) {
    if(number < 2) {
        return true;
    }
    else{
        return false;
    }
});

//quiere que hagamos una función constructora Bowl y prototype pollution
function Bowl() {}

Bowl.prototype.length = 0;
Bowl.prototype.forEach = function () {
    for (let i = 0; i < this.length; i++) {
        console.log(this[i]);      
    }
};

const myBowl = new Bowl();

console.log(myBowl.length)



