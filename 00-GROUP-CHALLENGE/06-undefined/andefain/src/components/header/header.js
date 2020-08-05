import React, { useState } from 'react';
import './header.css';
import { Link, Route, Redirect } from 'react-router-dom';

function Header(props) {
	const [login, setLogin] = useState('Login');

	return (
		<>
			<header className="header">
				<Link className="header-logo" to="/"></Link>
				<Link to="/">
					<div className="header-menu">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							className="ipc-icon ipc-icon--menu"
							viewBox="0 0 24 24"
							fill="currentColor"
							role="presentation"
						>
							<path fill="none" d="M0 0h24v24H0V0z"></path>
							<path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"></path>
						</svg>
						<span className="header-menu__text">Menu</span>
					</div>
				</Link>

				<input
					onSubmit
					className="header-search"
					placeholder="Search any title or name..."
				></input>
				<div className="header-login">
					<div className="header-login__hidden-menu">
						<Link
							to="/login"
							className="header-login__button"
							onClick={setLogin}
						>
							Login
						</Link>
						{!login && (
							<div className="hidden-list">
								<div className="login-list__button">My profile</div>
								<div className="login-list__button">My watchlist</div>
								<div className="login-list__button">My reviews</div>
								<div className="login-list__button">User settings</div>
								<div className="login-list__button">Logout</div>
							</div>
						)}
					</div>
				</div>
			</header>
		</>
	);
}

export default Header;
