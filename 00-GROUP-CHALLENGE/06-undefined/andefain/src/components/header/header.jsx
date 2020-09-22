import React, { useState, useEffect } from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import authStore from '../../stores/authStore';
import { logout } from '../../actions/authActions';

function Header() {
	const [search, setSearch] = useState('');
	const [login, setLogin] = useState(authStore.isLogged());

	useEffect(() => {
		authStore.addChangeListener(onChange);
		return () => authStore.removeChangeListener(onChange);
	});

	function onChange() {
		setLogin(authStore.isLogged());
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		window.location.pathname = '/finder/' + search;
	};

	return (
		<header className="header-container">
			<div className="header">
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
					{login ? (
						<>
							<Link className="header-login__profile-button" to="/profile">
								Profile
							</Link>
							<div className="header-login__button" onClick={() => logout()}>
								Logout
							</div>
						</>
					) : (
						<Link to="/login">
							<div className="header-login__button">Login</div>
						</Link>
					)}
				</div>
			</div>
		</header>
	);
}

export default Header;
