import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import recipeStore from '../stores/RecipeStore';
import { loadRecipe } from '../actions/RecipeAction';

function ListItemRecipe({ id }) {
	const [recipesList, setRecipes] = useState(recipeStore.getRecipes());
	const [actualRecipePhoto, setActualRecipePhoto] = useState('');
	const [actualRecipeTitle, setActualRecipeTitle] = useState('');

	useEffect(() => {
		recipeStore.addChangeListener(onChange);
		if (recipesList.length === 0) {
			loadRecipe();
			console.log(recipesList);
		} else {
			const actualRecipe = recipeStore.getRecipeById(id);
			if (actualRecipe) {
				setActualRecipePhoto(actualRecipe.photo);
				setActualRecipeTitle(actualRecipe.title);
			}
		}
		return () => recipeStore.removeChangeListener(onChange);
	}, [recipesList.length]);

	function onChange() {
		setRecipes(recipeStore.getRecipes());
	}
	return (
		<Link to={`/recipe-page/${id}`} key={id}>
			<img alt="Recipe" src={actualRecipePhoto}></img>
			<h4>{actualRecipeTitle}</h4>
		</Link>
	);
}

export default ListItemRecipe;
