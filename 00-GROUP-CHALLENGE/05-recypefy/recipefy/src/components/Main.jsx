import React, { useState, useEffect } from 'react';
import ProfileComponent from './ProfileComponent';
import Recomendation from './Recomendation';
import TopFiveComponent from './TopFiveComponent';
import PreferencesList from './PreferenceList';
import { loadRecipe } from '../actions/RecipeAction';
import recipeStore from '../stores/RecipeStore';
import './Main.scss';

function Main() {
	const [recipeList, setRecipeList] = useState(recipeStore.getRecipes);
	const [chargeTime, setChargeTime] = useState(false);

	useEffect(() => {
		recipeStore.addChangeListener(onChange);
		if (recipeList.length === 0) {
			loadRecipe();
			chargeList();
		} else {
			resetTime();
		}
		return () => recipeStore.removeChangeListener;
	}, [recipeList.length, chargeTime]);

	function onChange() {
		setRecipeList(recipeStore.getRecipes);
	}
	function chargeList() {
		setTimeout(() => {
			setChargeTime(true);
		}, 3000);
	}
	function resetTime() {
		setChargeTime(false);
	}

	return (
		<div className="body-content">
			{recipeList.length !== 0 && (
				<>
					<ProfileComponent />
					<main className="Main-page">
						<Recomendation />
						<TopFiveComponent />
						<PreferencesList />
					</main>
				</>
			)}
			{recipeList.length === 0 && (
				<div className="result-section body-content">
					{!chargeTime && (
						<div className="loading-container">
							<img
								className="loading"
								alt="loading"
								src="https://media1.tenor.com/images/8a1df0caea44830aa0ecf99ac223c747/tenor.gif?itemid=15085886"
							></img>
							<p>loading...</p>
						</div>
					)}
					{chargeTime && (
						<>
							<h2 className="box__title">Ups! We have and error</h2>
							<h3>Try again later</h3>
							<p>We have some isues wit the data base</p>
						</>
					)}
				</div>
			)}
		</div>
	);
}

export default Main;
