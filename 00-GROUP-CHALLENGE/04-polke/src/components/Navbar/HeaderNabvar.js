import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../shared/generalStyles.css';
import './HeaderNavbar.css';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function HeaderNavbar() {
	const imgLogo = (
		<img
			src={require('../../assets/img/logo.png')}
			alt="logo"
			className="navbar__logo"
		/>
	);
	return (
		<>
			<Navbar expand="lg" className="--bg-color-navBar">
				<Navbar.Brand>
					<NavLink to="/">{imgLogo}</NavLink>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<input></input>
					<button>Go</button>
				</Navbar.Collapse>
				<div className="switch">
					<img src={require('../../assets/img/sun.png')} alt="sun" />
					<div className="custom-control custom-switch">
						<input
							type="checkbox"
							className="custom-control-input"
							id="customSwitchesChecked"
							defaultChecked
						/>
						<label
							className="custom-control-label"
							htmlFor="customSwitchesChecked"
						></label>
					</div>
					<img src={require('../../assets/img/moon.png')} alt="moon" />
				</div>
			</Navbar>
		</>
	);
}

export default HeaderNavbar;
