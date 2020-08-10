import React, { useEffect, useState } from 'react';
import { users } from '../../mocks/user/userMock';
import userStore from '../../stores/userStore';
import { listFavoriteFilms } from '../../actions/userActions';
import './user.css';

function User() {
	const [favoriteMovie, setFavoriteMovie] = useState(
		userStore.getFavoriteFilms()
	);

	useEffect(() => {
		userStore.addChangeListener(onChange);
		if (favoriteMovie === 0) listFavoriteFilms();
		return () => userStore.removeChangeListener(onChange);
	});

	function onChange() {
		setFavoriteMovie(userStore.getFavoriteFilms());
	}

	return (
		<div className="user-container">
			<section className="user-info">
				<div className="user-image">
					<img src={users[0].image} alt="User profile image" />
				</div>
				<div className="user-detail">
					<p>{users[0].name.toUpperCase()}</p>
					<p>{users[0].lastName.toUpperCase()}</p>
					<p>{users[0].email}</p>
				</div>
			</section>
			<section className="user-favorite-movie">
				<p>{'Favorites Movies'.toUpperCase()}</p>
				<section className="movies">
					<div className="movie"></div>
				</section>
			</section>
		</div>
	);
}

export default User;
