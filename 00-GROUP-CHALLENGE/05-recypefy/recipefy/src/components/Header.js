import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { loadRecipe } from '../actions/RecipeAction';
import recipeStore from '../stores/RecipeStore';
import './Header.scss';
import '../App.css';

function Header() {
	const [actualSearch, setActualSearch] = useState('');



	const [balanced, setBalanced] = useState(false);
	const [protein, setProtein] = useState(false);
	const [low_fat, setLow_fat] = useState(false);
	const [low_carb, setLow_carb] = useState(false);
	const [vegan, setVegan] = useState(false);;
	const [vegetarian, setVegetarian] = useState(false);
	const [sugar, setSugar] = useState(false);
	const [peanut, setPeanut] = useState(false);
	const [treenut, setTreenut] = useState(false);
	const [alcohol, setAlcohol] = useState(false);
	const [healthList, setHealthList] = useState([]);
	const [dietList, setDietList] = useState([]);
	let healthRequest = '';
	let dietRequest = '';


	useEffect(() => {
		recipeStore.addChangeListener(changePropertyBoolean);
		return recipeStore.removeChangeListener(changePropertyBoolean);
	}, [])

	function onFieldChange(value, setValue) {
		setValue(value.trim());
	}

	function changePropertyBoolean(value, setValue) {
		if (value) {
			setValue(false);
		} else {
			setValue(true);
		}
	}

	const addProtein = () => {
		dietList.push('High-Protein');
		changePropertyBoolean(protein, setProtein);

	};
	const addBalanced = () => {
		dietList.push('Balanced');
		changePropertyBoolean(balanced, setBalanced);

	};
	const removeProtein = () => {
		for (let i in dietList) {
			if (dietList[i] === 'High-Protein') {
				let deletedElement = dietList.splice(i, 1);
			}
		}
		changePropertyBoolean(protein, setProtein);

	}
	const removeBalanced = () => {
		for (let i in dietList) {
			if (dietList[i] === 'Balanced') {
				let deletedElement = dietList.splice(i, 1);
			}
		}
		changePropertyBoolean(balanced, setBalanced);

	}
	const removeLowfat = () => {
		for (let i in dietList) {
			if (dietList[i] === 'Low-Fat') {
				let deletedElement = dietList.splice(i, 1);
			}
		}

	}
	const addLowfat = () => {
		dietList.push('Low-Fat');


	};
	const removeLowcarb = () => {
		for (let i in dietList) {
			if (dietList[i] === 'Low-Carb') {
				let deletedElement = dietList.splice(i, 1);
			}
		}

	}
	const addLowcarb = () => {
		dietList.push('Low-Carb');

	};
	const removeVegan = () => {
		for (let i in healthList) {
			if (healthList[i] === 'Vegan') {
				let deletedElement = healthList.splice(i, 1);
			}
		}

	}
	const addVegan = () => {
		healthList.push('Vegan');

	};
	const removeVegetarian = () => {
		for (let i in healthList) {
			if (healthList[i] === 'Vegetarian') {
				let deletedElement = healthList.splice(i, 1);
			}
		}

	}
	const addVegetarian = () => {
		healthList.push('Vegetarian');

	};
	const removePeanut = () => {
		for (let i in healthList) {
			if (healthList[i] === 'Peanut-Free') {
				let deletedElement = healthList.splice(i, 1);
			}
		}

	}
	const addPeanut = () => {
		healthList.push('Peanut-Free');

	};
	const removeTreenut = () => {
		for (let i in healthList) {
			if (healthList[i] === 'Tree-Nut-Free') {
				let deletedElement = healthList.splice(i, 1);
			}
		}

	}
	const addTreenut = () => {
		healthList.push('Tree-Nut-Free');


	};
	const removeAlcohol = () => {
		for (let i in healthList) {
			if (healthList[i] === 'Alcohol-Free') {
				let deletedElement = healthList.splice(i, 1);
			}
		}

	}
	const addAlcohol = () => {
		healthList.push('Alcohol-Free');

	};
	const removeSugar = () => {
		for (let i in healthList) {
			if (healthList[i] === 'Sugar-Conscious') {
				let deletedElement = healthList.splice(i, 1);
			}
		}

	}
	const addSugar = () => {
		healthList.push('Sugar-Conscious');

	};


	function getHealthRequest() {

		for (let i in healthList) {
			if (i === 0) {
				healthRequest = `Health=${healthList[i]}`
			} else {
				healthRequest += `&Health=${healthList[i]}`
			}
		}
		return healthRequest;
	}
	function getDietRequest() {

		for (let i in dietList) {
			if (i === 0) {


				dietRequest = `Diet=${dietList[i]}`
			} else {
				dietRequest += `&Diet=${dietList[i]}`
			}
		}

		return dietRequest;
	}
	function sendSearch() {


		loadRecipe(actualSearch, getDietRequest().trim(), getHealthRequest().trim());
		setActualSearch('');
		dietList = [];
		healthList = [];
	}


	const Logo = 'https://image.flaticon.com/icons/svg/770/770906.svg';
	return (
		<>
			<nav className="nav__menu">
				<div className="nav__mobile">
					<NavLink to="/main" className="link__header">
						Main
					</NavLink>

					<Link to="/main">
						<img className="nav__brand__logo" src={Logo} />
					</Link>
					<div className="search-container">
						<input
							className="search"
							value={actualSearch}
							placeholder="Search"
							name="search"
							onChange={(event) => {
								event.preventDefault();
								onFieldChange(event.target.value, setActualSearch);
							}}
						/>
						<div>
							{actualSearch !== '' && (
								<Link
									onClick={() => {
										sendSearch();
									}}
									className="search-button"
									to="/search-result"
								>
									SEARCH!
								</Link>
							)}
							{actualSearch === '' && (
								<span className="search-button search-button-inative">
									SEARCH!
								</span>
							)}
						</div>
					</div>
					<Link to="/">
						<img
							className="login__logo"
							src="https://image.flaticon.com/icons/svg/1828/1828453.svg"
						/>
					</Link>
				</div>
				<div className="nav__medium__big">
					<div className="buttons__left">
						<NavLink to="/main" className="link__header">
							Main
						</NavLink>
					</div>
					<NavLink to="/login">
						<div className="buttons__right">
							<p className="buttons__right--text">LOG</p>

							<img
								className="login__logo"
								src="https://image.flaticon.com/icons/svg/1828/1828453.svg"
							/>
						</div>
					</NavLink>
				</div>
			</nav>
			<section className="main__boxes">
				<Link to="/main">
					<div className="section__logo">
						<img className="main__logo" src={Logo} />
						<h1>RECIPEFY</h1>
					</div>
				</Link>

				<div className="section__search">
					<div className="main__search">
						<input
							className="main__search-input"
							value={actualSearch}
							placeholder="Search"
							name="search"
							onChange={(event) => {
								event.preventDefault();
								onFieldChange(event.target.value, setActualSearch);
							}}
						/>
						<>
							{actualSearch !== '' && (
								<Link
									onClick={() => {
										sendSearch();
									}}
									className="search-button"
									to="/search-result"
								>
									SEARCH!
								</Link>
							)}
							{actualSearch === '' && (
								<span className="search-button search-button-inative">
									SEARCH!
								</span>
							)}
						</>
						<div>
							<>	{balanced && (
								<input
									type="image"
									src="https://image.flaticon.com/icons/png/512/30/30636.png"
									className="button balanced"
									onClick={removeBalanced}
								>

								</input>
							)}
								{!balanced && (
									<input
										type="image"
										src="https://image.flaticon.com/icons/png/512/30/30636.png"
										className="button balanced gray"
										onClick={addBalanced}

									></input>
								)}

							</>
							<>
								{protein && (
									<input type="image" className="button protein " src="https://icon-library.com/images/protein-icon/protein-icon-0.jpg" onClick={removeProtein}></input>
								)}
								{!protein && (
									<input type="image" className="button protein gray " src="https://icon-library.com/images/protein-icon/protein-icon-0.jpg" onClick={addProtein} ></input>
								)}
							</>

							<input type="image" className="button low_fat" src="https://www.pinclipart.com/picdir/big/150-1505070_low-fat-or-low-carb-icon-clipart.png" onClick={removeLowfat}></input>
							<input type="image" className="button low_fat" src="https://www.pinclipart.com/picdir/big/150-1505070_low-fat-or-low-carb-icon-clipart.png" onClick={addLowfat}></input>
							<input type="image" className="button low_carb" src="https://cdn2.iconfinder.com/data/icons/organic-food-1/24/Low_Carb-512.png" onClick={removeLowcarb}></input>
							<input type="image" className="button low_carb" src="https://cdn2.iconfinder.com/data/icons/organic-food-1/24/Low_Carb-512.png" onClick={addLowcarb}></input>
							<input type="image" className="button vegan" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Vegan_friendly_icon.svg/900px-Vegan_friendly_icon.svg.png" onClick={removeVegan}></input>
							<input type="image" className="button vegan" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Vegan_friendly_icon.svg/900px-Vegan_friendly_icon.svg.png" onClick={addVegan}></input>
							<input type="image" className="button vegetarian" src="https://img.icons8.com/plasticine/100/000000/vegetarian-food.png" onClick={removeVegetarian}></input>
							<input type="image" className="button vegetarian" src="https://img.icons8.com/plasticine/100/000000/vegetarian-food.png" onClick={addVegetarian}></input>
							<input type="image" className="button sugar" src="https://www.footys.co.za/images/icon-sugar.png" onClick={removeSugar}></input>
							<input type="image" className="button sugar" src="https://www.footys.co.za/images/icon-sugar.png" onClick={addSugar}></input>
							<input type="image" className="button peanut" src="https://cdn0.iconfinder.com/data/icons/food-product-labels/128/peanut-free-512.png" onClick={removePeanut}></input>
							<input type="image" className="button peanut" src="https://cdn0.iconfinder.com/data/icons/food-product-labels/128/peanut-free-512.png" onClick={addPeanut}></input>
							<input type="image" className="button treenut" src="https://cdn3.iconfinder.com/data/icons/food-allergens-3/77/allergens-tree-nut-free-512.png" onClick={removeTreenut}></input>
							<input type="image" className="button treenut" src="https://cdn3.iconfinder.com/data/icons/food-allergens-3/77/allergens-tree-nut-free-512.png" onClick={addTreenut}></input>
							<input type="image" className="button alcohol" src="https://cdn3.iconfinder.com/data/icons/food-allergens-3/77/allergens-alcohol-free-512.png" onClick={removeAlcohol}></input>
							<input type="image" className="button alcohol" src="https://cdn3.iconfinder.com/data/icons/food-allergens-3/77/allergens-alcohol-free-512.png" onClick={addAlcohol}></input>

						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Header;
