import React, { useState, useEffect } from 'react';
import './RecipePage.scss';
import recipe from '../stores/RecipeStore';
import recipeStore from '../stores/RecipeStore';
function RecipePage() {
	const [balanced, setBalanced] = useState(false);
	const [protein, setProtein] = useState(false);
	const [lowFat, setLowFat] = useState(false);
	const [lowCarb, setLowCarb] = useState(false);
	const [vegan, setVegan] = useState(false);
	const [vegetarian, setVegetarian] = useState(false);
	const [sugar, setSugar] = useState(false);
	const [peanut, setPeanut] = useState(false);
	const [treenut, setTreenut] = useState(false);
	const [alcohol, setAlcohol] = useState(false);
	const [recipeElement, setRecipeElement] = useState(
		recipe.getRecipeByTitle(getUrl())
	);
	const [titleString] = useState(getUrl());
	const [time, setTime] = useState('');
	const [calories, setCalories] = useState('');
	const [yeld, setYeld] = useState('');
	const [ingredients, setIngredients] = useState([]);
	const [photo, setPhoto] = useState('');
	const [url, setUrl] = useState('');
	const [sourceItem, setSourceItem] = useState(``);
	let [preferencesList, setPreferencesList] = useState();

	useEffect(() => {
		recipeStore.addChangeListener(onChange);
		if (!recipeElement) {
			setRecipeElement(recipe.getRecipeByTitle(getUrl()));
		} else {
			{
				if (!recipeElement.time) {
					setTime('--');
				} else {
					setTime(`${recipeElement.time} min`);
				}
				setCalories(recipeElement.calories.toFixed(2));
				if (yeld === null || yeld === undefined || yeld === '') {
					setYeld('--');
				} else {
					setYeld(recipeElement.yeld);
				}
				setIngredients(recipeElement.ingredients);
				setPhoto(recipeElement.photo);
				setUrl(recipeElement.url);
				setSourceItem(`source: ${recipeElement.source}`);
				setPreferencesList(recipeElement.preferences);
				if (preferencesList) {
					changePreferences(preferencesList);
				}
			}
		}
		return () => recipeStore.removeChangeListener(onChange);
	}, [recipeElement, preferencesList]);

	function changePreferences(listOfPreferences) {
		for (let i = 0; i < listOfPreferences.length; i++) {
			if (listOfPreferences[i] === 'Balanced') {
				setBalanced(true);
			} else if (listOfPreferences[i] === 'High-Protein') {
				setProtein(true);
			} else if (listOfPreferences[i] === 'Low-Fat') {
				setLowFat(true);
			} else if (listOfPreferences[i] === 'Low-Carb') {
				setLowCarb(true);
			} else if (listOfPreferences[i] === 'Vegan') {
				setVegan(true);
			} else if (listOfPreferences[i] === 'Vegetarian') {
				setVegetarian(true);
			} else if (listOfPreferences[i] === 'Sugar-Conscious') {
				setSugar(true);
			} else if (listOfPreferences[i] === 'Peanut-Free') {
				setPeanut(true);
			} else if (listOfPreferences[i] === 'Tree-Nut-Free') {
				setTreenut(true);
			} else if (listOfPreferences[i] === 'Alcohol-Free') {
				setAlcohol(true);
			}
		}
	}
	function onChange() {
		setRecipeElement(recipe.getRecipeByTitle(getUrl()));
	}

	function getUrl() {
		var actual = window.location + '';
		var split = actual.split('/');
		var title = split[split.length - 1];

		return decodeURI(title);
	}

	return (
		<div className="desktop__display body-content">
			<div className="desktop__display--right">
				<section className="flex__row info__container">
					<div className="flex__column data__container">
						<div className="recipe__icon-list">
							<div className="box__icon">
								<p className="text__icon">{time}</p>
								<div id="time" className="data__circle time__background"></div>
							</div>
							<div className="box__icon">
								<p className="text__icon">{calories}</p>
								<div
									id="calories"
									className="data__circle calories__background"
								></div>
							</div>
							<div className="box__icon">
								<p className="text__icon">{yeld}</p>
								<div id="yeld" className="data__circle yield__background"></div>
							</div>
						</div>
						<div className="title__img__container flex__column">
							<h2>{titleString}</h2>
							<img
								alt=""
								className="image-recipe"
								id="image-recipe"
								src={photo}
							/>
							<p className="ingredients__source">{sourceItem}</p>
						</div>
					</div>
				</section>
			</div>

			<div className="desktop__display--left">
				<section>
					<div className="flex__row buttons__container">
						<div className="flex__column">
							<h2 id="title" className="desktop__recipe__title">
								{titleString}
							</h2>

							<div className="underphoto__button">
								<div className="recipe__text--preferences">
									{balanced && (
										<img
											alt=""
											className="preferences__icon preference__balanced"
											id="balanced"
											src="https://image.flaticon.com/icons/png/512/30/30636.png"
										></img>
									)}
									{protein && (
										<img
											alt=""
											className="preferences__icon"
											id="protein"
											src="https://icon-library.com/images/protein-icon/protein-icon-0.jpg"
										></img>
									)}
									{lowFat && (
										<img
											alt=""
											className="preferences__icon"
											id="low_fat"
											src="https://www.pinclipart.com/picdir/big/150-1505070_low-fat-or-low-carb-icon-clipart.png"
										></img>
									)}
									{lowCarb && (
										<img
											alt=""
											className="preferences__icon"
											id="low_carb"
											src="https://cdn2.iconfinder.com/data/icons/organic-food-1/24/Low_Carb-512.png"
										></img>
									)}
									{vegan && (
										<img
											alt=""
											className="preferences__icon"
											id="vegan"
											src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Vegan_friendly_icon.svg/900px-Vegan_friendly_icon.svg.png"
										></img>
									)}

									{vegetarian && (
										<img
											alt=""
											className="preferences__icon"
											id="vegetarian"
											src="https://img.icons8.com/plasticine/100/000000/vegetarian-food.png"
										></img>
									)}
									{sugar && (
										<img
											alt=""
											className="preferences__icon"
											id="sugar"
											src="https://www.footys.co.za/images/icon-sugar.png"
										></img>
									)}
									{peanut && (
										<img
											alt=""
											className="preferences__icon preference__peanut-free"
											id="peanut"
											src="https://cdn0.iconfinder.com/data/icons/food-product-labels/128/peanut-free-512.png"
										></img>
									)}
									{treenut && (
										<img
											alt=""
											className="preferences__icon preference__tree-nut-free"
											id="treenut"
											src="https://cdn3.iconfinder.com/data/icons/food-allergens-3/77/allergens-tree-nut-free-512.png"
										></img>
									)}
									{alcohol && (
										<img
											alt=""
											className="preferences__icon preference__alcohol-free"
											id="alcohol"
											src="https://cdn3.iconfinder.com/data/icons/food-allergens-3/77/allergens-alcohol-free-512.png"
										></img>
									)}
								</div>
								{!preferencesList && (
									<p className="error_text">No preferences</p>
								)}
							</div>
						</div>
						<a href={url} className="underphoto__button--source">
							LET'S COOK IT!<br></br> CLICK HERE
						</a>
					</div>
				</section>
				<section className="flex__column ingredients__container">
					<p className="ingredients__title">INGREDIENTS</p>
					<ul className="ingredients__text" id="ingredients">
						{ingredients.map((ingredient) => (
							<li>{ingredient}</li>
						))}
					</ul>
				</section>
			</div>
		</div>
	);
}

export default RecipePage;
