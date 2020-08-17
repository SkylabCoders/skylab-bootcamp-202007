const characters = 'aabbcde'.toLowerCase().split('');

const charReducer = (accumulator, currentLetter) => {
    console.log(accumulator);
    const mysteryLetter = currentLetter;
    const value = accumulator[mysteryLetter] ? accumulator[mysteryLetter] + 1 : 1;
    return {
        ...accumulator,
        [mysteryLetter]: value
    };
};

const response = characters.reduce(charReducer, {});
console.log(response);
