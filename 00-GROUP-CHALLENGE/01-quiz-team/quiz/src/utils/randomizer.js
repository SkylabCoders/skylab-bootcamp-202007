export function getRandomIntInclusive(min, max) {
    const randomBuffer = new Uint32Array(1);

    window.crypto.getRandomValues(randomBuffer) ;

    let randomNumber = randomBuffer[0] / (0xffffffff + 1); // 0xffffffff + 1 is the max of Uint32Array

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(randomNumber * (max - min + 1)) + min;
}