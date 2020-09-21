import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
	return (
		<header>
			<h1>Tour of Heroes</h1>
			<nav>
				<NavLink to="/">Dashboad</NavLink>
				<NavLink to="/heroes">Heroes</NavLink>
			</nav>
		</header>
	);
}

export default Header;
