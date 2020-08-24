function removeSmallest(n, arr) {
   if(n > arr.length){
       return newArr = [];
   } else if (n <= 0) {
       return newArr = arr;
   } else {
    const newArr = arr.reduce((accumulator, arrayNumber) => {
        if(n < arrayNumber){
            accumulator = [...accumulator, arrayNumber];
        }
        return accumulator;
    }, []);
    return newArr;
 }
}

//Try to refactor code

removeSmallest(2, [5,3,2,1,4]);
