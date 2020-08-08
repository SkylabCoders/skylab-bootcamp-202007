import React, { useEffect, useState } from 'react';
import recipeStore from '../stores/RecipeStore';
import RecipeCard from './RecipeCard.component';
import './SearchResult.css';

function SearchResult() {
	const [searchListResult, setSearchListResult] = useState(
		recipeStore.getRecipes
	);
	const [chargeTime, setChargeTime] = useState(false);

	useEffect(() => {
		recipeStore.addChangeListener(onChange);
		chargeList();
		return () => recipeStore.removeChangeListener;
	}, [searchListResult.length, chargeTime]);

	function onChange() {
		setSearchListResult(recipeStore.getRecipes);
	}

	function chargeList() {
		setTimeout(() => {
			setChargeTime(true);
		}, 2000);
	}
	return (
		<div className="result-section body-content">
			{searchListResult && (
				<>
					<h2>YOUR RESULTS!</h2>
					{searchListResult.map((recipe) => (
						<RecipeCard title={recipe.title} key={recipe.title} />
					))}
				</>
			)}
			{searchListResult.length === 0 && (
				<>
					{!chargeTime && (
						<img
							alt="loading"
							src="https://media1.tenor.com/images/556e9ff845b7dd0c62dcdbbb00babb4b/tenor.gif?itemid=5345658"
						></img>
					)}
					{chargeTime && (
						<>
							<h2 className="box__title">Your search have no results!</h2>
							<h3>Try again</h3>
							<p>
								Perhaphs is an error with the search or your search don't have
								any matches.
							</p>
						</>
					)}
				</>
			)}
		</div>
	);
}

export default SearchResult;
