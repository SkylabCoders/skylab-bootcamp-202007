const test = function(x){
    return x + 2;
}

const criteria = function(value){
    if(value > 3){
        return true;
    }
}

function Bowl (){
    
    this.items = [1,2,3,4,5,6];

    this.find = function(elementToFind){
        for( let i = 0; i < this.items.length; i++){
            if(this.items[i] === elementToFind){
                return this.items[i];
            }
        }
    }
    this.map = function(callback){
        const newArray = [];
        for(let i = 0; i < this.items.length;i++){
            newArray[i] = callback(this.items[i]);
        }

        return newArray;
    }
    this.findIndex = function(elementToFindIndex){
        for( let i = 0; i < this.items.length; i++){
            if(this.items[i] === elementToFindIndex){
                return i;
            }
        }
    }
    this.forEach = function(callbackForEach){
        for(let i = 0; i < this.items.length;i++){
            this.items[i] = callbackForEach(this.items[i])
        }

        return this.items;
    }   
    this.filter = function(callbackFilter){
        const filterResult = [];
        for(let i = 0; i<this.items.length; i++){
            if(callbackFilter(this.items[i]) === true){
                filterResult.push(this.items[i]);
            }
        }

        return filterResult;
    }
    this.fill = function(value, start, finish){
        if(start === undefined){
            start = 0;
        }

        if( finish === undefined){
            finish = this.items.length;
        }
        
        for(let i = start; i < finish; i++){
            this.items[i] = value;
        }

        return this.items;
    }
    this.copyWithin

    this.some
}
const myBowl = new Bowl;
