/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

//const characters = 'abcde';
//response = characters.split('');

//Gilberto------------------------------------------------------------------------
//split y a minusculas
const characters = 'ABBA'.toLowerCase().split('');
//callback al reducer
const charReducer = (accumulator, currentLetter) => {
	//console.log(accumulator);
	//const value = 1;
	//const value = accumulator[mysteryLetter] ? accumulator[currentLetter] + 1 : 1;
	const value = accumulator[currentLetter] ? ++accumulator[currentLetter] : 1;
	return { ...accumulator, [currentLetter]: value };
};

const response = characters.reduce(charReducer, {});
console.log(response);
