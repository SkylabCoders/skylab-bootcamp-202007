let firstArr = [["Stefan", "Raj", "Marie"],
["Alexa", "Amy", "Edward"],
["Liz", "Claire", "Juan"],
["Dee", "Luke", "Katie"]];

function binRota(arr) {
    let newArr = [];
    let changeRow = true;

    for (let i = 0; i < arr.length; i++) {
        if (changeRow) {
            for (let j = 0; j < arr[i].length; j++) {
                newArr.push(arr[i][j]);
            }
            changeRow = false;
        } else {
            for (let j = arr[i].length - 1; j >= 0; j--) {
                newArr.push(arr[i][j]);
            }
            changeRow = true;
        }

    }

    return newArr;
}