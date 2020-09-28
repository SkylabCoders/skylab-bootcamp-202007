import React from 'react';
import '../styles/Header.css';

function Header() {
	return (
		<div className='header'>
			<div className='header__logo'>
				<img
					src={require('../images/bubbles.png')}
					alt='bubbles'
					className='header__logo__img'
				/>
				<div id='header__logo__name'>Narked At 30</div>
			</div>
			<nav className='header__navigation'>
				<a href='/diver' className='header__navigation__button'>
					<span className='button__text'>Divers</span>
					<div className='button__text__wave'></div>
				</a>

				<a href='/dive-site' className='header__navigation__button'>
					<span className='button__text'>Dive Sites</span>
					<div className='button__text__wave'></div>
				</a>
			</nav>
			<nav className='header__auth'>
				<a href='#' className='header__auth__login'>
					Log In
				</a>{' '}
				|{' '}
				<a href='/create-diver' className='header__auth__login'>
					Register
				</a>
			</nav>
		</div>
	);
}

export default Header;
