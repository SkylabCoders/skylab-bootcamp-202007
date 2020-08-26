import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
	return (
		<header>
			<h1>Hero Tour</h1>
			<NavLink to="/" className="button">
				Dashboard
			</NavLink>
			<NavLink to="/heroes" className="button">
				Heroes
			</NavLink>
		</header>
	);
}

export default Header;
