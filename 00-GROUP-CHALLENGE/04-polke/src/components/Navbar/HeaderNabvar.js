import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../shared/generalStyles.css';
import './HeaderNavbar.css';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function HeaderNavbar() {
	const [username, setUsername] = useState('');
	const [project, setProject] = useState('');

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
					<h1 className="navbar--text">GitData |</h1>
				</div>
				<NavLink to="/userDetail" className="navbar__navlink">
					User Repos
				</NavLink>
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
								placeholder="Search URL repo"
								className="mr-sm-2 navBar--input"
								onKeyUp={(event) => {
									event.preventDefault();
									const URLSearch =
										document
											.getElementsByClassName('navBar--input')[0]
											.value.split('/') || 'Need a valid URL';
									setUsername(URLSearch[3]);
									setProject(URLSearch[4]);
								}}
							/>
							<Button variant="outline-info" className="searchbar--button">
								<NavLink
									to={`/repoDetail/${username}/${project}`}
									className="navbar__button-nav"
								>
									Go
								</NavLink>
							</Button>
						</Form>
					</Navbar.Collapse>
				</div>
			</Navbar>
		</>
	);
}

export default HeaderNavbar;
