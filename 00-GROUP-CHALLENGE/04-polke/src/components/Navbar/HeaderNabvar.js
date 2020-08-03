import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../shared/generalStyles.css';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { logo } from '../../assets/img/logo.png';

function HeaderNavbar() {
	const imgLogo = <img src={logo} alt="Logo" />;
	return (
		<>
			<Navbar expand="lg" className="--bg-color-navBar">
				<Navbar.Brand>
					<img src="../../assets/img/logo.png" alt="Logo" />
					<NavLink to="/"></NavLink>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<input></input>
					<button>Go to URL</button>

					<button>SwitchLD</button>
					<Nav className="mr-auto">
						<Nav.Link>
							<NavLink to="/userDetail">UserDetail</NavLink>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
}

export default HeaderNavbar;
