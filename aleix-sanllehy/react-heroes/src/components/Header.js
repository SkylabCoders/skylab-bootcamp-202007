import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
	return (
		<>
			<h3 className="hero-title">Tour of Heroes</h3>
			<nav className="hero-header">
				<NavLink
					className="header-button btn btn-secondary"
					activeClassName="my-active-class"
					to="/"
				>
					Dashboard
				</NavLink>
				{/* {' | '} */}
				<NavLink
					className="header-button btn btn-secondary"
					activeClassName="my-active-class"
					to="/list"
				>
					Heroes
				</NavLink>
			</nav>
		</>
	);
}

export default Header;
//<a href="/dashboard" className="btn btn-secondary">Dashboard</a>
//<a href="/list" className="btn btn-secondary">Heroes</a>
