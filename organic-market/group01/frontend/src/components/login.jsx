import React, { useState, useEffect } from 'react';
import { login, logout } from '../actions/authActions';
import authStore from '../stores/authStore';

import TextInput from './TextInput';

function Login() {
	const [isLogged, setIsLogged] = useState(authStore.isLogged());
	const [user, setUser] = useState(authStore.getUserProfile());
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	useEffect(() => {
		authStore.addChangeListener(onAuthChange);

		return () => authStore.removeChangeListener(onAuthChange);
	}, [isLogged, user]);

	function onFieldChange(value, setValue) {
		setValue(value);
	}

	function onAuthChange() {
		setIsLogged(authStore.isLogged());
		setUser(authStore.getUserProfile());
	}
	return (
		<>
			{!isLogged && (
				<>
					<div className="login-main-container">
						<div className="login-main-container__wrap">
							<div className="login-wrap__form">
								<span>Log in</span>

								<div data-validate="Enter username">
									<TextInput
										type="text"
										name="username"
										placeholder="Username"
										value={email}
										onChange={(event) =>
											onFieldChange(event.target.value, setEmail)
										}
									/>
									<span data-placeholder=""></span>
								</div>

								<div data-validate="Enter password">
									<TextInput
										type="password"
										textContentType={'password'}
										name="pass"
										placeholder="Password"
										value={password}
										onChange={(event) =>
											onFieldChange(event.target.value, setPassword)
										}
									/>
									<span data-placeholder=""></span>
								</div>
								<div className="login-wrap__form__btn">
									<button onClick={() => login(email, password)}>Login</button>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
			{isLogged && (
				<>
					<button className="logout-btn" onClick={() => logout()}>
						Logout
					</button>
				</>
			)}
		</>
	);
}

export default Login;
