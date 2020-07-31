import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
	return (
		<nav>
			<h1>HERO TOUR</h1>
			<NavLink className="button" to="/">
				Dashboard
			</NavLink>
			<NavLink className="button" to="/heroes">
				Heroes
			</NavLink>
		</nav>
	);
}
export default Header;
