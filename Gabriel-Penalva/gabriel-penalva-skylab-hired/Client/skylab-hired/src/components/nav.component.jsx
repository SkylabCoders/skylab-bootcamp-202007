import React from 'react';
import navIcons from '../icons/navIcons';
import '../styles/nav.component.style.scss';
import { Link, useHistory } from 'react-router-dom';
import store from '../store/store';

function Nav() {
	let history = useHistory();
	let user = store.getUser();
	function logout() {
		store.logout();
		history.push('/');
	}
	return (
		<>
			<nav className="navBar flex-row">
				<div className="flex-row">
					<Link to="/">
						<img src={navIcons.home} alt="Home" title="Home" />
					</Link>
					<Link to="/profile">
						<img src={navIcons.profile} alt="Profile" title="Profile" />
					</Link>
					{user.isAdmin == true && (
						<img
							src={navIcons.admin}
							alt="Admin Management"
							title="Admin Management"
						/>
					)}
				</div>
				<div className="nav-logout flex-row">
					<button onClick={() => logout()}>logOut</button>
				</div>
			</nav>
		</>
	);
}

export default Nav;
