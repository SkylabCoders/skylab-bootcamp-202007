"use strict"

// .map, .filter and .find
function Bowl () {
    this.items = [10, 20, 30, 40, 50];
    this.map = function (func){
        var result = []
        for (let i=0; i<this.items.length;i++){
            result[i] = func(this.items[i])
        }
        console.log(result);
        return
    };
    this.filter = function (condition){
        var result =[]
        for (let i=0;i<this.items.length;i++){
           if (condition(this.items[i])) {
            result[result.length]=this.items[i];
           }
        }
        console.log(result);
        return result
    };
    this.find = function(pepito){
        var result;
        for (let i = 0; i < this.items.length; i++) {
            if(result===undefined){
                result=pepito(this.items[i])
            } 
        }
        console.log(result)
    };
    this.forEach = function(value){
        for (let i = 0; i < this.items.length; i++) {
            console.log(value(this.items[i]))
        }
    };
    this.findIndex = function(jijo){
        for (let i = 0; i < this.items.length; i++) {
            if(jijo(this.items[i])){
                return i;
            }
        }
        return -1;
    };
/*    this.fill = function (hehe){ //WORKING ON
        ///
        
    };*/
    this.some = function(bePositive){
        let result;
        for (let i = 0; i < this.items.length; i++) {
            result = bePositive(this.items[i]);
        }
        console.log(result)
    };
    this.every = function(condition){
        let x;
        for (let i = 0; i < this.items.length; i++) {
            if(!condition(this.items[i])){
                return x = false
            } else {
                return x = true
            }

        }
        console.log(x)
    };
}

var myBowl = new Bowl();

myBowl.map(function(lucia){
    return lucia*2
});

myBowl.filter(function(pepito){
    if(pepito > 26){
        return true
    }
});
myBowl.find(function(num){
    if(num>12){
        return num
    }
});
myBowl.forEach(function(loli){
    return loli
});
console.log(myBowl.findIndex(function(pepe){
    if (pepe > 23){
        return true;
    }
}));
/*myBowl.fill(function(hoho)){ //WORKING ON

};*/
myBowl.some(function(beAlmostAffirmative){
    if((beAlmostAffirmative % 2)===0){
        return true
    };
})
myBowl.every(function(condition){
    if(condition < 40){
        return true
    };
})
