import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import authStore from '../../stores/authStore';

import { createUserWithMail } from '../../actions/authActions';

import './Register.scss';

function Register() {
	const history = useHistory();

	function handleLogoClick() {
		history.push('/');
	}

	function getFormElements() {
		const emailInputElement = document.getElementsByClassName(
			'register__email'
		)[0];
		const passwordInputElement = document.getElementsByClassName(
			'register__password'
		)[0];
		const repeatInputElement = document.getElementsByClassName(
			'register__repeat-password'
		)[0];
		const submitButtonElement = document.getElementsByClassName(
			'form-register__button'
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
			repeatInputElement,
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
		formElements.repeatInputElement.disabled = true;
		formElements.submitButtonElement.disabled = true;

		formElements.loadingElement.style.display = 'flex';
		formElements.noLoadingElement.style.display = 'none';
	}

	function enableForm(formElements) {
		formElements.emailInputElement.disabled = false;
		formElements.passwordInputElement.disabled = false;
		formElements.repeatInputElement.disabled = false;
		formElements.submitButtonElement.disabled = false;

		formElements.loadingElement.style.display = 'none';
		formElements.noLoadingElement.style.display = 'flex';
	}

	async function handleSubmit() {
		const formElements = getFormElements();

		const email = formElements.emailInputElement.value;
		const password = formElements.passwordInputElement.value;
		const repeat = formElements.repeatInputElement.value;

		if (email && password && repeat) {
			if (password !== repeat) {
				formElements.warningMessageElement.innerHTML =
					'Passwords must match';
			} else {
				disableForm(formElements);

				const formData = {
					email,
					password,
				};
				await createUserWithMail(formData);
				const userResponse = authStore.getAuthUser();
				if (typeof userResponse === 'string') {
					formElements.warningMessageElement.innerHTML = userResponse;
					enableForm(formElements);
				} else {
					history.replace('/bikes');
				}
			}
		}
	}

	function checkRepeatPassword() {
		const password = document.getElementsByClassName(
			'register__password'
		)[0].value;
		const repeat = document.getElementsByClassName(
			'register__repeat-password'
		)[0].value;

		if (password === repeat) {
			document.getElementsByClassName('login__warning')[0].innerHTML = '';
		} else {
			document.getElementsByClassName('login__warning')[0].innerHTML =
				'Passwords must match';
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
				<NavLink to='/login' className='landing-header-login'>
					<button className='register__button--header'>Log In</button>
				</NavLink>
			</div>
			<div className='register__upper mobile'>
				<img
					src='https://cdn.discordapp.com/attachments/692420285143711814/693437226146594876/LogoGerili.png'
					alt='bikup logo'
					className='register__logo'
					onClick={handleLogoClick}
				/>
				<NavLink to='/' className='register__bikup'>
					bikUP
				</NavLink>
				<div className='flex-spacer'></div>
				<NavLink className='login__button' to='/login'>
					Log In
				</NavLink>
			</div>
			<div className='register'>
				<div className='register__container'>
					<h1>Create an account</h1>

					<form
						name='registerForm'
						action='/api/auth/mail'
						className='register__form'
						method='POST'
					>
						<label
							htmlFor='email'
							className='input__label'
							required
						>
							Email
						</label>
						<input
							type='email'
							className='register__email register__input'
							name='email'
							placeholder='Enter your email...'
							required
						/>
						<label htmlFor='password' className='input__label'>
							Password
						</label>
						<input
							type='password'
							className='register__password register__input'
							name='password'
							placeholder='Enter your password...'
							pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
							required
						/>
						<label
							htmlFor='repeat-password'
							className='input__label'
						>
							Repeat Password
						</label>
						<input
							type='password'
							className='register__repeat-password register__input'
							name='repeat_password'
							placeholder='Repeat the password...'
							pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
							required
							onChange={(event) => {
								event.preventDefault();
								checkRepeatPassword();
							}}
						/>
						<div className='login__warning '></div>
						<div className='register__form__bottom'>
							<button
								className='form-register__button'
								type='submit'
								onClick={(event) => {
									event.preventDefault();
									handleSubmit();
								}}
							>
								<div className='loading hidden'>
									<img
										src='https://trello-attachments.s3.amazonaws.com/5f4cb639a6f5eb1005114de4/5f5753c458a8b552f891bb81/af512a8cb3c1285000d1191fdaaa670c/Spinner-1s-200px_(1).gif'
										alt='loading...'
										className='loading__img'
									/>
									<p>Loading...</p>
								</div>
								<div className='no-loading' Create Account>
									Create an account
								</div>
							</button>
						</div>
					</form>

					<div className='register__separator'>
						<div className='line'></div>
						<span className='bold'>Or</span>
						<div className='line'></div>
					</div>

					<div className='register__external'>
						<button className='register__btn strava'>
							<div className='btn__logo'>
								<img
									src='https://trello-attachments.s3.amazonaws.com/5f4cb639a6f5eb1005114de4/5f53a18bf970328231db4f61/2f6af477333d585dfbfc19a14da9f857/strava-2.svg'
									alt='google logo'
								/>
							</div>
							<div className='btn__text'>
								register with Strava
							</div>
						</button>

						<button className='register__btn google'>
							<div className='btn__logo'>
								<img
									src='https://trello-attachments.s3.amazonaws.com/5f4cb639a6f5eb1005114de4/5f53a18bf970328231db4f61/99c6b9ab576aa9e324980db26e5fc7c0/google-logo.png'
									alt='google logo'
								/>
							</div>
							<div className='btn__text'>
								register with Google
							</div>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Register;
