let input = document.querySelector('.selectRecipes');
let originalArray;
let originallisRecipes;
let originallisRecipesArray;

setTimeout(function () {
	originalArray = document.querySelector('.heroes');
	originallisRecipes = originalArray.childNodes;
	/* originallisRecipes = originalArray.querySelectorAll('li'); */
	/* originallisRecipesArray = Array.from(lisRecipes); */
}, 1000);

function changeArray(e) {
	let value = e.target.value;
	var acceptedword = new RegExp(value);

	const recipesContainer = document.querySelector('.heroes');
	const lisRecipes = recipesContainer.querySelectorAll('li');
	const lisRecipesArray = Array.from(lisRecipes);
	const lisRecipesArrayFiltered = lisRecipesArray.filter(
		(elem) => acceptedword.test(elem.innerText.toLowerCase()) === true
	);

	recipesContainer.innerHTML = '';
	for (let liRecipe of lisRecipesArrayFiltered) {
		const newLi = document.createElement('li');
		newLi.setAttribute('class', 'jumbotron li-product');
		const liContent = liRecipe.innerHTML;
		recipesContainer.appendChild(newLi);
	}
}

function deleteArray() {
	const keyName = event.key;
	console.log(keyName);

	if (keyName === 'Backspace') {
		originallisRecipes.innerHTML = '';
		window.location.href = '';

		setTimeout(function () {
			document.getElementById('selectRecipe').click();
		}, 20);
	}
}

input.addEventListener('input', changeArray);
input.addEventListener('keydown', deleteArray);
