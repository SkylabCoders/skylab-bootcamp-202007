import React, { useState, useEffect } from 'react';
import './login.css';
import { login, logout, signInWithGoogle } from '../../actions/authActions';
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
		<div className="login">
			<div className="login-box">
				<button onClick={() => signInWithGoogle()} className="login-button">
					<img
						className="login-img"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/235px-Google_%22G%22_Logo.svg.png"
					/>
					Login with Google
				</button>
				<button className="login-button">
					{' '}
					<img
						className="login-img"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/600px-Facebook_f_logo_%282019%29.svg.png"
					/>
					Login with Facebook
				</button>
				<button className="login-button">Create a new account</button>
			</div>
			<div className="login-box">
				<input type="text" placeholder="user e-mail"></input>
				<input type="password" placeholder="password"></input>
				{!isLogged && (
					<button
						onClick={() => login(email, password)}
						className="login-button"
					>
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
