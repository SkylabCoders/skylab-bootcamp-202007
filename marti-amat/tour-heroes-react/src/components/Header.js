import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header(props) {
	return (
		<>
			<h1 className="title">Tour of Heroes</h1>
			<nav className="navigation">
				<NavLink activeClassName="my-active-class" to="/">
					Dashboard
				</NavLink>{' '}
				{' | '}
				<NavLink activeClassName="my-active-class" to="/hero">
					Heroes
				</NavLink>
				{' | '}
				<NavLink activeClassName="my-active-class" to="/hero/14">
					Detail
				</NavLink>
			</nav>
		</>
	);
}

export default Header;
