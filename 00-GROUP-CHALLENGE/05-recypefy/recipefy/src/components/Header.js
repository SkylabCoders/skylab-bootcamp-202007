import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { loadRecipe } from '../actions/RecipeAction';
import RecipeStore from '../stores/RecipeStore';
import './Header.css';
import '../App.css';

function Header() {
	const [actualSearch, setActualSearch] = useState('');
	let [balanced, setBalanced] = useState('');
	let [protein, setProtein] = useState('');
	let [low_fat, setLow_fat] = useState('');
	let [low_carb, setLow_carb] = useState('');
	let [vegan, setVegan] = useState('');;
	let [vegetarian, setVegetarian] = useState('');
	let [sugar, setSugar] = useState('');
	let [peanut, setPeanut] = useState('');
	let [treenut, setTreenut] = useState('');
	let [alcohol, setAlcohol] = useState('');

	function onFieldChange(value, setValue) {
		setValue(value);
	}

	function sendSearch() {
		loadRecipe(actualSearch);
		setActualSearch('');
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
					</div>
					<div>
						<td class="checkbox__preferences">
							<button src="https://image.flaticon.com/icons/png/512/30/30636.png" id="cell--0--0" />
						</td>
						<td class="checkbox__preferences">
							<button id="cell--0--1" src="https://icon-library.com/images/protein-icon/protein-icon-0.jpg" />
						</td>
						<td class="checkbox__preferences">
							<button src="https://www.pinclipart.com/picdir/big/150-1505070_low-fat-or-low-carb-icon-clipart.png" id="cell--0--2" />
						</td>
						<td class="checkbox__preferences">
							<button id="cell--0--3" src="https://cdn2.iconfinder.com/data/icons/organic-food-1/24/Low_Carb-512.png" />
						</td>
						<td class="checkbox__preferences">
							<button id="cell--0--4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Vegan_friendly_icon.svg/900px-Vegan_friendly_icon.svg.png" />
						</td>
						<td class="checkbox__preferences">
							<button id="cell--0--5" src="https://img.icons8.com/plasticine/100/000000/vegetarian-food.png" />
						</td>
						<td class="checkbox__preferences">
							<button id="cell--0--2" src="https://www.footys.co.za/images/icon-sugar.png" />
						</td>
						<td class="checkbox__preferences">
							<button id="cell--0--3" src="https://cdn0.iconfinder.com/data/icons/food-product-labels/128/peanut-free-512.png" />
						</td>
						<td class="checkbox__preferences">
							<button id="cell--0--4" src="https://cdn3.iconfinder.com/data/icons/food-allergens-3/77/allergens-tree-nut-free-512.png" />
						</td>
						<td class="checkbox__preferences">
							<button id="cell--0--5" src="https://cdn3.iconfinder.com/data/icons/food-allergens-3/77/allergens-alcohol-free-512.png" />
						</td>
					</div>
				</div>
			</section>
		</>
	);
}

export default Header;
