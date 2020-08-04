import React, { useEffect, useState } from 'react';
import recipeStore from '../stores/RecipeStore';
import { loadRecipe } from '../actions/RecipeAction';

function TopFiveComponent() {
	const [recipeList, setRecipeList] = useState(recipeStore.getRecipes);

	useEffect(() => {
		recipeStore.addChangeListener(onChange);
		if (recipeList.length === 0) {
			loadRecipe();
		}
		return () => recipeStore.removeChangeListener;
	}, [recipeList.length]);

	function onChange() {
		setRecipeList(recipeStore.getRecipes);
	}

	return (
		<div className="body__box">
			<h2>TOP FIVE FACOURITES!</h2>
		</div>
	);
}

export default TopFiveComponent;
