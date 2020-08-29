function binRota(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            for (let j = 0; j < arr[i].length; j++) {
                result = [...result, arr[i][j]]
            }
        } else {
            for (let j = arr[i].length - 1; j >= 0; j--) {
                result = [...result, arr[i][j]]
            }
        }
    }
    return result;
}

binRota([
    ["Stefan", "Raj", "Marie"],
    ["Alexa", "Amy", "Edward"],
    ["Liz", "Claire", "Juan"],
    ["Dee", "Luke", "Katie"]
])