import React from 'react';
import { NavLink, Route } from 'react-router-dom';

function Navigation() {
	return (
		<nav className="navigation">
			<NavLink className="navigation__item" to="/">
				Dashbord
			</NavLink>
			<NavLink className="navigation__item" to="/heroes">
				Heroes
			</NavLink>
		</nav>
	);
}

export default Navigation;
