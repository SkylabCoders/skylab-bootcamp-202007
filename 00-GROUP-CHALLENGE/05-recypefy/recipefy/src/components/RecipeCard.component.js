import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import recipeStore from '../stores/RecipeStore';
import { loadRecipe } from '../actions/RecipeAction';

function RecipeCard({ title }) {
	const [recipesList, setRecipes] = useState(recipeStore.getRecipes());
	const [actualRecipePhoto, setActualRecipePhoto] = useState('');
	const [actualRecipeTitle, setActualRecipeTitle] = useState('');

	useEffect(() => {
		recipeStore.addChangeListener(onChange);
		if (recipesList.length === 0) {
			loadRecipe();
			console.log(recipesList);
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
		<div to={`/recipe-page/${actualRecipeTitle}`} className="body__box">
			<Link className="recipe-card ">
				<div className="recipe__text">
					<h2 className="box__title">{actualRecipeTitle}</h2>
					<div className="recipe__text--preferences">
						<img
							className="preferences__icon preference__balanced"
							src="https://image.flaticon.com/icons/png/512/30/30636.png"
						></img>
						<img
							className="preferences__icon"
							src="https://icon-library.com/images/protein-icon/protein-icon-0.jpg"
						></img>
						<img
							className="preferences__icon"
							src="https://www.pinclipart.com/picdir/big/150-1505070_low-fat-or-low-carb-icon-clipart.png"
						></img>
						<img
							className="preferences__icon"
							src="https://cdn2.iconfinder.com/data/icons/organic-food-1/24/Low_Carb-512.png"
						></img>
						<img
							className="preferences__icon"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Vegan_friendly_icon.svg/900px-Vegan_friendly_icon.svg.png"
						></img>
						<img
							className="preferences__icon"
							src="https://img.icons8.com/plasticine/100/000000/vegetarian-food.png"
						></img>
						<img
							className="preferences__icon"
							src="https://www.footys.co.za/images/icon-sugar.png"
						></img>
						<img
							className="preferences__icon preference__peanut-free"
							src="https://cdn0.iconfinder.com/data/icons/food-product-labels/128/peanut-free-512.png"
						></img>
						<img
							className="preferences__icon preference__tree-nut-free"
							src="https://cdn3.iconfinder.com/data/icons/food-allergens-3/77/allergens-tree-nut-free-512.png"
						></img>
						<img
							className="preferences__icon preference__alcohol-free"
							src="https://cdn3.iconfinder.com/data/icons/food-allergens-3/77/allergens-alcohol-free-512.png"
						></img>
					</div>
				</div>
				<Link to="./RecipePage" className="link">
					<img className="recipe__image" src={actualRecipePhoto}></img>
				</Link>
			</Link>
		</div>
	);
}

export default RecipeCard;
