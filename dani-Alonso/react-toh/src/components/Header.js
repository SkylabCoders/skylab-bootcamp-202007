import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Assets/list.css';

function Header() {
	return (
		<nav>
			<h1>HERO TOUR</h1>
			<NavLink className="button" activeClassName="nav-active" to="/">
				Dashboard
			</NavLink>
			<NavLink className="button" activeClassName="nav-active" to="/heroes">
				Heroes
			</NavLink>
		</nav>
	);
}
export default Header;
