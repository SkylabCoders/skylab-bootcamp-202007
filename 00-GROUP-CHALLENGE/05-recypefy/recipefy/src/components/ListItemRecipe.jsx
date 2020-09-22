import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import recipeStore from '../stores/RecipeStore';
import './ListItemRecipe.scss';
import Proptypes from 'prop-types';

function ListItemRecipe({ title }) {
	const [recipesList, setRecipes] = useState(recipeStore.getRecipes());
	const [actualRecipePhoto, setActualRecipePhoto] = useState('');
	const [actualRecipeTitle, setActualRecipeTitle] = useState('');

	useEffect(() => {
		recipeStore.addChangeListener(onChange);
		if (recipesList.length === 0) {
			recipeStore.getRecipes();
		} else {
			const actualRecipe = recipeStore.getRecipeByTitle(title);
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
		<Link
			to={`/recipe-page/${title}`}
			key={title}
			className="recipe-list__item"
		>
			<img alt="Recipe" src={actualRecipePhoto}></img>
			<h4>{actualRecipeTitle}</h4>
		</Link>
	);
}

ListItemRecipe.propTypes = {
	title: Proptypes.string.isRequired
};

export default ListItemRecipe;
