function convertArrayToObject(arr) {
    return arr.reduce((acc, current) => {
        acc[current[0]] = current[1];
        return acc;
    }, {});
}

let obj = convertArrayToObject([
    [1, 'one'],
    [2, 'two'],
    [3, 'tree'],
    [4, 'four']
]);
console.log(obj);
