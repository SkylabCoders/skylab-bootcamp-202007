import React from 'react';
import { Link, Route } from 'react-router-dom';
import './login.css';

function Login() {
	return (
		<div className="login-container">
			<div className="newAccount">
				<button className="button">Login with Google</button>
				<button className="button">Login with Facebook</button>
				<button className="button">Create a new account</button>
			</div>
			<div className="login">
				<label>
					<input
						className="email"
						type="text"
						placeholder="user e-mail"
					></input>
				</label>
				<label>
					<input type="text" placeholder="password"></input>
				</label>
				<button>Login</button>
			</div>
		</div>
	);
}

export default Login;