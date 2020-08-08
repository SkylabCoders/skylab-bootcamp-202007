import React from 'react';
import { users } from '../../mocks/user/userMock';
import './user.css';

function User() {
	return (
		<div className="user-container">
			<section className="user-info">
				<div className="user-image">
					<img src={users[0].image} />
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
