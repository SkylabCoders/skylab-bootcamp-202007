var number = function (array) {
    let count = 1;
    let newArr = [];

    for (let i = 0; i < array.length; i++) {
        newArr.push(count + ': ' + array[i])
        count++;
    }

    return newArr;
}

number(['a', 'b', 'c']);