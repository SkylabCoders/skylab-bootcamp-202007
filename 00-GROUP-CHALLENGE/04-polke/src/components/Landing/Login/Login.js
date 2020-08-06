import React, { useState, useEffect } from 'react';
import { FormControl, FormGroup, Button } from 'react-bootstrap';
import {
	login,
	loginGoogle,
	loginGitHub,
	loginAnonyomously,
	createNewUser
} from '../../../actions/loginActions';
import landingStore from '../../../stores/landingStore';
import '../../../shared/generalStyles.css';
import './Login.css';

function Login() {
	const [isLogged, setIsLogged] = useState(false);
	const [user, setUser] = useState(null);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

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
			<h2 className="Login__form__login-title--colored">Log In</h2>
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
				<button
					className="form__button"
					onClick={(event) => {
						event.preventDefault();
						loginGitHub();
					}}
				>
					GitHub
				</button>
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
				<a
					className="Login__form__anchor--colored anchor"
					onClick={(event) => {
						event.preventDefault();
						createNewUser();
					}}
				>
					Register
				</a>
				{'   |   '}
				<a
					className="login__log-anonym anchor"
					onClick={(event) => {
						event.preventDefault();
						loginAnonyomously();
					}}
				>
					Log In Anonymously
				</a>
			</FormGroup>
		</form>
	);
}

export default Login;
