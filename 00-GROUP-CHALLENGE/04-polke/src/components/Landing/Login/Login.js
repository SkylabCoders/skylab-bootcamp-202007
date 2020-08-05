import React, { useState, useEffect } from 'react';
import { FormControl, FormGroup, Button } from 'react-bootstrap';
import { login, logout, loginGoogle } from '../../../actions/loginActions';
import landingStore from '../../../stores/landingStore';
import '../../../shared/generalStyles.css';
import './Login.css';

function Login() {
	const email = 'gilbe.cao@gmail.com';
	const password = '1234567';

	const [isLogged, setIsLogged] = useState(false);
	const [user, setUser] = useState(null);

	useEffect(() => {
		landingStore.addChangeListener(onAuthChange);
		return () => landingStore.removeChangeListener(onAuthChange);
	}, [isLogged]);

	function onAuthChange() {
		setIsLogged(landingStore.isLogged());
		setUser(landingStore.getUserProfile());
	}

	return (
		<form className="Login__form">
			<h2 className="Login__form__login-title--colored">
				{isLogged.toString()}
			</h2>
			<FormGroup
				className="Login__login-with-button"
				controlId="username"
				bsSize="large"
			>
				<button
					className="form__button"
					onClick={(event) => {
						event.preventDefault();
						loginGoogle();
					}}
				>
					Google
				</button>
			</FormGroup>
			<FormGroup
				className="Login__login-with-button "
				controlId="password"
				bsSize="large"
			>
				<button className="form__button">GitHub</button>
			</FormGroup>
			<FormGroup
				className="Login__form__container-input"
				controlId="input"
				bsSize="large"
			>
				<FormControl
					className="Login__form__input input-email"
					placeholder="&#128100;"
				/>
				<FormControl
					className="Login__form__input input-password"
					type="password"
					npm
					start
					placeholder="&#128272;"
				/>

				<button
					className="Login__form__last-button form__button"
					onClick={(event) => {
						event.preventDefault();
						const email = document.getElementsByClassName('input-email')[0]
							.value;
						const password = document.getElementsByClassName(
							'input-password'
						)[0].value;
						login(email, password);
					}}
				>
					Enter
				</button>
			</FormGroup>
			<a className="Login__form__anchor--colored">Register</a>
		</form>
	);
}

export default Login;
