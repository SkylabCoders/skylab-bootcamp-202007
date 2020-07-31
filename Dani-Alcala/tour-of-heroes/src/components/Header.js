import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header(props) {
	return (
		<>
			<h1>Tour of Heroes</h1>
			<nav>
				<NavLink to="/" exact activeClassName="my-active-class">
					Dashboard
				</NavLink>{' '}
				{' | '}
				<NavLink to="/heroList" exact activeClassName="my-active-class">
                    Heroes
                </NavLink> {' | '}
				<NavLink to="/heroLists" exact activeClassName="my-active-class">
                    HeroesRedirect
                </NavLink>{' | '}
                <NavLink activeClassName="my-active-class" to="/hero/14">
                    Bombasto
                </NavLink>
                {' | '}
                <NavLink activeClassName="my-active-class" to="/login">
                    Login
                </NavLink>
			</nav>
		</>
	);
}

export default Header;
