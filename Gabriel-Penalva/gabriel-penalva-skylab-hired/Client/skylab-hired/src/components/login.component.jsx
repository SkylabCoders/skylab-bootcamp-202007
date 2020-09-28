import React, { useEffect, useState } from 'react';
import '../styles/login.component.style.scss';
import navIcons from '../icons/navIcons';
import { loginActions } from '../actions/userActions';
import store from '../store/store';
import { Redirect, Link } from 'react-router-dom';
import md5 from 'md5';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [user, setUser] = useState(null);

	useEffect(() => {
		store.addChangeListener(onChange);
		if (!user) {
			setUser(store.getUser());
		}
		return () => {
			return store.removeChangeListener(onChange);
		};
	}, [user]);

	function onChange() {
		setUser(store.getUser());
	}
	function sendUser(a, b) {
		loginActions(a, md5(b));
	}
	if (user) {
		return <Redirect to="/" />;
	}

	return (
		<div className="login-super">
			<div className="login-holder flex-col">
				<div className="login-holder_img flex-item">
					<img src={navIcons.login} alt="Welcome!" />
				</div>
				<div className="login-imputs flex-col">
					<div className="flex-col login-imputs">
						<label className="flex-col" htmlFor="username">
							{' '}
							E-mail
							<input
								type="text"
								id="username"
								value={email}
								onChange={(event) => setEmail(event.target.value.toLowerCase())}
								name="username"
							/>
						</label>
						<label htmlFor="password" className="flex-col">
							{' '}
							Password
							<input
								type="password"
								id="password"
								value={password}
								name="password"
								onChange={(event) => setPassword(event.target.value.trim())}
							/>
						</label>
						<button
							onClick={() => sendUser(email, password)}
							className="login-button_log"
							type="submit"
						>
							{' '}
							Log In
						</button>
						<Link to="/register">Haven't account? Register here!</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
