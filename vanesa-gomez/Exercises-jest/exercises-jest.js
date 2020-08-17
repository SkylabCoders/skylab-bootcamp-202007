/*Kevin is noticing his space run out! Write a function that removes the spaces from 
the values and returns an array showing the space decreasing. For example, 
running this function on the array 
['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace'].*/

export default function spaceRunOut(array) {
	let response = [];
	array.forEach((element, index) => {
		if (index === 0) {
			response.push(element);
		} else {
			response.push(response[response.length - 1] + element);
		}
	});
	return response;
}
