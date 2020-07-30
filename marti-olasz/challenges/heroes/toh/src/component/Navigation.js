import React from 'react';
import { NavLink, Route } from 'react-router-dom';

function Navigation() {
	return (
		<nav className="buttons">
			<NavLink to="/">Dashbord</NavLink>
			<NavLink to="/heroes">Heroes</NavLink>
		</nav>
	);
}

export default Navigation;
