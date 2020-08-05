import React, { useState, useEffect } from 'react';
import './login.css';
import { login, logout } from '../../actions/authActions';
import authStore from '../../stores/authStore';

function Login() {
	let email = 'v.cucchiararo@gmail.com';
	let password = 'password';

	const [isLogged, setIsLogged] = useState(authStore.isLogged());
	const [user, setUser] = useState(authStore.getUserProfile());

	useEffect(() => {
		authStore.addChangeListener(onAuthChange);

		return () => authStore.removeChangeListener(onAuthChange);
	}, [isLogged, user]);

	function onAuthChange() {
		setIsLogged(authStore.isLogged());
		setUser(authStore.getUserProfile());
	}
	return (
		<div className="login-container">
			<div className="newAccount">
				<button className="button">Login with Google</button>
				<button className="button">Login with Facebook</button>
				<button className="button">Create a new account</button>
			</div>
			<div className="login">
				<label>
					<input type="text" placeholder="user e-mail"></input>
				</label>
				<label>
					<input type="password" placeholder="password"></input>
				</label>
				{!isLogged && (
					<button onClick={() => login(email, password)} className="button">
						Login
					</button>
				)}
				{isLogged && (
					<>
						<p className="welcome-login">Welcome {user && user.email} </p>
						<button onClick={() => logout()} className="button">
							Logout
						</button>
					</>
				)}
			</div>
		</div>
	);
}

export default Login;
