import React, { useState, useEffect } from 'react';
import authStore from '../stores/authStore';
import { login, logout } from '../actions/authAtions';

function Login() {
	const [isLogged, setIsLogged] = useState(authStore.getIsLogged());
	const [user, setUser] = useState(authStore.getProfile());

	useEffect(() => {
		authStore.addChangeListener(onLoginChange);
		return () => authStore.removeChangeListener(onLoginChange);
	}, [isLogged, user]);

	function onLoginChange() {
		setIsLogged(authStore.getIsLogged());
		setUser(authStore.getProfile());
	}

	return (
		<>
			{isLogged && (
				<button onClick={() => logout()}>Logout {user && user.email}</button>
			)}
			{!isLogged && <button onClick={() => login()}>Login</button>}
		</>
	);
}

export default Login;
