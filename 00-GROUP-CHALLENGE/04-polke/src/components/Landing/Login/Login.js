import React, { useState, useEffect } from 'react';
import { FormControl, FormGroup } from 'react-bootstrap';
import {
	login,
	loginGoogle,
	loginAnonymously
} from '../../../actions/loginActions';
import landingStore from '../../../stores/landingStore';
import '../../../shared/generalStyles.css';
import './Login.css';
import PopUpBox from '../PopUpBox/PopUpBox';
import { withRouter } from 'react-router-dom';
import githubApiConst from '../../../shared/githubApiConst';

export default withRouter(function ({ history }) {
	const [isLogged, setIsLogged] = useState(false);
	const [user, setUser] = useState(null);

	const USERDETAIL_PATH = './userDetail';

	useEffect(() => {
		landingStore.addChangeListener(onAuthChange);
		user ? history.push(USERDETAIL_PATH) : history.push('');
		return () => landingStore.removeChangeListener(onAuthChange);
	}, [isLogged, user]);

	function onAuthChange() {
		setIsLogged(landingStore.isLogged());
		setUser(landingStore.getUserProfile());
	}

	function handleLoginClick(event) {
		event.preventDefault();
		const email = document.getElementsByClassName('input-email')[0].value;
		const password = document.getElementsByClassName('input-password')[0].value;
		login(email, password);
	}

	return (
		<>
			<form className="Login__form">
				<h2 className="Login__form__login-title--colored">Log In</h2>
				<FormGroup
					className="Login__login-with-button"
					controlId="username"
					bsSize="large"
				>
					<button
						className="form__button"
						onClick={(event) => {
							event.preventDefault();
							loginGoogle();
						}}
					>
						Google
					</button>
				</FormGroup>
				<FormGroup
					className="Login__login-with-button "
					controlId="password"
					bsSize="large"
				>
					<button className="form__button">
						<a
							href={`https://github.com/login/oauth/authorize?client_id=${githubApiConst.GITHUB_CLIENTID}&scope=${githubApiConst.GITHUB_SCOPE}&login`}
						>
							GitHub
						</a>
					</button>
				</FormGroup>
				<FormGroup
					className="Login__form__container-input"
					controlId="input"
					bsSize="large"
				>
					<FormControl
						className="Login__form__input input-email"
						placeholder="&#128100;"
					/>
					<FormControl
						className="Login__form__input input-password"
						type="password"
						placeholder="&#128272;"
					/>

					<button
						className="Login__form__last-button form__button"
						onClick={(event) => {
							handleLoginClick(event);
						}}
					>
						Enter
					</button>
					<a
						className="Login__form__anchor--colored anchor Login-anchor"
						onClick={(event) => {
							event.preventDefault();
							document.getElementsByClassName('pop-up-modal')[0].style.display =
								'block';
						}}
					>
						Register
					</a>
					{'   |   '}
					<a
						className="login__log-anonym anchor Login-anchor"
						onClick={(event) => {
							event.preventDefault();
							loginAnonymously();
						}}
					>
						Log In Anonymously
					</a>
				</FormGroup>
			</form>
			<PopUpBox />
		</>
	);
});
