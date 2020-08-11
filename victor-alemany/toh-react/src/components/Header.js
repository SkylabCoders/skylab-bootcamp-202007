import React from 'react';
import { NavLink } from 'react-router-dom';
import '../components/Header.css';

function Header(props) {
	return (
		<>
			<div>
				<h1>Tour of Heroes</h1>
            </div> 			
			<nav>
				<NavLink activeClassName="my-active-class" to="/">
					Dashboard
				</NavLink>{' '}
				{' | '}
				<NavLink activeClassName="my-active-class" to="/hero">
					Heroes
				</NavLink>{' '}
				{' | '}
				<NavLink activeClassName="my-active-class" to="/login">
					Login
				</NavLink>{' '}
				{' | '}
				<NavLink activeClassName="my-active-class" to="/heroes">
					Heroes
				</NavLink>
			</nav>
		</>
	);
}

export default Header;