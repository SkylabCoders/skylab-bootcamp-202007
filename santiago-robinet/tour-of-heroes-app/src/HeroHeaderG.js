import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
	return(
		// El elemento vacio desaparece al renderizarse...es buena practica
		<>
			<h1>Tour of Heroes</h1>
			<nav>
				<NavLink href="/dashboard">Dasshboard</NavLink> {'|'} <NavLink href="/hero">Heroes</NavLink>
			</nav>
		</>

	);
}

export default Header;
