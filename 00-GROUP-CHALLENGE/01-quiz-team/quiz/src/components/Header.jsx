import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/header.scss';
import * as ROUTES from './../config/routes';


function Header() {
	return (
		<>
			<div className="header border border-info">
				<div className="inner__header">
						<div className="logo__header">
							<img className="img__header" src="https://storage.needpix.com/rsynced_images/quiz-2074324_1280.png" alt="quiz logo" />
						</div>
					<nav className="nav">
						<ul className="nav__list">
							<li>
								<NavLink className="nav__item" activeClassName="my-active-class link" to={ROUTES.HOME}>
									Home
								</NavLink>
							</li>
							<li> {' | '} </li>
							<li>
								<NavLink className="nav__item" activeClassName="my-active-class link" to={ROUTES.LEADERBOARD}>
									Leaderboard
								</NavLink>
							</li>
						</ul>
					</nav>
					<NavLink activeClassName="my-active-class" to="/login">
						<div className="login__icon"><img src={require('../assets/user_icon.png')} /> </div>
					</NavLink>
					<NavLink activeClassName="my-active-class" className="login__button__link" to={ROUTES.LOGIN}>
						<button type="button" className="login__button">Login</button>
					</NavLink>
				</div>
			</div>
		</>
	)
}

export default Header;

