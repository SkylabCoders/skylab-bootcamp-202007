import React, { useState, useEffect } from 'react';
import authStore from '../stores/authStore';
import { login, logout } from '../actions/authAtions';

function Login() {
	const [isLogged, setIsLogged] = useState(authStore.getIsLogged());

	useEffect(() => {
		authStore.addChangeListener(onLoginChange);
		return () => authStore.removeChangeListener(onLoginChange);
	}, [isLogged]);

	function onLoginChange() {
		setIsLogged(authStore.getIsLogged());
	}

	return (
		<>
			{isLogged && <button onClick={() => logout()}>Logout</button>}
			{!isLogged && <button onClick={() => login()}>Login</button>}
		</>
	);
}

export default Login;
