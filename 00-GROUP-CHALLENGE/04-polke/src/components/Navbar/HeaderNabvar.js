import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../shared/generalStyles.css';
import './HeaderNavbar.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Switch from './Switch/Switch';
import { logout } from '../../actions/loginActions';
import landingStore from '../../stores/landingStore';
import navbarStore from '../../stores/navbarStore';

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
						<NavLink to="/userDetail">{imgLogo}</NavLink>
					</Navbar.Brand>
					<h1 className="navbar--text">GitData</h1>
				</div>
				<div className="spacer"></div>
				<div className="navBar--flex">
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
							<NavLink
								to="/"
								className="nav__button"
								onClick={(event) => {
									logout();
								}}
							>
								Log Out
							</NavLink>
						</Form>
					</Navbar.Collapse>
				</div>
			</Navbar>
		</>
	);
}

export default HeaderNavbar;
