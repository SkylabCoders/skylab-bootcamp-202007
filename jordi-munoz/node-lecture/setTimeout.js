const customNumber = 1;

const callback = (seconds) => {
    console.log(`Hello after ${customNumber} seconds!`);
}

setTimeout(callback, customNumber * 1000, customNumber);

