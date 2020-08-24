function duplicate(string){
    const newString = string.toLowerCase();
    const stringToArray = newString.split('');

    const charReducer = (accumulator, currentLetter) => {
        console.log(accumulator);
        const value = accumulator[currentLetter] ? ++accumulator[currentLetter] : 1;
        return {
            ...accumulator,
            [currentLetter]: value
        }
    }

    const response =  stringToArray.reduce(charReducer, {});

}