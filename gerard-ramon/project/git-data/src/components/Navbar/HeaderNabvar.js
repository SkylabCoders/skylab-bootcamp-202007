import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function HeaderNavbar() {
	return (
		<>
			<Navbar bg="light" expand="lg">
				<Navbar.Brand>
					<NavLink to="/">Git-Data</NavLink>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link>
							<NavLink to="/userDetail">UserDetail</NavLink>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
				<input></input>
				<button>Go to URL</button>

				<button>SwitchLD</button>
			</Navbar>
		</>
	);
}

export default HeaderNavbar;
