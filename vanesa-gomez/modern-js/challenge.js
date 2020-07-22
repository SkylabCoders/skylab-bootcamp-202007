// Function definition
function Bowl() {
    this.items = [1,2,3,4,5];
    this.map = function(callback) {
        const newArray = [];
        for(let i = 0; i < this.items.length; i++) {
            newArray[i] = callback(this.items[i]);
        }
        console.log(newArray);
        return newArray
    };

    this.forEach = function(callback) {
        for(let i = 0; i < this.items.length; i++) {
            console.log(callback(this.items[i]));
        }
    };

    this.filter = function(callback) {
        const newArray = [];
        for(let i = 0; i < this.items.length; i++) {
            if (callback(this.items[i])) {
                newArray.push(this.items[i]);
            }
        }
        console.log(newArray);
        return newArray;
    };

    this.find = function(callback) {
        let result = null;
        for(let i = 0; i < this.items.length; i++) {
            if (callback(this.items[i])) {
                result = (this.items[i]);
            }
        }
        return result;
    };

    this.findIndex = function(callback) {
        let result = null;
        for(let i = 0; i < this.items.length; i++) {
            if (callback(this.items[i])) {
                result = i;
                return console.log(result);
            } 
        }
        return -1;    
    };
    
}



const myBowl = new Bowl();



myBowl.map(function (value) {
    return value * 2;
}
)

myBowl.forEach(function (value) {
    return value + 2;
}
)

myBowl.filter(function (value) {
    return value > 2;
    
}
)

myBowl.find(function (value) {
    return value === 4;
}
)

myBowl.findIndex(function (value) {
    return value === 3;
}
)


