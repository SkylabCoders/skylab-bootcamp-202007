import React, { useState, useEffect } from 'react';
import './login.scss';
import {
	login,
	logout,
	signInWithGoogle,
	signInAnonymously
} from '../../actions/authActions';
import authStore from '../../stores/authStore';

function Login() {
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
		<section className="login-container">
			{!isLogged && (
				<div className="login-box">
					<button onClick={() => signInWithGoogle()} className="login-button">
						<img
							className="login-img"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/235px-Google_%22G%22_Logo.svg.png"
							alt="Google img"
						/>
						Login with Google
					</button>
					<button onClick={() => signInAnonymously()} className="login-button">
						<img
							className="login-img"
							src="https://trello-attachments.s3.amazonaws.com/5f2589eca6761a4c8f4d10e1/5f294480df57d910f5d84ab9/3d91789127ba7164795f5acc1559d6ca/usuario.png"
							alt="Anonymously img"
						/>
						Anonymous login
					</button>
				</div>
			)}
			<div className="login-box">
				{!isLogged && (
					<input
						type="text"
						placeholder="user e-mail"
						className="email"
					></input>
				)}
				{!isLogged && (
					<input
						type="password"
						placeholder="password"
						className="password"
					></input>
				)}
				{!isLogged && (
					<button
						onClick={() => {
							const emailInput = document.getElementsByClassName('email')[0]
								.value;
							const passInput = document.getElementsByClassName('password')[0]
								.value;
							login(emailInput, passInput);
						}}
						className="login-button"
					>
						Login
					</button>
				)}
				{isLogged && (
					<>
						<p className="welcome-login">Welcome {user && user.email} </p>
						<button onClick={() => logout()} className="login-button">
							Logout
						</button>
					</>
				)}
			</div>
		</section>
	);
}

export default Login;
