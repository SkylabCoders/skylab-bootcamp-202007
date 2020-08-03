import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

function Header() {
	return (
		<>
			<nav className="nav__menu">
				<div className="nav__mobile">
					<ul>
						<li className="icon__burguer">Burguer</li>
						<ul className="desplegable__button">
							<li>
								<NavLink to="/recomended" className="link hamburguer__link">
									Recomended
								</NavLink>
							</li>

							<li>
								<NavLink to="/ranking" className="link hamburguer__link">
									Ranking
								</NavLink>
							</li>

							<li>
								<NavLink to="/userfavourite" className="link hamburguer__link">
									Favourite
								</NavLink>
							</li>
						</ul>
					</ul>
					<img
						className="nav__brand__logo"
						src="https://image.flaticon.com/icons/svg/3014/3014548.svg"
					/>
					<NavLink to="/profile" className="hamburguer__link">
						Preferences
					</NavLink>
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
						<NavLink to="/recomended" className="link">
							Recomended
						</NavLink>
						<br />
						<NavLink to="/ranking" className="link">
							Ranking
						</NavLink>
						<br />
						<NavLink to="/userfavourite" className="link">
							Favourite
						</NavLink>
					</div>
					<NavLink to="/algo">
						<div className="buttons__right">
							LogIn{' '}
							<img
								className="login__logo"
								src="https://image.flaticon.com/icons/svg/1828/1828453.svg"
							/>
						</div>
					</NavLink>
				</div>
			</nav>
			<section className="main__boxes">
				<div className="section__logo">
					<img
						className="main__logo"
						src="https://image.flaticon.com/icons/svg/3014/3014548.svg"
					/>
					<h1>RECIPEFY</h1>
				</div>

				<div className="section__search">
					<input className="main__search" placeholder="Search.." />
					<p>PREFERENCES</p>
					<div className="section__preferences">
						<p>BAL</p>
						<p>HP</p>
						<p>LF</p>
						<p>LC</p>
						<p>VE</p>
						<p>VE</p>
						<p>SUG</p>
						<p>PEA</p>
						<p>NUT</p>
						<p>ALC</p>
					</div>
				</div>
			</section>
		</>
	);
}

export default Header;
