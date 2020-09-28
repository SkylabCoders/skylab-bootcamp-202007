function filterArray(array, id) {
    let newArray = [];
    const check = array.some((elem) => elem + '' === id + '');

    if (!check) {
        newArray = [...array, id];
    } else {
        newArray = array;
    }
    
    return newArray;
}

function filterDelete(array, id) {
    let newArray = [];
    const check = array.some((elem) => elem + '' === id + '');

    if (check) {
        newArray = array.filter((arr) => arr + '' !== id + '');
    } else {
        newArray = array;
    }
    
    return newArray;
}


module.exports = { filterArray, filterDelete };
