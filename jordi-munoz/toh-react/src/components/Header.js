import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

function Header(props) {
	return (
		<>
			<h1>Tour of Heroes</h1>
			<nav className='buttons'>
				<NavLink activeClassName="my-active-class" to="/">
					<button>Dashboard</button>
				</NavLink>{' '}
				{' | '}
				<NavLink activeClassName="my-active-class" to="/hero">
					<button>Heroes</button>
				</NavLink>
				{' | '}
				{/* <NavLink activeClassName="my-active-class" to="/hero/:heroId">
					Detail
				</NavLink> */}
			</nav>
		</>
	);
}

export default Header;
