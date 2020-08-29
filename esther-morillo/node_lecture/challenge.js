/* const seconds = 4;

const callback = (seconds) => {
    console.log(`Hello after ${seconds} seconds`);
};

for(let counter = 1; counter < 3; counter ++) {

    setTimeout(callback, seconds * 1000 * counter, seconds * counter)
} */



let counter = 0;

const callback = () => {
    console.log(`Hello World`);
    if(counter === 3) {
        console.log('A comer...');
        clearInterval(interval)
    }
    
    counter++;
};

const interval = setInterval(callback, 1000)





