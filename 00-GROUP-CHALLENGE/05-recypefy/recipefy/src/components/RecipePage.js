<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import receteListMoked from '../Recipe.mok.js';
import './RecipePage.css';
import recipe from '../stores/RecipeStore';

function RecipePage() {
	const [preferencies, setPreferencies] = useState({
		balanced: false,
		protein: false,
		low_fat: true,
		low_carb: false,
		vegan: true,
		vegetarian: false,
		sugar: false,
		peanut: true,
		treenut: true,
		alcohol: false
	});

	let [recipeElement] = useState(recipe.getRecipeByTitle(getUrl()));

	function getUrl() {
		//Se obtiene el valor de la URL desde el navegador
		var actual = window.location + '';
		//Se realiza la división de la URL
		var split = actual.split('/');
		//Se obtiene el ultimo valor de la URL
		var title = split[split.length - 1];

		return decodeURI(title);
	}

	recipeElement = recipe.getRecipeByTitle(getUrl());

	/*for (let i = 0; i < recipeElement.preferences.length; i++) {
		switch (recipeElement.preferences[i]) {
			case 'Balanced':
				setPreferencies((preferencies.balanced = true));
				break;
			case 'High-Protein':
				setPreferencies((preferencies.protein = true));
				break;
			case 'Low-Fat':
				setPreferencies((preferencies.low_fat = true));
				break;
			case 'Low-Carb':
				setPreferencies((preferencies.low_carb = true));
				break;
			case 'Vegan':
				setPreferencies((preferencies.vegan = true));
				break;
			case 'Vegetarian':
				setPreferencies((preferencies.vegetarian = true));
				break;
			case 'Sugar-Conscious':
				setPreferencies((preferencies.sugar = true));
				break;
			case 'Peanut-Free':
				setPreferencies((preferencies.peanut = true));
				break;
			case 'Tree-Nut-Free':
				setPreferencies((preferencies.treenut = true));
				break;
			case 'Alcohol-Free':
				setPreferencies((preferencies.alcohol = true));
				break;
		}
	}*/

	const [titleString] = useState(recipeElement.title);
	let [time] = useState(`${recipeElement.time} min`);
	if (time === '0 min') {
		time = '65 min';
	}
	const [calories] = useState(recipeElement.calories.toFixed(2));
	let [yeld] = useState(recipeElement.yeld);
	if (yeld === null || yeld === undefined || yeld === '') {
		yeld = 4;
	}
	const [ingredients] = useState(recipeElement.ingredients);
	const [photo] = useState(recipeElement.photo);

	return (
		<div className="desktop__display">
			<div className="desktop__display--right">
				<section className="flex__row info__container">
					<div className="flex__column data__container">
						<div id="time" className="data__circle time__background">
							{time}
						</div>
						<div id="calories" className="data__circle calories__background">
							{calories}
						</div>
						<div id="yeld" className="data__circle yield__background">
							{yeld}
						</div>
					</div>
					<div className="title__img__container flex__column">
						<h2>{titleString}</h2>
						<img id="image-recipe" src={photo} />
					</div>
				</section>
			</div>

			<div className="desktop__display--left">
				<section>
					<div className="flex__row buttons__container">
						<div className="flex__column">
							<h2 id="title" className="desktop__recipe__title">
								{receteListMoked[0].title}
							</h2>
							<div className="underphoto__button flex__row rate__recipe">
								<p className="rate__elem">RATE:</p>
								<p className="rate__elem">{receteListMoked[0].puntuation}</p>
								<button>+</button>
								<button>-</button>
							</div>
							<div className="underphoto__button preference__box">
								<div className="recipe__text--preferences">
									{preferencies.balanced && (
										<img
											className="preferences__icon preference__balanced"
											id="balanced"
											src="https://image.flaticon.com/icons/png/512/30/30636.png"
										></img>
									)}
									{preferencies.protein && (
										<img
											className="preferences__icon"
											id="protein"
											src="https://icon-library.com/images/protein-icon/protein-icon-0.jpg"
										></img>
									)}
									{preferencies.low_fat && (
										<img
											className="preferences__icon"
											id="low_fat"
											src="https://www.pinclipart.com/picdir/big/150-1505070_low-fat-or-low-carb-icon-clipart.png"
										></img>
									)}
									{preferencies.low_carb && (
										<img
											className="preferences__icon"
											id="low_carb"
											src="https://cdn2.iconfinder.com/data/icons/organic-food-1/24/Low_Carb-512.png"
										></img>
									)}
									{preferencies.vegan && (
										<img
											className="preferences__icon"
											id="vegan"
											src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Vegan_friendly_icon.svg/900px-Vegan_friendly_icon.svg.png"
										></img>
									)}

									{preferencies.vegetarian && (
										<img
											className="preferences__icon"
											id="vegetarian"
											src="https://img.icons8.com/plasticine/100/000000/vegetarian-food.png"
										></img>
									)}
									{preferencies.sugar && (
										<img
											className="preferences__icon"
											id="sugar"
											src="https://www.footys.co.za/images/icon-sugar.png"
										></img>
									)}
									{preferencies.peanut && (
										<img
											className="preferences__icon preference__peanut-free"
											id="peanut"
											src="https://cdn0.iconfinder.com/data/icons/food-product-labels/128/peanut-free-512.png"
										></img>
									)}
									{preferencies.treenut && (
										<img
											className="preferences__icon preference__tree-nut-free"
											id="treenut"
											src="https://cdn3.iconfinder.com/data/icons/food-allergens-3/77/allergens-tree-nut-free-512.png"
										></img>
									)}
									{preferencies.alcohol && (
										<img
											className="preferences__icon preference__alcohol-free"
											id="alcohol"
											src="https://cdn3.iconfinder.com/data/icons/food-allergens-3/77/allergens-alcohol-free-512.png"
										></img>
									)}
								</div>
							</div>
						</div>
						<a className="underphoto__button">LETS COOCK IT</a>
					</div>
				</section>
				<section className="flex__column ingredients__container">
					<p>INGREDIENTS</p>
					<p id="ingredients">{ingredients}</p>
				</section>
			</div>
		</div>
	);
}

export default RecipePage;
=======
import React, { useState, useEffect } from 'react';
import receteListMoked from '../Recipe.mok.js';
import './RecipePage.css';
import recipe from '../stores/RecipeStore';
function RecipePage() {

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


	let [recipeElement] = useState(recipe.getRecipeByTitle(getUrl()));
	const [titleString] = useState(recipeElement.title);
	let [time] = useState(`${recipeElement.time} min`);
	if (time === '0 min') {
		time = '65 min';
	}
	const [calories] = useState(recipeElement.calories.toFixed(2));
	let [yeld] = useState(recipeElement.yeld);
	if (yeld === null || yeld === undefined || yeld === '') {
		yeld = 4;
	}

	let [ingredients] = useState(recipeElement.ingredients);

	const [photo] = useState(recipeElement.photo);
	const [url] = useState(recipeElement.url);
	const [source] = useState(`source: ${recipeElement.source}`);

	function getUrl() {
		//Se obtiene el valor de la URL desde el navegador
		var actual = window.location + '';
		//Se realiza la división de la URL
		var split = actual.split('/');
		//Se obtiene el ultimo valor de la URL
		var title = split[split.length - 1];

		return decodeURI(title);
	}

	for (let i = 0; i < recipeElement.preferences.length - 1; i++) {
		if (recipeElement.preferences[i] === 'Balanced') {
			balanced = true;
		} else if (recipeElement.preferences[i] === 'High-Protein') {
			protein = true;
		} else if (recipeElement.preferences[i] === 'Low-Fat') {
			low_fat = true;
		} else if (recipeElement.preferences[i] === 'Low-Carb') {
			low_carb = true;
		} else if (recipeElement.preferences[i] === 'Vegan') {
			vegan = true;
		} else if (recipeElement.preferences[i] === 'Vegetarian') {
			vegetarian = true;
		} else if (recipeElement.preferences[i] === 'Sugar-Conscious') {
			sugar = true;
		} else if (recipeElement.preferences[i] === 'Peanut-Free') {
			peanut = true;
		} else if (recipeElement.preferences[i] === 'Tree-Nut-Free') {
			treenut = true;
		} else if (recipeElement.preferences[i] === 'Alcohol-Free') {
			alcohol = true;
		}
	}

	debugger;

	return (
		<div className="desktop__display">
			<div className="desktop__display--right">
				<section className="flex__row info__container">
					<div className="flex__column data__container">
						<div className="recipe__icon-list">
							<div className="box__icon">
								<p className="text__icon">{time}</p>
								<div id="time" className="data__circle time__background">
								</div>
							</div>
							<div className="box__icon">
								<p className="text__icon">{calories}</p>
								<div id="calories" className="data__circle calories__background">
								</div>
							</div>
							<div className="box__icon">
								<p className="text__icon">{yeld}</p>
								<div id="yeld" className="data__circle yield__background">
								</div>
							</div>
						</div>
						<div className="title__img__container flex__column">
							<h2>{titleString}</h2>
							<img id="image-recipe" src={photo} />
							<p className="ingredients__source">{source}</p>
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

							<div className="underphoto__button preference__box">
								<div className="recipe__text--preferences">
									{balanced && (
										<img
											className="preferences__icon preference__balanced"
											id="balanced"
											src="https://image.flaticon.com/icons/png/512/30/30636.png"
										></img>
									)}
									{protein && (
										<img
											className="preferences__icon"
											id="protein"
											src="https://icon-library.com/images/protein-icon/protein-icon-0.jpg"
										></img>
									)}
									{low_fat && (
										<img
											className="preferences__icon"
											id="low_fat"
											src="https://www.pinclipart.com/picdir/big/150-1505070_low-fat-or-low-carb-icon-clipart.png"
										></img>
									)}
									{low_carb && (
										<img
											className="preferences__icon"
											id="low_carb"
											src="https://cdn2.iconfinder.com/data/icons/organic-food-1/24/Low_Carb-512.png"
										></img>
									)}
									{vegan && (
										<img
											className="preferences__icon"
											id="vegan"
											src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Vegan_friendly_icon.svg/900px-Vegan_friendly_icon.svg.png"
										></img>
									)}

									{vegetarian && (
										<img
											className="preferences__icon"
											id="vegetarian"
											src="https://img.icons8.com/plasticine/100/000000/vegetarian-food.png"
										></img>
									)}
									{sugar && (
										<img
											className="preferences__icon"
											id="sugar"
											src="https://www.footys.co.za/images/icon-sugar.png"
										></img>
									)}
									{peanut && (
										<img
											className="preferences__icon preference__peanut-free"
											id="peanut"
											src="https://cdn0.iconfinder.com/data/icons/food-product-labels/128/peanut-free-512.png"
										></img>
									)}
									{treenut && (
										<img
											className="preferences__icon preference__tree-nut-free"
											id="treenut"
											src="https://cdn3.iconfinder.com/data/icons/food-allergens-3/77/allergens-tree-nut-free-512.png"
										></img>
									)}
									{alcohol && (
										<img
											className="preferences__icon preference__alcohol-free"
											id="alcohol"
											src="https://cdn3.iconfinder.com/data/icons/food-allergens-3/77/allergens-alcohol-free-512.png"
										></img>
									)}
								</div>
							</div>
						</div>
						<a href={url} className="underphoto__button">
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
>>>>>>> 0015d0e15021bd2360381e9b71730546559d9d47
