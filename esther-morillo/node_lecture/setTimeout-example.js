const customNumber = 4;

const callback = (seconds) => {
    console.log(`Hello after ${seconds} mili-seconds`);
};

setTimeout(callback, customNumber * 1000, customNumber)