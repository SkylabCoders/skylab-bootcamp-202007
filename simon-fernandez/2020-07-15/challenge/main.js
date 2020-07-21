function Bowl () {
    //Array value
    this.array=[],
    //Map Function
    this.map=function (callback) {
        let newArray=[]
        for (let i = 0; i < this.array.length; i++) {
            newArray = [...newArray,callback(this.array[i])];
            
        }
        return newArray;
    },
    //Filter function
    this.filter=function (callback){
        let newArray=[];
        for (let i = 0; i < this.array.length; i++) {
            if (callback(this.array[i])) {
                newArray = [...newArray, this.array[i]];
            }
        }
        return newArray;
    },
    //Find Function
    this.find=function (callback) {
        for (let i = 0; i < this.array.length; i++) {
            if (callback(this.array[i])) {
                let findVariable=this.array[i];
                return findVariable;
            }
        }
    },
    //Find Index Function
    this.findIndex=function (callback){
        for (let i = 0; i < this.array.length; i++) {
            
            if(callback(this.array[i])){
                return i;
            }
        }
    },
    //Fill Function
    this.fill=function(index,callback){
        let buffer=[]
        for (let i = 0; i < this.array.length; i++) {
            if (i>index-1) {
                buffer[i]=callback();
            }else{
                buffer[i]=this.array[i];
            }
        }
        return buffer;
    },
    this.copyWithin=function(index,start,end){
        //necesita tres valores indice start y final en donde index es la posicion donde empieza a pegar, start desde donde empieza a compiar y final donde para, el final si no esta
        //seteado se interpreta como hasta que se acabe el array
        let copyArray=[], buffer=this.array;
        debugger;
        if (end===undefined) end=this.array.length;
        for (let i = start; i < end; i++) {
            copyArray[i-start]=this.array[i];
        }

        for (let i = index; i < this.array.length; i++) {
            for (let y = 0; y < copyArray.length; y++) {
                buffer[i]=copyArray[y];
                i++;
            }
        }
        return buffer;
    },
    this.some= function(callback){
        //comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.
        for (let i = 0; i < this.array.length; i++) {
            if (callback(this.array[i])) {
                return true;
            }
        }
    },
    this.every=function(callback){
        //Determina si todos los elementos en el array satisfacen una condición.
        let check=true;
        for (let i = 0; i < this.array.length; i++) {
            if (callback(this.array[i])) {
                check=false;
            }
        }
        return check;
    },
    this.reduce=function( callback){
        //ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor. Vamos que todos los valores e aplica una operacion entre ellos y devuelve un
        //valor, como por ejemplo suamr todos los valores o concatenarlos si fuesen strings
        let buffer=null;
        for (let i = 0; i < this.array.length; i++) {
            buffer=callback(buffer,this.array[i]);
        }
        return buffer;
    }   

};
const operations={
    //callback function  of map
    map:function(x){
        return x+2;
    },
    //callback fucntion of filter
    filter:function(x){
        return x<3;
    },
    //callback function of find
    find:function(x){
        return x===3;
    },
    //callback function of findIndex
    findIndex:function(x){
        return 3
    },
    //callback function of fill
    fill:function(){
        return 3;
    },
    copyWithin:function(originArray,copyArray,index){
        
    },
    //callback Function of some
    some:function(x){
        return x===3;
    },
    //callback Function of every
    every:function(x){
        return x!==3;
    },
    //callback function of reduce
    reduce:function(x,y){
        return x+y;
    }
    
}

const myBowl=new Bowl;
myBowl.array=[1,2,3,4];
function test() {
    console
}
console.log(myBowl.map(operations.map)===myBowl.array);
console.log(myBowl.filter(operations.filter));
console.log(myBowl.find(operations.find));
console.log(myBowl.findIndex(operations.findIndex));
console.log(myBowl.fill(1,operations.fill));
console.log(myBowl.copyWithin(1,2));
console.log(myBowl.some(operations.some));
console.log(myBowl.every(operations.every));
console.log(myBowl.reduce(operations.reduce));