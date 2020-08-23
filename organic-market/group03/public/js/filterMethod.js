let input = document.querySelector('.selectRecipes');

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

input.addEventListener('input', changeArray);
input.addEventListener('input', changeArray);
