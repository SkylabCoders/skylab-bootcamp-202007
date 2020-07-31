import React from 'react';
import { Link, Route } from 'react-router-dom';

function Navigation() {
	return (
		<nav className="navigation">
			<Link className="navigation__item" to="/">
				Dashbord
			</Link>
			<Link className="navigation__item" to="/heroes">
				Heroes
			</Link>
		</nav>
	);
}

export default Navigation;
