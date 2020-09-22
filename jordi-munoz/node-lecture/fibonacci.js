

function customFib(signature, indexes, n) {
    let add = 0;

    while (signature.length <= n) {
        for (let i = 0; i < indexes.length; i++) {
            for (let j = 0; j < signature.length; j++) {
                if (j === indexes[i]) {
                    add = add + signature[j];
                }
            }

        }
        signature.push(add);
    }

    return signature[n];
}
customFib([7, 3, 4, 1], [1, 1], 6);