/* const seconds = 4;

const callback = (secs) => {
    console.log(`Hello after ${secs} seconds`);

}
for (let counter = 1; counter < 3; counter++) {
    setTimeout(callback, seconds * 1000 * counter, seconds * counter);
}; */

let counter = 0;
const callback = () => {
    console.log('Hello World!');
    if (counter === 4) {
        clearInterval(interval);
        console.log('Done');
    }
    counter++;
};
const interval = setInterval(callback, counter);
