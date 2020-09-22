

const greeting = (delay) => {
    let count = 0;
    const interval = setInterval(() => {
        console.log('Hello World ' + delay * 100);
        count++;
        if (count === 5) {
            clearInterval(interval);
            greeting(delay + 1);
        }
    }, delay * 100);
};

greeting(1);