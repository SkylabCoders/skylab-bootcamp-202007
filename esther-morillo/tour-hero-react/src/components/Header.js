import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
	return (
		<>
			<div className="lightbox">
				<h1 className="title">Tour of Heroes</h1>
				<nav>
            	     {/* Dirección que veremos en la url y se usa siempre en singular (/hero). 	Y el parámetro singular/id => hero/id (o lo que sea) */}
					<NavLink className="button" activeClassName="my-active-class" to="/">
						Dashboard
					</NavLink>{' '}
				
					<NavLink className="button" activeClassName="my-active-class" to="/heroes">
						Heroes
					</NavLink>

				</nav>
			</div>
		</>
	);
}

export default Header;
