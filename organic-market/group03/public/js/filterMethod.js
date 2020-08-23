function changeArray() {
	let acceptedword = /pear/;
	const recipesContainer = document.querySelector('.heroes');
	const lisRecipes = recipesContainer.querySelectorAll('li');
	const lisRecipesArray = Array.from(lisRecipes);
	const lisRecipesArrayFiltered = lisRecipesArray.filter(
		(elem) => acceptedword.test(elem.innerText.toLowerCase()) === true
	);
	console.log(lisRecipesArrayFiltered);
	for (let liRecipe of lisRecipes) {
		/* console.log(liRecipe.innerHTML); */
	}
}

document.addEventListener('click', changeArray);
