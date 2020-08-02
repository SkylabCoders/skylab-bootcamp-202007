import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header(props) {
	return (
		<>
			<h1>Tour of Heroes</h1>
			<nav>
				<NavLink to="/" exact activeClassName="nav__link--active">
					Dashboard
				</NavLink>
				{' | '}
				<NavLink to="/heroes" exact activeClassName="nav__link--active">
					Heroes
				</NavLink>
				{' | '}
				<NavLink to="/login" activeClassName="nav__link--active">
					Login
				</NavLink>
			</nav>
		</>
	);
}

export default Header;
