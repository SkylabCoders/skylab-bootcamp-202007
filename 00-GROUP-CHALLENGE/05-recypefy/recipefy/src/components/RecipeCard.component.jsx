import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import recipeStore from '../stores/RecipeStore';
import PropTypes from 'prop-types';

function RecipeCard({ title }) {
	let balanced = false;
	let protein = false;
	let low_fat = false;
	let low_carb = false;
	let vegan = false;
	let vegetarian = false;
	let sugar = false;
	let peanut = false;
	let treenut = false;
	let alcohol = false;
	const [actualRecipe, setActualRecipe] = useState(
		recipeStore.getRecipeByTitle(title)
	);
	const [actualRecipePhoto, setActualRecipePhoto] = useState('');
	const [actualRecipeTitle, setActualRecipeTitle] = useState('');
	useEffect(() => {
		recipeStore.addChangeListener(onChange);

		if (actualRecipe) {
			setActualRecipePhoto(actualRecipe.photo);
			setActualRecipeTitle(actualRecipe.title);
		}

		return () => recipeStore.removeChangeListener(onChange);
	}, []);

	function onChange() {
		setActualRecipe(recipeStore.getRecipeByTitle(title));
	}
	if (actualRecipe) {
		for (let i = 0; i < actualRecipe.preferences.length; i++) {
			if (actualRecipe.preferences[i] === 'Balanced') {
				balanced = true;
			} else if (actualRecipe.preferences[i] === 'High-Protein') {
				protein = true;
			} else if (actualRecipe.preferences[i] === 'Low-Fat') {
				low_fat = true;
			} else if (actualRecipe.preferences[i] === 'Low-Carb') {
				low_carb = true;
			} else if (actualRecipe.preferences[i] === 'Vegan') {
				vegan = true;
			} else if (actualRecipe.preferences[i] === 'Vegetarian') {
				vegetarian = true;
			} else if (actualRecipe.preferences[i] === 'Sugar-Conscious') {
				sugar = true;
			} else if (actualRecipe.preferences[i] === 'Peanut-Free') {
				peanut = true;
			} else if (actualRecipe.preferences[i] === 'Tree-Nut-Free') {
				treenut = true;
			} else if (actualRecipe.preferences[i] === 'Alcohol-Free') {
				alcohol = true;
			}
		}
		if (
			actualRecipe.yeld === null ||
			actualRecipe.yeld === undefined ||
			actualRecipe.yeld === ''
		) {
			actualRecipe.yeld = 4;
		}
		if (actualRecipe.time === '0 min') {
			actualRecipe.time = '65 min';
		}
	}

	return (
		<div className="body__box">
			{actualRecipe && (
				<Link className="recipe-card" to={`/recipe-page/${actualRecipeTitle}`}>
					<div className="recipe__text">
						<h2 className="box__title">{actualRecipeTitle}</h2>
						<div className="recipe__text--preferences">
							{balanced && (
								<img
									alt="preference"
									className="preferences__icon preference__balanced"
									src="https://image.flaticon.com/icons/png/512/30/30636.png"
								></img>
							)}
							{protein && (
								<img
									alt="preference"
									className="preferences__icon"
									src="https://icon-library.com/images/protein-icon/protein-icon-0.jpg"
								></img>
							)}
							{low_fat && (
								<img
									alt="preference"
									className="preferences__icon"
									src="https://www.pinclipart.com/picdir/big/150-1505070_low-fat-or-low-carb-icon-clipart.png"
								></img>
							)}
							{low_carb && (
								<img
									alt="preference"
									className="preferences__icon"
									src="https://cdn2.iconfinder.com/data/icons/organic-food-1/24/Low_Carb-512.png"
								></img>
							)}
							{vegan && (
								<img
									alt="preference"
									className="preferences__icon"
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Vegan_friendly_icon.svg/900px-Vegan_friendly_icon.svg.png"
								></img>
							)}
							{vegetarian && (
								<img
									alt="preference"
									className="preferences__icon"
									src="https://img.icons8.com/plasticine/100/000000/vegetarian-food.png"
								></img>
							)}
							{sugar && (
								<img
									alt="preference"
									className="preferences__icon"
									src="https://www.footys.co.za/images/icon-sugar.png"
								></img>
							)}
							{peanut && (
								<img
									alt="preference"
									className="preferences__icon preference__peanut-free"
									src="https://cdn0.iconfinder.com/data/icons/food-product-labels/128/peanut-free-512.png"
								></img>
							)}
							{treenut && (
								<img
									alt="preference"
									className="preferences__icon preference__tree-nut-free"
									src="https://cdn3.iconfinder.com/data/icons/food-allergens-3/77/allergens-tree-nut-free-512.png"
								></img>
							)}
							{alcohol && (
								<img
									alt="preference"
									className="preferences__icon preference__alcohol-free"
									src="https://cdn3.iconfinder.com/data/icons/food-allergens-3/77/allergens-alcohol-free-512.png"
								></img>
							)}
						</div>
						<div className="recomendation__other-details flex__row">
							<div>
								<div id="time" className="data__circle time__background"></div>
								<p className="text__icon">{actualRecipe.time}</p>
							</div>
							<div className="other-details__item">
								<div
									id="calories"
									className="data__circle calories__background"
								></div>
								<p className="text__icon">
									{Math.floor(actualRecipe.calories)}
								</p>
							</div>
							<div className="other-details__item">
								<div id="yeld" className="data__circle yield__background"></div>
								<p className="text__icon">{actualRecipe.yeld}</p>
							</div>
						</div>
					</div>
					<img
						alt="preference"
						className="recipe__image"
						src={actualRecipePhoto}
					></img>
				</Link>
			)}
			{!actualRecipe && (
				<>
					<h2 className="box__title">¡Your search have no results!</h2>
					<h3>Try again</h3>
					<p>
						Perhaphs is an error with the search or your search don't have any
						matches.
					</p>
				</>
			)}
		</div>
	);
}

RecipeCard.propTypes = {
	title: PropTypes.string.isRequired
}

export default RecipeCard;
