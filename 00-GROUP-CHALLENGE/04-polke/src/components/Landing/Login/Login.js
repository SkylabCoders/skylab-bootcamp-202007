import React from 'react';
import { FormControl, FormGroup, Button } from 'react-bootstrap';
import '../../../shared/generalStyles.css';
import './Login-styles.css';

function Login() {
	return (
		<form className="Login__form">
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
			>
				<Button>GitHub</Button>
			</FormGroup>
			<FormGroup
				className="Login__form__container-input"
				controlId="input"
				bsSize="large"
			>
				<FormControl className="Login__form__input" placeholder="&#128100;" />
				<FormControl
					className="Login__form__input"
					type="password"
					placeholder="&#128272;"
				/>

				<Button className="Login__form__last-button">Enter</Button>
			</FormGroup>
			<a className="Login__form__anchor--colored">Register</a>
		</form>
	);
}

export default Login;
