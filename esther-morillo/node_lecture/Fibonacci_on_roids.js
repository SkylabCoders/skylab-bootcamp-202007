function customFib(signature, indexes, n) {
    let position = 0;
    let result = 0;
    let add = [];

    while (add.length < n) {
        for (let i = 0; i < indexes.length; i++) {
            result += signature[indexes[i]];
            add = [...signature, result];
        }
        result = 0;
    }

    return console.log(add);
}

customFib([1, 1], [0, 1], 4);