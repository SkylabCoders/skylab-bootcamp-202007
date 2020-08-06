import React, { useState, useEffect } from 'react';
import './Recommendation.css';
import recipeStore from '../stores/RecipeStore';
import { Link } from 'react-router-dom';
import { loadRecipe } from '../actions/RecipeAction';

function Recomendation() {
	const [recipeList, setRecipeList] = useState(recipeStore.getRecipes);
	const [actualRecipe, setActualRecipe] = useState({});
	useEffect(() => {
		recipeStore.addChangeListener(onChange);
		if (recipeList.length === 0) {
			loadRecipe();
		} else {
			setActualRecipe(recipeList[Math.floor(Math.random() * 10)]);
		}
		return () => recipeStore.removeChangeListener;
	}, [recipeList.length]);

	function onChange() {
		setRecipeList(recipeStore.getRecipes);
	}

	return (
		<section className="body__box--recipe-details body__box body__box--main-recomendations ">
			<div className="recipe__text">
				<h2 className="box__title">RECOMMENDATION:</h2>
				<h3 className="recipe__text--title">{actualRecipe.title}</h3>
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
				<img className="recipe__image" src={actualRecipe.photo}></img>
			</Link>
		</section>
	);
}
export default Recomendation;
