import React from 'react';
import './actions.css';
import { NavLink } from 'react-router-dom';

function Actions(props) {
	return (
		<nav>
			<NavLink to="/dashboard" className="button">
				Dashboard
			</NavLink>
			<NavLink to="/hero" className="button">
				Heroes
			</NavLink>
			<NavLink to="/login" className="button">
				Login
			</NavLink>
		</nav>
	);
}

export default Actions;
