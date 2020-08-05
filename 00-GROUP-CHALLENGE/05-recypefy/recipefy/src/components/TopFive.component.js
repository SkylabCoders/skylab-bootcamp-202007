import React, { useEffect, useState } from 'react';
import recipeStore from '../stores/RecipeStore';
import { loadRecipe } from '../actions/RecipeAction';
import ListItemRecipe from './ListItemRecipe';
import './TopFive.component.css';

function TopFiveComponent() {
	const [topFiveList, setTopFiveList] = useState(recipeStore.getTopFiveRecipes);

	useEffect(() => {
		recipeStore.addChangeListener(onChange);
		if (topFiveList.length === 0) {
			loadRecipe();
		}
		return () => recipeStore.removeChangeListener;
	}, [topFiveList.length]);

	function onChange() {
		setTopFiveList(recipeStore.getTopFiveRecipes);
	}

	return (
		<div className="body__box box__top-five">
			<h2>TOP FIVE FAVOURITES!</h2>
			<ul>
				{topFiveList.map((recipe) => (
					<ListItemRecipe title={recipe.title} />
				))}
			</ul>
		</div>
	);
}

export default TopFiveComponent;
