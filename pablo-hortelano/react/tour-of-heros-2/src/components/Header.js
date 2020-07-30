import React from 'react';
import { Button, Container } from 'react-bootstrap';

function Header() {
	return (
		<Container className="main-header">
			<h1>Tour of Heros</h1>
			<Button className="main-header__button">Dashboard</Button>
			<Button className="main-header__button">List</Button>
		</Container>
	);
}
export default Header;
