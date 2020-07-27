"use script"

//constructor of function with some features
function Bowl (){
    this.items = [1,2,3];
    this.map = function (callback){
        let copyArray = [];
        for (let i = 0; i < this.items.length; i++) {
            copyArray.push(callback(this.items[i]));
        }
        return copyArray;
        };
  
    this.find = function (callback){
        for (let i = 0; i < this.items.length; i++) {
            if(callback(this.items[i]) === true){
                return console.log(this.items[i]);
            }
            else{console.log(undefined)}
        }
    };
    
    this.filter = function (callback){
        let copyArray = [];
        
        for (let i = 0; i < this.items.length; i++) {
            if(callback(this.items[i])){
                copyArray.push(this.items[i]);
            }            
        }
        return console.log(copyArray);
    }

    this.findIndex = function (callback){
        
        for (let i = 0; i < this.items.length; i++) {
            if(callback(this.items[i])){
                return console.log("The index is : ", i);
            } 
            else{console.log(-1);}
                      
        }
    }

    this.fill = function (value,start,final){
       
        for (let i = start; i < final; i++) {
            debugger
            this.items[i] = value;
            
          
        }
        return console.log(this.items);
    }

    this.copyWithin = function (position,start,final){
       
        for (let i = start; i < final; i++) {
            debugger
            this.items[i] = this.items[position];
        }
        return console.log(this.items);
    }

  /*  this.some = function (callback){
        for (let i = 0; i < this.items.length; i++) {
            let result = callback(this.items[i]); 
        }
        return console.log(result);
    };*/

    this.every = function (callback){
        for (let i = 0; i < this.items.length; i++) {
            let result = callback(this.items[i]);
            
            if(!result){
                return false;
            }
        }
      return true;
    };

 /*   this.reduce = function (callback){
        for (let i = 0; i < this.items.length; i++) {
            let result = callback(this.items[i]);
        }
      return true;
    };*/
       
}

const myBowl = new Bowl();



console.log(myBowl.every(function(i){
    if(i <= 10){
        return true;
    }
}));

console.log(myBowl.copyWithin(0,1,7));


console.log(myBowl.fill(5,1,7));

console.log(myBowl.map(function(i){return i * i;})); 
 console.log(myBowl.find(function(i){
    if(i < 5){
        return true;
    }
})); 


console.log(myBowl.filter(function(i){
    if(i <= 10){
        return true;
    }
}));


console.log(myBowl.findIndex(function(i){
    if(i === 10){return true;}
}));



//this

function add (c,d){
    return this.a+this.b+c+d;
    
}

var o = {
    a: 1,
    b: 3
}


add.call(o,2,3);


function add (c,d){
    return this.a+this.b+c+d;
    
}

var o = {
    a: 1,
    b: 3
}


add.apply(o,[2,3]);


function bar(){
    console.log(Object.prototype.toString.call(this));
}

bar.call(7);


//la función bind copia la función y la ancla al contexto que se le pasa al bind para siempre. Por lo tanto una sola vez
function f(){
    return this.a;
}

var g = f.bind({a:'pepe'}); //'pepe'

g();

var h = g.bind({a:'Lola'}); // 'pepe'

//h();

//var o = {a:37,f:f,g:g,h,h};

//console.log(o.a(),o.f(),o.g(),o.h());
//This dentro de un arrow function

var globalObject = this;

//el this del arrow function en verso a una función tradicional fuera del contexto de un objeto busca el contexto global sin restricción
var foo = () => this; // contexto global
var fn = function () { return this;} //contexto global

//foo() === fn() //true

//la cosa cambia cuando pasa a formar parte de un objeto, que el contexto es distinto para ambas. La función arrow se va al contexto global, 
//la función tradicional sigue en el contexto del objeto

var obj = {
    fn: function () {
        return this;
    },
    arrow: () => {return this;}
}

console.log('fn', obj.fn());
console.log('fn', obj.arrow());



