/* let number = function (array) {
    let count = 1;
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        let result = `${count}: ${array[i]}`;
        count++;
        newArray.push(result)
    }

    return console.log(newArray);
}

number(['a', 'b', 'c']); */


let number = function (array) {
    // Segundo parámetro del map es un index
    let result = array.map((element, count) => `${count + 1}: ${element}`);
    return console.log(result);
}

number(['a', 'b', 'c']);