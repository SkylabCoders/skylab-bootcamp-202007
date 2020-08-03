import React from 'react';
import { Form, FormControl, FormGroup, Button, Control } from 'react-bootstrap';
import '../../../shared/generalStyles.css';
import './Login-styles.css';

function Login() {
	return (
		<div className="Login">
			<form className="Login__form">
				<h2 className="Login_form__login-title--colored">Login</h2>
				<FormGroup controlId="username" bsSize="large">
					<Button>Google</Button>
				</FormGroup>
				<FormGroup controlId="password" bsSize="large">
					<Button>GitHub</Button>
				</FormGroup>
				<FormGroup controlId="input" bsSize="large">
					<FormControl className="Login__form__input" placeholder="&#128100;" />
					<FormControl className="Login__form__input" placeholder="&#128272;" />

					<Button>Enter</Button>
				</FormGroup>
				<a className="Login__form__anchor--colored">Register</a>
			</form>
		</div>
	);
}

export default Login;
