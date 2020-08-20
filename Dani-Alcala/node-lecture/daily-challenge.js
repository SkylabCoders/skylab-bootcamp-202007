// let ar1 = ['a', 'b', 'c'];

// // let number = function (array) {
// // 	for (i = 0; i < array.length; i++) {
// // 		array[i] = `${i + 1}: ${array[i]}`;
// // 	}
// // 	return array;
// // };

// // console.log(number(ar1));

// let ar2 = ar1.map((element, index) => {
//     return (index + 1) + ':' + element
// })

// console.log(ar2)

// let numbers = [3, -33, -3, -35, 43, 0, 25, 10, -25];

// let result;
// let index;

// function removeSmallest(n, arr) {
// 	let arr1 = [...arr]
//   for (let i = 0; i < n; i++) {
// 		if (arr1.length === 0) return arr1;
//     result = arr1.reduce((acc, el) => {
// 			if (el < acc) {
// 				acc = el;
// 			}
// 			return acc;
//         });
// 		index = arr1.indexOf(result);
// 		arr1.splice(index, 1);
// 	}
// 	return arr1;
// }

// removeSmallest(4, numbers);
// console.log(numbers);

function count(array){
    let object={}
    let counter = 0;
    for(i=0;i<array.length;i++) {
      for(j=0;j<array.length;j++) {
        if(array[i] = array[j]) {
          debugger
            object[array[i]] = counter++
        }
      counter=0;
      }
    }
    return object;
  }

  count(['james', 'james', 'john']) 
