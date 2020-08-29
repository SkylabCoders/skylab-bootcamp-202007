async function list() {
	const call = await fetch('https://pokeapi.co/api/v2/pokemon');
	const result = await call.json();
	return result.results;
}

let values = [];

(async function () {
	values = await list();
	values.forEach((index) => {
		const element = document.createElement('li');
		const text = document.createTextNode(index.name);
		element.appendChild(text);
		document.getElementById('list').appendChild(element);
	});
})();
