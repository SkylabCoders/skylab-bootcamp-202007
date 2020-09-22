/* Test
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice 
*/

const characters = 'aabbcde'.toLowerCase().split('');
const charReducer = (accumulator, currentLetter) => {
    //    console.log(accumulator);
    //     console.log(currentLetter)
    const mysteryLetter = currentLetter;
    const value = accumulator[currentLetter] ? ++accumulator[currentLetter] : 1;

    //    console.log(value);
    return {
        ...accumulator,
        [mysteryLetter]: value
    };
};

const response = characters.reduce(charReducer, {});

console.log(response)