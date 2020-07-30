import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
	return (
		// El elemento vacio desaparece al renderizarse...es buena practica
		<>
			<h1>Tour of Heroes</h1>
			<nav>
				<NavLink to="/" className="header__buttons">Dasshboard</NavLink> {'|'}{' '}
				<NavLink to="/heroes" className="header__buttons">Heroes</NavLink> 
			
			</nav>
		</>
	);
}

export default Header;
