// con setInterval no se hace porque se llama a sí misma

const greeting = (delay) => {
    setTimeout(() => {
        console.log('Hello World ' + delay);
        greeting(delay + 1);
    }, delay * 1000);
};

greeting(1);