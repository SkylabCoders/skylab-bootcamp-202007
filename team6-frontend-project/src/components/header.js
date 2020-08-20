import React from 'react';
import { Link, Route } from 'react-router-dom';

function Header() {
	return (
		<>
			<h1>Header works!</h1>
			<Link to="/"> Home </Link>
			<Link to="/user"> User </Link>
			<Link to="/login"> Login </Link>
			<Link to="/film"> Film </Link>
			<Link to="/celeb"> Celeb </Link>
			<Link to="/finder"> Finder </Link>
		</>
	);
}

export default Header;
