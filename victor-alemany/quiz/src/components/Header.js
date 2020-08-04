import React from 'react';
import { NavLink } from 'react-router-dom';
import './../css/Header.css'


function Header(props){
    return (
    <>	
		<div className="header">
			<div>
				<h1>The Quiz</h1>
            </div> 			
			<nav>
				<NavLink activeClassName="my-active-class" to="/">
					Home
				</NavLink>{' '}
				{' | '}
				<NavLink activeClassName="my-active-class" to="/leaderboard">
					Leaderboard
				</NavLink>{' '}
				{' | '}
				<NavLink activeClassName="my-active-class" to="/dashboard">
					Dashboard
				</NavLink>{' '}
				{' | '}
				<NavLink activeClassName="my-active-class" to="/login">
					Login
				</NavLink>
			</nav>
		</div>
		</>
    )
}

export default Header;

