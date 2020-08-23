let input = document.querySelector('.selectRecipes');
let originalArray;

function changeArray(e) {
	let value = e.target.value;
	var acceptedword = new RegExp(value);

	const recipesContainer = document.querySelector('.heroes');
	const lisRecipes = recipesContainer.querySelectorAll('li');
	const lisRecipesArray = Array.from(lisRecipes);
	const lisRecipesArrayFiltered = lisRecipesArray.filter(
		(elem) => acceptedword.test(elem.innerText.toLowerCase()) === true
	);

	const newLiContainer = document.createElement('ul');
	recipesContainer.innerHTML = '';
	for (let liRecipe of lisRecipesArrayFiltered) {
		const newLi = document.createElement('li');
		const liContent = liRecipe.innerHTML;
		const definiiveLi = (newLi.innerHTML = liContent);
		recipesContainer.appendChild(newLi);
	}
}

function deleteArray() {
	const keyName = event.key;
	console.log(keyName);

	if (keyName === 'Backspace') {
		// do not alert when only Control key is pressed.
		return;
	}
}

input.addEventListener('input', changeArray);
input.addEventListener('keydown', deleteArray);
