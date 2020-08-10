import React, { useEffect, useState } from 'react';
import { users } from '../../mocks/user/userMock';
import userStore from '../../stores/userStore';
import { listFavoriteFilms } from '../../actions/userActions';
import './user.css';

function User() {
	return (
		<div className="user-container">
			<section className="user-info">
				<div className="user-image">
					<img src={users[0].photoURL} alt="User profile image" />
				</div>
				<div className="user-detail">
					<p>{users[0].displayName.toUpperCase()}</p>
					<p>{users[0].email}</p>
				</div>
			</section>
			<section className="user-favorite-movie">
				<p className="favorite-movies-title">
					{'Favorites Movies'.toUpperCase()}
				</p>
				<section className="movies">
					{userStore.getFavoriteFilms().map((element, i) => {
						return (
							<div className="movie" key={i}>
								<p className="title-film">{element.title}</p>
								<img src={element.image.url} />
							</div>
						);
					})}
				</section>
			</section>
		</div>
	);
}

export default User;
