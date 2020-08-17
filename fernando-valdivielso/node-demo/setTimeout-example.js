let customNumber = 2
// setTimeout(() => {
//     console.log(`Hello after ${customNumber} seconds`);
// }, customNumber * 1000)


// const callback = () => {
//     console.log(`Hello after ${customNumber} seconds`);
// };
// setTimeout(callback, customNumber * 1000);

//=============

// const callback = (seconds) => {
//     console.log(`Hello after ${seconds} seconds`);
// };

// setTimeout(callback, customNumber * 1000, customNumber);

//=============


// const callback = (seconds) => console.log(`Hello after ${seconds} seconds`);

// setTimeout(callback, seconds * 1000, seconds, seconds * 2);



//create a function that prints Hello after 4 seconds and Hello after 8 seconds,
// function gilbe() {
//     let seconds = 4;
//     const callback = (seconds) => console.log(`Hello after ${seconds} seconds`);

//     setTimeout(callback, seconds * 1000, seconds);
//     seconds = seconds * 2;
//     setTimeout(callback, seconds * 1000, seconds);
// }

// gilbe()



//print 'Hello World' once a second for 5 times and 'done' after it
let count = 0;
const interval = setInterval(() => {
    console.log('Hello World')
    if (count === 3) clearInterval(interval);
    count++;
}, count * 1000)
