import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header(props) {
	const [login, setLogin] = useState('Login');
	const [search, setSearch] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		window.location.pathname = '/finder/' + search;
	};

	return (
		<>
			<div className="header-container">
				<header className="header">
					<Link className="header-logo" to="/"></Link>
					<form className="header-form" onSubmit={handleSubmit}>
						<input
							type="text"
							value={search}
							className="header-form__search"
							placeholder="Search any title or name..."
							onChange={(event) => setSearch(event.target.value)}
						></input>
					</form>

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
			</div>
		</>
	);
}

export default Header;
