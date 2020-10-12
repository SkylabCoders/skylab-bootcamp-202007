import React, { useState, useEffect } from 'react';
import '../styles/login.component.style.scss';
import store from '../store/store';

import '../styles/profile.component.style.scss';
import { Redirect, Link } from 'react-router-dom';

function Profile() {
	const [user, setUser] = useState(store.getUser());
	useEffect(() => {
		store.addChangeListener(onChange);

		return () => {
			return store.removeChangeListener(onChange);
		};
	}, []);
	function onChange() {
		setUser(store.getUser());
	}
	console.log(user.Bday);

	if (!user) {
		return <Redirect to="/" />;
	}
	return (
		<>
			<div className="profile-holder flex-col">
				<h1>PROFILE</h1>
				<div className="profile-info">
					<p>
						NAME: <span>{user.name}</span>
					</p>
					<p>
						E-MAIL: <span>{user.email}</span>
					</p>
					<p>
						B-DAY: <span>{new Date(user.Bday).toDateString()}</span>
					</p>

					<Link to="/user/entries">
						<p>
							Nº ENTRIES: <span>{user.user_entries_list.length}</span>
						</p>
					</Link>

					<Link to="/user/favoruites">
						<p>
							FAVORITES: <span>{user.user_fav_list.length}</span>
						</p>
					</Link>
				</div>
			</div>
		</>
	);
}

export default Profile;
