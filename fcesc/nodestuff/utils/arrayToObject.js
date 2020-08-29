function convertArrayToObject(array){
  return array.reduce((acc, curr)=>{
    acc[curr[0]] = curr[1];
    return acc;
  },{});
}

let someStuff = [[1, 'one'], [2, 'two'], [3, 'three']];

console.log(convertArrayToObject(someStuff));