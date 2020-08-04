import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import recipeStore from '../stores/RecipeStore';
import { loadRecipe } from '../actions/RecipeAction';

function ListItemRecipe({ id }) {
	const [recipes, setRecipes] = useState(recipeStore.getRecipes());

	const actualRecipe = null;

	useEffect(() => {
		recipeStore.addChangeListener(onChange);
		if (recipes.length === 0) {
			loadRecipe();
		} else if (!actualRecipe) {
			actualRecipe = recipeStore.getRecipeById(id);
		}
		return () => recipeStore.removeChangeListener(onChange);
	});

	function onChange() {
		setRecipes(recipeStore.getRecipeById(id));
	}
	return (
		<Link to={`/recipe-page/${actualRecipe.id}`} key={actualRecipe.id}>
			<img alt="Recipe image" src={actualRecipe.photo}></img>
			<h4>{actualRecipe.title}</h4>
		</Link>
	);
}

export default ListItemRecipe;
