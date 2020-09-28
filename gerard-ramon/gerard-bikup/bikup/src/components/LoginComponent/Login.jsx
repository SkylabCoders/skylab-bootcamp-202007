import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import authStore from '../../stores/authStore';
import { STRAVA_AUTH_FULL_URL } from '../../Constants/stravaAuth';

import { loginUserWithMail } from '../../actions/authActions';

import './Login.scss';

function Login() {
	const history = useHistory();

	function getFormElements() {
		const emailInputElement = document.getElementsByClassName(
			'login__email'
		)[0];
		const passwordInputElement = document.getElementsByClassName(
			'login__password'
		)[0];
		const submitButtonElement = document.getElementsByClassName(
			'login__submitbutton'
		)[0];
		const loadingElement = document.getElementsByClassName('loading')[0];
		const noLoadingElement = document.getElementsByClassName(
			'no-loading'
		)[0];
		const warningMessageElement = document.getElementsByClassName(
			'login__warning'
		)[0];

		const formElements = {
			emailInputElement,
			passwordInputElement,
			submitButtonElement,
			loadingElement,
			noLoadingElement,
			warningMessageElement,
		};
		return formElements;
	}

	function disableForm(formElements) {
		formElements.emailInputElement.disabled = true;
		formElements.passwordInputElement.disabled = true;
		formElements.submitButtonElement.disabled = true;

		formElements.loadingElement.style.display = 'flex';
		formElements.noLoadingElement.style.display = 'none';
	}

	function enableForm(formElements) {
		formElements.emailInputElement.disabled = false;
		formElements.passwordInputElement.disabled = false;
		formElements.submitButtonElement.disabled = false;

		formElements.loadingElement.style.display = 'none';
		formElements.noLoadingElement.style.display = 'flex';
	}

	async function handleSubmit() {
		try {
			const formElements = getFormElements();

			const email = formElements.emailInputElement.value;
			const password = formElements.passwordInputElement.value;

			if (email && password) {
				disableForm(formElements);
				await loginUserWithMail(email, password);
				const user = authStore.getAuthUser();
				if (!user) {
					formElements.warningMessageElement.innerHTML =
						'Wrong email or password';
					enableForm(formElements);
				} else {
					history.replace('/bikes');
				}
			}
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<>
			<div className='landing__header desktop'>
				<NavLink to='/' className='header__linkhome'>
					<img
						className='logo'
						src='https://cdn.discordapp.com/attachments/692420285143711814/693437226146594876/LogoGerili.png'
						alt='logo'
					/>

					<p className='appName'>bikUP</p>
				</NavLink>
				<div className='flex-spacer'></div>
			</div>
			<div className='register__upper mobile'>
				<NavLink to='/'>
					<img
						src='https://cdn.discordapp.com/attachments/692420285143711814/693437226146594876/LogoGerili.png'
						alt='bikup logo'
						className='register__logo'
					/>
				</NavLink>
				<NavLink to='/' className='register__bikup'>
					bikUP
				</NavLink>
			</div>
			<div className='login'>
				<div className='login__container'>
					<h1>Log In</h1>

					<form action='' className='login__form' method='POST'>
						<label htmlFor='email' className='input__label'>
							Email
						</label>
						<input
							type='email'
							className='login__email login__input'
							name='email'
						/>
						<label htmlFor='password' className='input__label'>
							Password
						</label>
						<input
							type='password'
							className='login__password login__input'
							name='password'
						/>
						<div className='login__warning '></div>
						<div className='form__bottom'>
							<NavLink to='/register'>Create an account</NavLink>
							<div className='flex-spacer'></div>
							<button
								className='login__submitbutton'
								type='submit'
								onClick={(event) => {
									event.preventDefault();
									handleSubmit();
								}}
								onKeyUp={(event) => {
									event.preventDefault();
									if (event.keyCode === 13) handleSubmit();
								}}
							>
								<div className='loading hidden'>
									<img
										src='https://trello-attachments.s3.amazonaws.com/5f4cb639a6f5eb1005114de4/5f5753c458a8b552f891bb81/af512a8cb3c1285000d1191fdaaa670c/Spinner-1s-200px_(1).gif'
										alt='loading...'
										className='loading__img'
									/>
									<p>Loading</p>
								</div>
								<div className='no-loading' Create Account>
									Log In
								</div>
							</button>
						</div>
					</form>

					<div className='register__separator'>
						<div className='line'></div>
						<span className='bold'>Or</span>
						<div className='line'></div>
					</div>

					<div className='login__external'>
						<button className='register__btn strava'>
							<a
								href={STRAVA_AUTH_FULL_URL}
								className='button__anchor button__anchor--strava'
							>
								<div className='btn__logo'>
									<img
										src='https://trello-attachments.s3.amazonaws.com/5f4cb639a6f5eb1005114de4/5f53a18bf970328231db4f61/2f6af477333d585dfbfc19a14da9f857/strava-2.svg'
										alt='google logo'
									/>
								</div>
								<div className='btn__text'>
									Login with Strava
								</div>
							</a>
						</button>

						<button className='register__btn google'>
							<div className='btn__logo'>
								<img
									src='https://trello-attachments.s3.amazonaws.com/5f4cb639a6f5eb1005114de4/5f53a18bf970328231db4f61/99c6b9ab576aa9e324980db26e5fc7c0/google-logo.png'
									alt='google logo'
								/>
							</div>
							<div className='btn__text'>Login with Google</div>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Login;
