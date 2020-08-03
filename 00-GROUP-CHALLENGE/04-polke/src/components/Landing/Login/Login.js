import React from 'react';
import { Form, FormControl, FormGroup, Button, Control } from 'react-bootstrap';
import '../../../shared/generalStyles.css';
import './Login-styles.css';

function Login() {
	return (
		<div className="Login">
			<form className="Login__form">
				<h2>Login</h2>
				<FormGroup controlId="username" bsSize="large">
					<Button>Google</Button>
				</FormGroup>
				<FormGroup controlId="password" bsSize="large">
					<Button>GitHub</Button>
				</FormGroup>
				<h4>User</h4>
				<FormControl />
				<h4>Pasword</h4>
				<FormControl />
				<FormGroup className="" controlId="login" bsSize="large">
					<Button>Enter</Button>
				</FormGroup>
				<a>Register</a>
			</form>
		</div>
	);
}

export default Login;
