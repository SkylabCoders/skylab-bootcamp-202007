import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/header.css'


function Header(props) {
	return (
		<>
			<div className="header border border-info">
				<div className="inner__header">
						<div className="logo__header">
							<img className="img__header" src="https://storage.needpix.com/rsynced_images/quiz-2074324_1280.png" alt="quiz logo" />
						</div>
					<nav>
						<ul className="nav__list">
							<li>
								<NavLink className="nav__item" activeClassName="my-active-class link" to="/">
									Home
								</NavLink>
							</li>
							<li> {' | '} </li>
							<li>
								<NavLink className="nav__item" activeClassName="my-active-class link" to="/leaderboard">
									Leaderboard
								</NavLink>
							</li>
						</ul>
					</nav>
					<div className="login__icon"><img src={require('../assets/user_icon.png')} /> </div>
					<NavLink activeClassName="my-active-class" className="login__button__link" to="/login">
						<button type="button" className="login__button">Login</button>
					</NavLink>
				</div>
			</div>
		</>
	)
}

export default Header;

