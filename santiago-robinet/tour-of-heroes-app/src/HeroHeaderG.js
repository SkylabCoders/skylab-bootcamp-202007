import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
	return (
		// El elemento vacio desaparece al renderizarse...es buena practica
		<>
			<h1>Tour of Heroes</h1>
			<nav>
				<NavLink to="/">Dasshboard</NavLink> {'|'}{' '}
				<NavLink to="/heroes">Heroes</NavLink> {'|'}{' '}
			
			</nav>
		</>
	);
}

export default Header;
