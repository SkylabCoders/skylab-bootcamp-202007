import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { loadRecipe } from '../actions/RecipeAction';
import RecipeStore from '../stores/RecipeStore';
import './Header.css';
import '../App.css';

function Header() {
	const initialState = '';
	const [actualSearch, setActualSearch] = useState(initialState);

	useEffect(() => {
		RecipeStore.addChangeListener(onChange);
		return () => RecipeStore.removeChangeListener(onChange);
	}, [actualSearch]);

	function onChange() {
		setActualSearch(initialState);
	}

	function onFieldChange(value, setValue) {
		setValue(value);
	}
	function sendSearch() {
		loadRecipe(actualSearch);
		onFieldChange(initialState, setActualSearch);
	}
	const Logo = 'https://image.flaticon.com/icons/svg/770/770906.svg';
	return (
		<>
			<nav className="nav__menu">
				<div className="nav__mobile">
					<NavLink to="/" className="link__header">
						Main
					</NavLink>

					<Link to="/">
						<img className="nav__brand__logo" src={Logo} />
					</Link>
					<form>
						<input
							className="search"
							value={actualSearch}
							placeholder="Search"
							name="search"
							onChange={(event) =>
								onFieldChange(event.target.value, setActualSearch)
							}
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
								<span className="search-button">SEARCH!</span>
							)}
						</div>
					</form>
					<Link to="/login">
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
					<form className="main__search">
						<input
							className="main__search-input"
							value={actualSearch}
							placeholder="Search"
							name="search"
							onChange={(event) =>
								onFieldChange(event.target.value, setActualSearch)
							}
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
								<span className="search-button">SEARCH!</span>
							)}
						</>
					</form>

					<div className="recipe__text--preferences search__icons--box">
						<img
							className="preferences__icon preference__balanced"
							src="https://image.flaticon.com/icons/png/512/30/30636.png"
						></img>
						<img
							className="preferences__icon icon__search"
							src="https://icon-library.com/images/protein-icon/protein-icon-0.jpg"
						></img>
						<img
							className="preferences__icon icon__search"
							src="https://www.pinclipart.com/picdir/big/150-1505070_low-fat-or-low-carb-icon-clipart.png"
						></img>
						<img
							className="preferences__icon icon__search"
							src="https://cdn2.iconfinder.com/data/icons/organic-food-1/24/Low_Carb-512.png"
						></img>
						<img
							className="preferences__icon icon__search"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Vegan_friendly_icon.svg/900px-Vegan_friendly_icon.svg.png"
						></img>
						<img
							className="preferences__icon icon__search"
							src="https://img.icons8.com/plasticine/100/000000/vegetarian-food.png"
						></img>
						<img
							className="preferences__icon icon__search"
							src="https://www.footys.co.za/images/icon-sugar.png"
						></img>
						<img
							className="preferences__icon preference__peanut-free icon__search"
							src="https://cdn0.iconfinder.com/data/icons/food-product-labels/128/peanut-free-512.png"
						></img>
						<img
							className="preferences__icon preference__tree-nut-free icon__search"
							src="https://cdn3.iconfinder.com/data/icons/food-allergens-3/77/allergens-tree-nut-free-512.png"
						></img>
						<img
							className="preferences__icon preference__alcohol-free icon__search"
							src="https://cdn3.iconfinder.com/data/icons/food-allergens-3/77/allergens-alcohol-free-512.png"
						></img>
					</div>
				</div>
			</section>
		</>
	);
}

export default Header;
