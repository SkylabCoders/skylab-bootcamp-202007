import React, { useEffect, useState } from 'react';
import recipeStore from '../stores/RecipeStore';
import { loadRecipe } from '../actions/RecipeAction';
import RecipeCard from './RecipeCard.component';
import './SearchResult.css';

function SearchResult() {
	const [searchListResult, setSearchListResult] = useState(
		recipeStore.getRecipes
	);

	useEffect(() => {
		recipeStore.addChangeListener(onChange);
		if (searchListResult.length === 0) {
			loadRecipe();
		}
		return () => recipeStore.removeChangeListener;
	}, [searchListResult.length]);

	function onChange() {
		setSearchListResult(recipeStore.getRecipes);
	}
	return (
		<div className="result-section">
			<h2>YOUR RESULTS!</h2>
			{searchListResult.map((recipe) => (
				<RecipeCard title={recipe.title} key={recipe.title} />
			))}
		</div>
	);
}

export default SearchResult;
