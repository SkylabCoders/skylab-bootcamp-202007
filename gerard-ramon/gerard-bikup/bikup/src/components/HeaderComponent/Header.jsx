import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import './Header.scss';

function Header() {
	const history = useHistory();

	function handleLogoutClick() {
		sessionStorage.clear();
		history.replace('/');
	}

	function handleMenuClick() {
		const menu = document.getElementsByClassName('mobile__menu')[0];
		menu.style.display = 'block';
		menu.classList.remove('mobile__menu-hide');
		menu.classList.add('mobile__menu-show');
	}

	function handleDecoratorClick() {
		const menu = document.getElementsByClassName('mobile__menu')[0];
		menu.classList.remove('mobile__menu-show');
		menu.classList.add('mobile__menu-hide');
	}

	const mobileNav = [
		{
			text: 'ExploreMobile',
			url: '/bikes',
			image:
				'https://trello-attachments.s3.amazonaws.com/5f4cb639a6f5eb1005114de4/5f53d188f7827833bd79ef9b/214746d15b751953f02eb252fb879874/magnifying-glass.png',
		},
		{
			text: 'MyBikesMobile',
			url: '/bikes',
			image:
				'https://trello-attachments.s3.amazonaws.com/5f4cb639a6f5eb1005114de4/5f53d188f7827833bd79ef9b/ca1db79d00b304cb995a7491f0ce71a0/bike.png',
		},
		{
			text: 'ProfileMobile',
			url: '/user',
			image:
				'https://trello-attachments.s3.amazonaws.com/5f4cb639a6f5eb1005114de4/5f53d188f7827833bd79ef9b/e60b6c14d78fa03c5a1ae02b95f9cbca/user.png',
		},
	];

	const desktopNav = [
		{ text: 'My Bikes', url: '/bikes', image: '' },
		{ text: 'Explore', url: '/search', image: '' },
		{ text: 'Profile', url: '/user', image: '' },
	];

	const menuOptions = [
		{
			text: 'Logout',
			callback: handleLogoutClick,
			image:
				'https://trello-attachments.s3.amazonaws.com/5f4cb639a6f5eb1005114de4/5f5a496d520b7b130a5d4819/7f0d35433cdacef755bec9d18cbcce2c/logout.png',
		},
	];

	window.addEventListener('mouseup', function (event) {
		const menu = document.getElementsByClassName('mobile__menu')[0];
		if (event.target != menu && event.target.parentNode != menu) {
			menu && menu.classList.remove('mobile__menu-show');
			menu && menu.classList.add('mobile__menu-hide');
		}
	});

	return (
		<>
			<div className='mobile__menu'>
				<div className='menu__decorator' onClick={handleDecoratorClick}>
					<div className='decorator__line'></div>
				</div>
				<ul className='menu__list'>
					{menuOptions.map((option) => {
						return (
							<li
								className='menu__option'
								key={`menu-${option.text}`}
								onClick={option.callback}
							>
								<img
									src={option.image}
									alt={option.text}
									className='option__img'
								/>

								<p className='option__p'>{option.text}</p>
							</li>
						);
					})}
				</ul>
			</div>
			<header className='header'>
				<div className='header__mobile'>
					<div className='mobile__nav'>
						<img
							className='logo'
							src='https://cdn.discordapp.com/attachments/692420285143711814/693437226146594876/LogoGerili.png'
							alt='logo'
						/>
						{mobileNav.map((link) => {
							return (
								<NavLink
									to={link.url}
									key={link.text}
									activeClassName='active--mobile'
								>
									<img
										src={link.image}
										alt={link.text}
										className='nav__item'
									/>
								</NavLink>
							);
						})}
						<img
							className='nav__menu'
							src='https://trello-attachments.s3.amazonaws.com/5f4cb639a6f5eb1005114de4/5f53d188f7827833bd79ef9b/ea9ccf0f7a5fe6c8d066bb89f204f504/open-menu.png'
							alt='menu'
							onClick={handleMenuClick}
						/>
					</div>
				</div>

				<div className='header__desktop'>
					<img
						className='logo'
						src='https://cdn.discordapp.com/attachments/692420285143711814/693437226146594876/LogoGerili.png'
						alt='logo'
					/>
					<p className='appName'>bikUP</p>
					<ul className='header__navigation'>
						{desktopNav.map((link) => {
							return (
								<NavLink
									key={link.text}
									className='navigation__item'
									activeClassName='active-desktop'
									to={link.url}
								>
									{link.text}
								</NavLink>
							);
						})}
					</ul>
					<div className='flex-spacer'></div>
					<button
						className='login__button login__button--header'
						onClick={handleLogoutClick}
					>
						Log Out
					</button>
				</div>
			</header>
		</>
	);
}

export default Header;
