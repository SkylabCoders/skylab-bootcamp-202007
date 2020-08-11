import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { loadRecipe } from '../actions/RecipeAction';
import recipeStore from '../stores/RecipeStore';
import './Header.scss';
import '../App.scss';

function Header() {
	const [actualSearch, setActualSearch] = useState('');

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
	const [healthList, setHealthList] = useState([]);
	const [dietList, setDietList] = useState([]);
	let healthRequest = '';
	let dietRequest = '';

	useEffect(() => {
		recipeStore.addChangeListener(changePropertyBoolean);
		return recipeStore.removeChangeListener(changePropertyBoolean);
	}, []);
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
		setDietList([...dietList, 'high-protein']);
		changePropertyBoolean(protein, setProtein);
	};
	const removeProtein = () => {
		setDietList(dietList.filter((value) => value !== 'high-protein'));
		changePropertyBoolean(protein, setProtein);
	};
	const addBalanced = () => {
		setDietList([...dietList, 'balanced']);
		changePropertyBoolean(balanced, setBalanced);
	};
	const removeBalanced = () => {
		setDietList(dietList.filter((value) => value !== 'balanced'));
		changePropertyBoolean(balanced, setBalanced);
	};
	const addLowfat = () => {
		setDietList([...dietList, 'low-fat']);
		changePropertyBoolean(lowFat, setLowFat);
	};
	const removeLowfat = () => {
		setDietList(dietList.filter((value) => value !== 'low-fat'));
		changePropertyBoolean(lowFat, setLowFat);
	};
	const addLowcarb = () => {
		setDietList([...dietList, 'low-carb']);
		changePropertyBoolean(lowCarb, setLowCarb);
	};
	const removeLowcarb = () => {
		setDietList(dietList.filter((value) => value !== 'low-carb'));
		changePropertyBoolean(lowCarb, setLowCarb);
	};
	const addVegan = () => {
		setHealthList([...healthList, 'vegan']);
		changePropertyBoolean(vegan, setVegan);
	};
	const removeVegan = () => {
		setHealthList(healthList.filter((value) => value !== 'vegan'));
		changePropertyBoolean(vegan, setVegan);
	};
	const addVegetarian = () => {
		setHealthList([...healthList, 'vegetarian']);
		changePropertyBoolean(vegetarian, setVegetarian);
	};
	const removeVegetarian = () => {
		setHealthList(healthList.filter((value) => value !== 'vegetarian'));
		changePropertyBoolean(vegetarian, setVegetarian);
	};
	const addPeanut = () => {
		setHealthList([...healthList, 'peanut-free']);
		changePropertyBoolean(peanut, setPeanut);
	};
	const removePeanut = () => {
		setHealthList(healthList.filter((value) => value !== 'peanut-free'));
		changePropertyBoolean(peanut, setPeanut);
	};
	const addTreenut = () => {
		setHealthList([...healthList, 'tree-nut-free']);
		changePropertyBoolean(treenut, setTreenut);
	};
	const removeTreenut = () => {
		setHealthList(healthList.filter((value) => value !== 'tree-nut-free'));
		changePropertyBoolean(treenut, setTreenut);
	};
	const addAlcohol = () => {
		setHealthList([...healthList, 'alcohol-free']);
		changePropertyBoolean(alcohol, setAlcohol);
	};
	const removeAlcohol = () => {
		setHealthList(healthList.filter((value) => value !== 'alcohol-free'));
		changePropertyBoolean(alcohol, setAlcohol);
	};
	const addSugar = () => {
		setHealthList([...healthList, 'sugar-conscious']);
		changePropertyBoolean(sugar, setSugar);
	};
	const removeSugar = () => {
		setHealthList(healthList.filter((value) => value !== 'sugar-concius'));
		changePropertyBoolean(sugar, setSugar);
	};

	function getHealthRequest() {
		for (let i in healthList) {
			if (i === 0) {
				healthRequest = `health=${healthList[i]}`;
			} else {
				healthRequest += `&health=${healthList[i]}`;
			}
		}
		return healthRequest;
	}
	function getDietRequest() {
		for (let i in dietList) {
			if (i === 0) {
				dietRequest = `diet=${dietList[i]}`;
			} else {
				dietRequest += `&diet=${dietList[i]}`;
			}
		}

		return dietRequest;
	}
	function sendSearch() {
		loadRecipe(actualSearch, getDietRequest(), getHealthRequest());
		setActualSearch('');
	}

	const Logo = 'https://image.flaticon.com/icons/svg/770/770906.svg';
	return (
		<>
			<nav className="nav__menu">
				<div className="nav__mobile">
					<Link to="/main">
						<img className="nav__brand__logo" src={Logo} />
					</Link>
					<div className="burguer-button">
						<img
							src="https://image.flaticon.com/icons/svg/561/561123.svg"
							alt="burguer button"
						/>

						<div className="burguer-preferences">
							<ul>
								<li>
									{' '}
									{balanced && (
										<input
											type="image"
											src="https://image.flaticon.com/icons/png/512/30/30636.png"
											className="button balanced"
											onClick={removeBalanced}
										></input>
									)}
									{!balanced && (
										<input
											type="image"
											src="https://image.flaticon.com/icons/png/512/30/30636.png"
											className="button balanced gray"
											onClick={addBalanced}
										></input>
									)}
								</li>
								<li>
									{protein && (
										<input
											type="image"
											className="button protein "
											src="https://icon-library.com/images/protein-icon/protein-icon-0.jpg"
											onClick={removeProtein}
										></input>
									)}
									{!protein && (
										<input
											type="image"
											className="button protein gray "
											src="https://icon-library.com/images/protein-icon/protein-icon-0.jpg"
											onClick={addProtein}
										></input>
									)}
								</li>
								<li>
									{lowFat && (
										<input
											type="image"
											className="button low_fat"
											src="https://www.pinclipart.com/picdir/big/150-1505070_low-fat-or-low-carb-icon-clipart.png"
											onClick={removeLowfat}
										></input>
									)}

									{!lowFat && (
										<input
											type="image"
											className="button low_fat gray"
											src="https://www.pinclipart.com/picdir/big/150-1505070_low-fat-or-low-carb-icon-clipart.png"
											onClick={addLowfat}
										></input>
									)}
								</li>
								<li>
									{lowCarb && (
										<input
											type="image"
											className="button low_carb"
											src="https://cdn2.iconfinder.com/data/icons/organic-food-1/24/Low_Carb-512.png"
											onClick={removeLowcarb}
										></input>
									)}
									{!lowCarb && (
										<input
											type="image"
											className="button low_carb gray"
											src="https://cdn2.iconfinder.com/data/icons/organic-food-1/24/Low_Carb-512.png"
											onClick={addLowcarb}
										></input>
									)}
								</li>

								<li>
									{vegan && (
										<input
											type="image"
											className="button vegan"
											src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Vegan_friendly_icon.svg/900px-Vegan_friendly_icon.svg.png"
											onClick={removeVegan}
										></input>
									)}
									{!vegan && (
										<input
											type="image"
											className="button vegan gray"
											src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Vegan_friendly_icon.svg/900px-Vegan_friendly_icon.svg.png"
											onClick={addVegan}
										></input>
									)}
								</li>

								<li>
									{vegetarian && (
										<input
											type="image"
											className="button vegetarian"
											src="https://img.icons8.com/plasticine/100/000000/vegetarian-food.png"
											onClick={removeVegetarian}
										></input>
									)}
									{!vegetarian && (
										<input
											type="image"
											className="button vegetarian gray"
											src="https://img.icons8.com/plasticine/100/000000/vegetarian-food.png"
											onClick={addVegetarian}
										></input>
									)}
								</li>

								<li>
									{sugar && (
										<input
											type="image"
											className="button sugar"
											src="https://www.footys.co.za/images/icon-sugar.png"
											onClick={removeSugar}
										></input>
									)}
									{!sugar && (
										<input
											type="image"
											className="button sugar gray"
											src="https://www.footys.co.za/images/icon-sugar.png"
											onClick={addSugar}
										></input>
									)}
								</li>
								<li>
									{peanut && (
										<input
											type="image"
											className="button peanut"
											src="https://cdn0.iconfinder.com/data/icons/food-product-labels/128/peanut-free-512.png"
											onClick={removePeanut}
										></input>
									)}
									{!peanut && (
										<input
											type="image"
											className="button peanut gray"
											src="https://cdn0.iconfinder.com/data/icons/food-product-labels/128/peanut-free-512.png"
											onClick={addPeanut}
										></input>
									)}
								</li>

								<li>
									{treenut && (
										<input
											type="image"
											className="button treenut"
											src="https://cdn3.iconfinder.com/data/icons/food-allergens-3/77/allergens-tree-nut-free-512.png"
											onClick={removeTreenut}
										></input>
									)}
									{!treenut && (
										<input
											type="image"
											className="button treenut gray"
											src="https://cdn3.iconfinder.com/data/icons/food-allergens-3/77/allergens-tree-nut-free-512.png"
											onClick={addTreenut}
										></input>
									)}
								</li>

								<li>
									{alcohol && (
										<input
											type="image"
											className="button alcohol"
											src="https://cdn3.iconfinder.com/data/icons/food-allergens-3/77/allergens-alcohol-free-512.png"
											onClick={removeAlcohol}
										></input>
									)}
									{!alcohol && (
										<input
											type="image"
											className="button alcohol gray"
											src="https://cdn3.iconfinder.com/data/icons/food-allergens-3/77/allergens-alcohol-free-512.png"
											onClick={addAlcohol}
										></input>
									)}
								</li>
							</ul>
						</div>
					</div>
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
							<>
								{' '}
								{balanced && (
									<input
										type="image"
										src="https://image.flaticon.com/icons/png/512/30/30636.png"
										className="button balanced"
										onClick={removeBalanced}
									></input>
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
									<input
										type="image"
										className="button protein "
										src="https://icon-library.com/images/protein-icon/protein-icon-0.jpg"
										onClick={removeProtein}
									></input>
								)}
								{!protein && (
									<input
										type="image"
										className="button protein gray "
										src="https://icon-library.com/images/protein-icon/protein-icon-0.jpg"
										onClick={addProtein}
									></input>
								)}
							</>
							<>
								{lowFat && (
									<input
										type="image"
										className="button low_fat"
										src="https://www.pinclipart.com/picdir/big/150-1505070_low-fat-or-low-carb-icon-clipart.png"
										onClick={removeLowfat}
									></input>
								)}

								{!lowFat && (
									<input
										type="image"
										className="button low_fat gray"
										src="https://www.pinclipart.com/picdir/big/150-1505070_low-fat-or-low-carb-icon-clipart.png"
										onClick={addLowfat}
									></input>
								)}
							</>
							<>
								{lowCarb && (
									<input
										type="image"
										className="button low_carb"
										src="https://cdn2.iconfinder.com/data/icons/organic-food-1/24/Low_Carb-512.png"
										onClick={removeLowcarb}
									></input>
								)}
								{!lowCarb && (
									<input
										type="image"
										className="button low_carb gray"
										src="https://cdn2.iconfinder.com/data/icons/organic-food-1/24/Low_Carb-512.png"
										onClick={addLowcarb}
									></input>
								)}
							</>

							<>
								{vegan && (
									<input
										type="image"
										className="button vegan"
										src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Vegan_friendly_icon.svg/900px-Vegan_friendly_icon.svg.png"
										onClick={removeVegan}
									></input>
								)}
								{!vegan && (
									<input
										type="image"
										className="button vegan gray"
										src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Vegan_friendly_icon.svg/900px-Vegan_friendly_icon.svg.png"
										onClick={addVegan}
									></input>
								)}
							</>

							<>
								{vegetarian && (
									<input
										type="image"
										className="button vegetarian"
										src="https://img.icons8.com/plasticine/100/000000/vegetarian-food.png"
										onClick={removeVegetarian}
									></input>
								)}
								{!vegetarian && (
									<input
										type="image"
										className="button vegetarian gray"
										src="https://img.icons8.com/plasticine/100/000000/vegetarian-food.png"
										onClick={addVegetarian}
									></input>
								)}
							</>

							<>
								{sugar && (
									<input
										type="image"
										className="button sugar"
										src="https://www.footys.co.za/images/icon-sugar.png"
										onClick={removeSugar}
									></input>
								)}
								{!sugar && (
									<input
										type="image"
										className="button sugar gray"
										src="https://www.footys.co.za/images/icon-sugar.png"
										onClick={addSugar}
									></input>
								)}
							</>
							<>
								{peanut && (
									<input
										type="image"
										className="button peanut"
										src="https://cdn0.iconfinder.com/data/icons/food-product-labels/128/peanut-free-512.png"
										onClick={removePeanut}
									></input>
								)}
								{!peanut && (
									<input
										type="image"
										className="button peanut gray"
										src="https://cdn0.iconfinder.com/data/icons/food-product-labels/128/peanut-free-512.png"
										onClick={addPeanut}
									></input>
								)}
							</>

							<>
								{treenut && (
									<input
										type="image"
										className="button treenut"
										src="https://cdn3.iconfinder.com/data/icons/food-allergens-3/77/allergens-tree-nut-free-512.png"
										onClick={removeTreenut}
									></input>
								)}
								{!treenut && (
									<input
										type="image"
										className="button treenut gray"
										src="https://cdn3.iconfinder.com/data/icons/food-allergens-3/77/allergens-tree-nut-free-512.png"
										onClick={addTreenut}
									></input>
								)}
							</>

							<>
								{alcohol && (
									<input
										type="image"
										className="button alcohol"
										src="https://cdn3.iconfinder.com/data/icons/food-allergens-3/77/allergens-alcohol-free-512.png"
										onClick={removeAlcohol}
									></input>
								)}
								{!alcohol && (
									<input
										type="image"
										className="button alcohol gray"
										src="https://cdn3.iconfinder.com/data/icons/food-allergens-3/77/allergens-alcohol-free-512.png"
										onClick={addAlcohol}
									></input>
								)}
							</>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Header;
