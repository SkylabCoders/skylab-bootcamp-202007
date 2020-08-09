import React, { useEffect, useState } from 'react';
import recipeStore from '../stores/RecipeStore';
import ListItemRecipe from './ListItemRecipe';

function TopFiveComponent() {
	const [topFiveList, setTopFiveList] = useState(recipeStore.getTopFiveRecipes);

	useEffect(() => {
		recipeStore.addChangeListener(onChange);
		if (topFiveList.length === 0) {
			setTopFiveList(recipeStore.getTopFiveRecipes);
		}
		return () => recipeStore.removeChangeListener;
	}, [topFiveList.length]);

	function onChange() {
		setTopFiveList(recipeStore.getTopFiveRecipes);
	}

	return (
		<div className="body__box body__list box__top-five">
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
