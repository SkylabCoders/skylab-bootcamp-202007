import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
	return (
		<>
			<h1>Tour of Heroes</h1>
			<nav>
				<NavLink activeClassName="my-active-class" to="/">
					Dashboard
				</NavLink>{' '}
				{' | '}
				<NavLink activeClassName="my-active-class" to="/hero">
					Heroes
				</NavLink>
				{' | '}
				<NavLink activeClassName="my-active-class" to="/hero/14">
					Bombasto
				</NavLink>
			</nav>
		</>
	);
}

export default Header;
