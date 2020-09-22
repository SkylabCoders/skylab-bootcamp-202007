function binRota(arr){
    
   let binOrder = [];
   let value;
   let isEven;
  
    function reducerFn(accumulator, name){
        value = [...accumulator, name]
        return value;
    }
    
  for(let i = 0 ; i < arr.length; i++){
    isEven = i %2;

    if(isEven === 0){
      arr[i].reduce(reducerFn,[]);
      binOrder = [...binOrder, ...value];
        
    } else {
      arr[i].reduceRight(reducerFn,[]);
      binOrder = [...binOrder, ...value];
       
    }
  }

  return binOrder;
}

//I can still refactor this one

const tryThis = [ ["Stefan", "Raj",    "Marie"], ["Alexa",  "Amy",    "Edward"],  ["Liz",    "Claire", "Juan"],  ["Dee",    "Luke",   "Katie"] ];

binRota(tryThis);