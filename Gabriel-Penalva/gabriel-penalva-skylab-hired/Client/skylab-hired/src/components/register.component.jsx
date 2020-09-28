import React, { useState, useEffect } from 'react';
import '../styles/login.component.style.scss';
import { registerActions } from '../actions/userActions';
import store from '../store/store';
import { Redirect, Link } from 'react-router-dom';
import md5 from 'md5';

function Register() {
	const [name, setName] = useState('');
	const [bday, setBday] = useState('');
	const [bootCamp, setBootCamp] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [register, setRegister] = useState(null);

	useEffect(() => {
		store.addChangeListener(onChange);

		return () => {
			return store.removeChangeListener(onChange);
		};
	}, [register]);

	function onChange() {
		setRegister(store.getRegister());
	}

	if (register) {
		store.setRegister();
		return <Redirect to="/" />;
	}

	return (
		<div className="login-super">
			<div className="login-holder flex-col">
				<h1>REGISTER</h1>
				<div className="login-imputs flex-col">
					<div className="flex-col">
						<form
							className="flex-col"
							action="javascript:void(0);"
							onSubmit={() =>
								registerActions(name, bootCamp, email, md5(password), bday)
							}
						>
							<label className="flex-col" htmlFor="name">
								{' '}
								name
								<input
									type="text"
									id="name"
									value={name}
									onChange={(event) => setName(event.target.value)}
									name="name"
									required
								/>
							</label>
							<label className="flex-col" htmlFor="dbay">
								{' '}
								Birth Day
								<input
									type="date"
									id="bday"
									value={bday}
									onChange={(event) => setBday(event.target.value.trim())}
									min="1920-09-26" max="2008-09-26"
									name="bday"
									required
								/>
							</label>
							<label className="flex-col" htmlFor="bootCamp">
								{' '}
								bootCamp
								<input
									type="number"
									id="bootCamp"
									placeholder="ej. 202007"
									value={bootCamp}
									onChange={(event) => setBootCamp(event.target.value.trim())}
									name="bootCamp"
									required
								/>
							</label>
							<label className="flex-col" htmlFor="email">
								{' '}
								email
								<input
									type="email"
									id="email"
									value={email}
									onChange={(event) =>
										setEmail(event.target.value.toLowerCase())
									}
									name="email"
									required
								/>
							</label>
							<label htmlFor="password" className="flex-col">
								{' '}
								password
								<input
									type="password"
									pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
									title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
									id="password"
									value={password}
									name="password"
									title="Must have at least: 1 Lower case, 1 Upper case, 1 Number. Minimum length 8 charcacters"
									onChange={(event) => setPassword(event.target.value.trim())}
									required
								/>
							</label>
							<button className="login-button_log" type="submit">
								{' '}
								Submit
							</button>
							<Link to="/">Back to Login</Link>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Register;
