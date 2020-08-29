// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric 
// digits that occur more than once in the input string. The input string can be assumed to contain only alphabets 
// (both uppercase and lowercase) and numeric digits.
// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice




// function duplicate(string) {
//     let count = 0;
//     let value = [];
//     let array = string.toLowerCase().split('');
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//             if (i === j || i > j) {
//                 continue;
//             } else if (value.includes(array[i])) {
//                 continue;
//             } else if (array[i] === array[j]) {
//                 value.push(array[i])
//                 count++;
//                 break;
//             }
//         }

//     }
//     console.log(count)
//     return (count)
// }

// duplicate('Indivisibilities')

//====================================

// Challenge 1:
//   Print "Hello World" forever. Starting with a delay of 1 second
//   but then incrementing the delay by 1 second each time.
//   The second time will have a delay of 2 seconds
//   The third time will have a delay of 3 seconds.
//   Include the delay in the printed message
//   Hello World. 1
//   Hello World. 2
//   Hello World. 3
//   ...
//   Constraints: You can only use const (no let or var)


// let count = 0;
// setInterval(() => console.log('Hello World. ' + ++count), 1000 * ++count)

// const greeting = (delay) => {
//     setTimeout(() => {
//         console.log('Hello World. ' + delay);
//         greeting(delay + 1);

//     }, delay * 1000)
// };

// greeting(1);


//==================================

// Challenge 2:
//   Just like Challenge 1 but this time with repeated delay values.
//   Print Hello World 5 times with a delay of 100 ms.
//   Then Print it again 5 more times with a delay of 200 ms.
//   Then print it again 5 more times with a delay of 300 ms.
//   And so on until the program is killed.
//   Include the delay in the printed message:
//   Hello World. 100
//   Hello World. 100
//   Hello World. 100
//   Hello World. 100
//   Hello World. 100
//   Hello World. 200
//   Hello World. 200
//   Hello World. 200
//   ...
//   Constraints:
//    - Only use setInterval (not setTimeout)
//    - Use only ONE if statement


// let delay = 100
// let count = 5;
// let interval = null;
// function greeting(delay) {
//     if (count === 5) {
//         clearInterval(interval)
//         interval = setInterval(() => {
//             console.log('Hello World. ' + delay);
//             greeting(delay + 100);
//         }, delay)
//         count = 0;
//     }
//     count += 1;
// };

// greeting(100);





function removeSmallest(n, array) {
    let count = 0;
    let countArr = [];

    switch (n) {
        case (n > array.length):
            return [];
        case (n <= 0):
            return array;
        default:
            for (let i = 0; i < array.length; i++) {
                for (let j = 0; j < array.length; j++) {
                    if (i === j) {
                        continue;
                    } else if (array[i] > array[j]) {
                        count++
                    }
                }
                countArr.push(count);
                count = 0;
            }




            console.log(countArr)
    }

}


removeSmallest(2, [2, 7, 4, 5])