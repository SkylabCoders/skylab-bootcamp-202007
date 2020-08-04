import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
	return (
		<>
			<h3 className="hero-title">Tour of Heroes</h3>
			<nav className="hero-header">
				<NavLink
					className="header-button btn btn-secondary"
					exact
					activeClassName="nav__link--active"
					to="/"
				>
					Dashboard
				</NavLink>
				{/* {' | '} */}
				<NavLink
					className="header-button btn btn-secondary"
					exact
					activeClassName="nav__link--active"
					to="/hero"
				>
					Heroes
				</NavLink>
				<NavLink
					className="header-button btn btn-secondary"
					exact
					activeClassName="nav__link--active"
					to="/login"
				>
					Login
				</NavLink>
			</nav>
		</>
	);
}

export default Header;
//<a href="/dashboard" className="btn btn-secondary">Dashboard</a>
//<a href="/list" className="btn btn-secondary">Heroes</a>
