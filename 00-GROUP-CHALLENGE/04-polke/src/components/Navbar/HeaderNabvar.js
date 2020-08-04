import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../shared/generalStyles.css';
import './HeaderNavbar.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
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
			<Navbar
				expand="lg"
				bg="dark"
				variant="dark"
				className="navbar--flexNoWrap"
			>
				<div className="navbar--logoText">
					<Navbar.Brand>
						<NavLink to="/">{imgLogo}</NavLink>
					</Navbar.Brand>
					<h1 className="navbar--text">GitData</h1>
				</div>
				<div className="spacer"></div>
				<div className="navBar--flex">
					{/* <div className="switch">
						<img src={require('../../assets/img/sun.png')} alt="sun" />
						<div className="custom-control custom-switch">
							<input
								type="checkbox"
								className="custom-control-input"
								id="customSwitches"
								readOnly
							/>
							<label
								className="custom-control-label	"
								htmlFor="customSwitches"
							></label>
						</div>
						<img src={require('../../assets/img/moon.png')} alt="moon" />
					</div> */}
					<Navbar.Toggle
						className="toggle"
						aria-controls="basic-navbar-nav"
						bg="light"
					/>
					<Navbar.Collapse id="basic-navbar-nav">
						<Form inline>
							<FormControl
								type="text"
								placeholder="Search"
								className="mr-sm-2 navBar--input"
							/>
							<Button variant="outline-info" className="searchbar--button">
								Go
							</Button>
						</Form>
					</Navbar.Collapse>
				</div>
			</Navbar>
		</>
	);
}

export default HeaderNavbar;
