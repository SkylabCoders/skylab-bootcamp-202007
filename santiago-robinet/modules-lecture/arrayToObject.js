function convertArrayToObject(array){
    return array.reduce((accumulator, value) => {
        accumulator[value[0]] = value[1];
        return accumulator;

    }, {});
    
}
    const object = convertArrayToObject([
        [1,'One'],
        [2,'Two'],
        [3,'Three'],
        [4,'Four']
    ])