let f = 0;
let bucle = 1;

for (let i = 0; i < 10000; i++) {
    setTimeout(() => {
        console.log(`Hello World. ${bucle * 1000}`);
    }, bucle * 1000);
    f++
    if (f === 5) {
        bucle++;
        f = 0;
    }


}
