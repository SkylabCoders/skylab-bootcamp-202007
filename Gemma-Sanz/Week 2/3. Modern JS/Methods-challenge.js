"use strict"

// .map, .filter and .find
function Bowl() {
    this.items = [10, 20, 30, 40, 50];
    this.map = function (func) {
        var result = []
        for (let i = 0; i < this.items.length; i++) {
            result[i] = func(this.items[i])
        }
        console.log("mapMehotd:" + result);
        return
    };
    this.filter = function (condition) {
        var result = []
        for (let i = 0; i < this.items.length; i++) {
            if (condition(this.items[i])) {
                result[result.length] = this.items[i];
            }
        }
        console.log("filterMehotd: " + result);
        return result
    };
    this.find = function (pepito) {
        var result;
        for (let i = 0; i < this.items.length; i++) {
            if (result === undefined) {
                result = pepito(this.items[i])
            }
        }
        console.log("findMethod: " + result)
    };
    this.forEach = function (value) {
        for (let i = 0; i < this.items.length; i++) {
            console.log(value(this.items[i]))
        }
    };
    this.findIndex = function (jijo) {
        for (let i = 0; i < this.items.length; i++) {
            if (jijo(this.items[i])) {
                return i;
            }
        }
        return -1;
    };

    this.fill = function (arg1, arg2, arg3) {
        let result = []
        if (arg1 && !arg2 && !arg3) {
            for (let result of this.items) {
                result = arg1
            }
        } else if (arg1 && arg2 && !arg3) {
            for (let i = arg2; i < this.items.length; i++) {
                result[i] = arg1;
            }
        } else if (arg1 && arg2 && arg3) {
            for (let i = arg2; i < arg3; i++) {
                result[i] = arg1;
            }
            for (let i = 0; i < this.items.length; i++) {
                result = callback(array[i]);
            }
        }
        console.log("fillMehotd: " + result)

    };
    this.copyWithin = function (arg1, arg2, arg3) {
        let result = []
        if (arg2 === undefined) {
            arg2 = 0;
        }
        if (arg3 === undefined) {
            arg3 = this.items.length;
        }
        for (let i = 0; index < this.items.length; i++) {
            result[i] = this.items[i];
            if (i >= arg1 && i <= arg3) {
                result[i] = this.items[i];
            }
        }

    }
    /*copyWithin*/
    this.some = function (bePositive) {
        let result;
        for (let i = 0; i < this.items.length; i++) {
            result = bePositive(this.items[i]);
        }
        console.log("someMethod: " + result)
    };
    this.every = function (condition) {
        let x;
        for (let i = 0; i < this.items.length; i++) {
            if (!condition(this.items[i])) {
                return x = false
            }
        }
        return true
    };
    this.reduce = function (reduceFn) {
        let result = this.items[0];
        for (let i = 1; i < this.items.length; i++) {
            result = reduceFn(result, this.items[i]);
        };
        console.log("reduceMehotd: " + result);
    }

}

var myBowl = new Bowl();

myBowl.map(function (lucia) {
    return lucia * 2
});

myBowl.filter(function (pepito) {
    if (pepito > 26) {
        return true
    }
});
myBowl.find(function (num) {
    if (num > 12) {
        return num
    }
});
console.log("forEachMethod: ")
myBowl.forEach(function (loli) {
    return loli
});
console.log("findIndexMethod: " + myBowl.findIndex(function (pepe) {
    if (pepe > 23) {
        return true;
    }
}));
myBowl.fill(function (fill) {
    return fill;
});
//??? working on copyWithin
myBowl.copyWithin(function (arg1, arg2, arg3) {
    return copyWithin;
});
//
myBowl.some(function (beAlmostAffirmative) {
    if ((beAlmostAffirmative % 2) === 0) {
        return true
    };
})
console.log("everyMethod: " + myBowl.every(function (condition) {
    if (condition < 40) {
        return true
    };
}))
myBowl.reduce(function (accum, valActu) {
    return accum * valActu;
});
