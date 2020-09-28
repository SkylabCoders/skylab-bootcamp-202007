import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { STRAVA_AUTH_FULL_URL } from '../../Constants/stravaAuth';

import './Landing.scss';

function Landing() {
	const history = useHistory();

	function handleRegisterClick() {
		history.push('/register');
	}

	return (
		<div className='landing'>
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
					<button className='login__button login__button--header'>
						Log In
					</button>
				</NavLink>
			</div>
			<div className='landing__upper mobile'>
				<NavLink className='login__button' to='/login'>
					Log In
				</NavLink>
			</div>
			<div className='landing__topContent'>
				<div className='topContent-main'>
					<img
						className='landing__bikup-logo'
						src='https://trello-attachments.s3.amazonaws.com/5f4cb639a6f5eb1005114de4/5f53aa4c97b74918797ef889/49939c4bd610049ad5bb132cd4fb6c87/bikup-logo.png'
						alt='bikUP logo'
					/>
					<h1>bikUP</h1>
				</div>
				<div className='landing__separator'></div>
				<h2 className='subtitle'>"Care for your bike"</h2>
				<div className='landing__register--container'>
					<div className='register__strava registerItem'>
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
									Register with Strava
								</div>
							</a>
						</button>
					</div>
					<div className='register__google registerItem'>
						<button className='register__btn google'>
							<div className='btn__logo'>
								<img
									src='https://trello-attachments.s3.amazonaws.com/5f4cb639a6f5eb1005114de4/5f53a18bf970328231db4f61/99c6b9ab576aa9e324980db26e5fc7c0/google-logo.png'
									alt='google logo'
								/>
							</div>
							<div className='btn__text'>
								Register with Google
							</div>
						</button>
					</div>
					<div className='register__separator'>
						<div className='line'></div>
						<span className='bold'>Or</span>
						<div className='line'></div>
					</div>
					<div className='register__mail registerItem'>
						<button
							className='register__btn mail'
							onClick={handleRegisterClick}
						>
							<div className='btn__logo'>
								<img
									src='https://image.flaticon.com/icons/svg/561/561127.svg'
									alt='google logo'
								/>
							</div>
							<div className='btn__text'>Create an account</div>
						</button>
					</div>
				</div>
			</div>

			<div className='landing__team'>
				<h2 className='team__title'>Meet the team</h2>
				<div className='team__members'>
					<div className='members__item'>
						<img
							src='https://trello-attachments.s3.amazonaws.com/5f4cb639a6f5eb1005114de4/5f53b05ec814da84c46afcea/f2f116196437dddbc62dc5dff303f654/mou.jfif'
							alt='member img'
							className='member__img member__img--mou'
						/>
						<div className='member__info'>
							<p className='member__name'>Mourad Mounim</p>
							<p className='member__desc'>"The runner"</p>
						</div>
					</div>
					<div className='members__separator mobile'></div>
					<div className='members__item'>
						<img
							src='https://trello-attachments.s3.amazonaws.com/5f4cb639a6f5eb1005114de4/5f53b05ec814da84c46afcea/e58df585979e8a973502d3aedd008570/gerard.jfif'
							alt='member img'
							className='member__img'
						/>
						<div className='member__info'>
							<p className='member__name'>Gerard Ramon</p>
							<p className='member__desc'>"The biker"</p>
						</div>
					</div>
				</div>
			</div>

			<div className='landing__footer'>
				<p>Copyright &copy; bikUP</p>
			</div>
		</div>
	);
}

export default Landing;
