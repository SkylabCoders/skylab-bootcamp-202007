import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

function Header() {
	const Logo = 'https://image.flaticon.com/icons/svg/770/770906.svg';
	return (
		<>
			<nav className="nav__menu">
				<div className="nav__mobile">
					<div className="burger__container">
						<div className="icon__burguer">
							<img
								alt="burger-button"
								src="https://image.flaticon.com/icons/svg/953/953223.svg"
							></img>
						</div>
						<ul className="desplegable__button">
							<li>
								<NavLink
									to="/recomended"
									className="link__header hamburguer__link"
								>
									Recomended
								</NavLink>
							</li>

							<li>
								<NavLink
									to="/ranking"
									className="link__header hamburguer__link"
								>
									Ranking
								</NavLink>
							</li>

							<li>
								<NavLink
									to="/userfavourite"
									className="link__header hamburguer__link"
								>
									Favourite
								</NavLink>
							</li>
						</ul>
					</div>
					<Link to="/">
						<img className="nav__brand__logo" src={Logo} />
					</Link>
					<NavLink to="/profile">Preferences</NavLink>
					<input className="search" placeholder="Search" />
					<Link to="/login">
						<img
							className="login__logo"
							src="https://image.flaticon.com/icons/svg/1828/1828453.svg"
						/>
					</Link>
				</div>
				<div className="nav__medium__big">
					<div className="buttons__left">
						<NavLink to="/recomended" className="link__header">
							Recomended
						</NavLink>
						<br />
						<NavLink to="/ranking" className="link__header">
							Ranking
						</NavLink>
						<br />
						<NavLink to="/userfavourite" className="link__header">
							Favourite
						</NavLink>
					</div>
					<NavLink to="/login">
						<div className="buttons__right">
							<p className="buttons__right--text">LogIn</p>

							<img
								className="login__logo"
								src="https://image.flaticon.com/icons/svg/1828/1828453.svg"
							/>
						</div>
					</NavLink>
				</div>
			</nav>
			<section className="main__boxes">
				<Link to="/">
					<div className="section__logo">
						<img className="main__logo" src={Logo} />
						<h1>RECIPEFY</h1>
					</div>
				</Link>

				<div className="section__search">
					<input
						className="main__search"
						placeholder="SEARCH YOUR RECIPE HERE"
					/>

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
