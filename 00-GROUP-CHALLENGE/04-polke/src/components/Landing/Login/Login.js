import React, { useState, useEffect } from 'react';
import { FormControl, FormGroup, Button } from 'react-bootstrap';
import '../../../shared/generalStyles.css';
import './Login.css';
import { login, logout } from '../../../actions/loginActions';
import landingStore from '../../../stores/landingStore';

function Login() {
	const email = 'danialonso85@hotmail.es';
	const password = 'gokreta';

	const [isLogged, setIsLogged] = useState(landingStore.isLogged);
	const [user, setUser] = useState(landingStore.getUserProfile);

	useEffect(() => {
		landingStore.addChangeListener(onAuthChange);
		return () => landingStore.removeChangeListener(onAuthChange);
	}, [isLogged, user]);

	function onAuthChange() {
		setIsLogged(landingStore.isLogged());
		setUser(landingStore.getUserProfile());
	}

	return (
		<>
			<form className="Login__form">
				{!isLogged && (
					<button
						onClick={(event) => {
							event.preventDefault();
							login(email, password);
						}}
					>
						Login
					</button>
				)}
				{isLogged && <button onClick={logout}>Logout</button>}

				<h2 className="Login__form__login-title--colored">Login</h2>

				<FormGroup
					className="Login__login-with-button"
					controlId="username"
					bsSize="large"
				>
					<Button>Google</Button>
				</FormGroup>
				<FormGroup
					className="Login__login-with-button"
					controlId="password"
					bsSize="large"
				></FormGroup>
				<FormGroup
					className="Login__form__container-input"
					controlId="input"
					bsSize="large"
				>
					<FormControl className="Login__form__input" placeholder="&#128100;" />
					<FormControl
						className="Login__form__input"
						type="password"
						npm
						start
						placeholder="&#128272;"
					/>

					<Button className="Login__form__last-button">Enter</Button>
				</FormGroup>
				<a className="Login__form__anchor--colored">Register</a>
			</form>
		</>
	);
}
export default Login;
