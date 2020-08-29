import React from 'react';
import userStore from '../../stores/userStore';
import authStore from '../../stores/authStore';
//import { listFavoriteFilms } from '../../actions/userActions';
import './user.scss';

function User() {
	const data = authStore.getUserProfile();
	return (
		<div className="user-container">
			<section className="user-info">
				<div className="user-image">
					<img
						src={
							!!data.photoURL
								? data.photoURL
								: 'https://est.zetaestaticos.com/extremadura/img/noticias/0/773/773205_1.jpg'
						}
						alt="User profile image"
					/>
				</div>
				<div className="user-detail">
					<p>
						{!!data.displayName ? data.displayName.toUpperCase() : 'Juanca'}
					</p>
					<p>{!!data.email ? data.email : 'rei@espana.com'}</p>
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
