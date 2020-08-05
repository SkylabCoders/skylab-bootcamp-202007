import React, { useEffect, useState } from 'react';
import ListItemRecipe from './ListItemRecipe';
import { loadUser } from '../actions/UserAction';
import userStore from '../stores/UserStore';
import './FavouriteList.css';

function FavouriteList(props) {
	const [userList, setUserList] = useState(userStore.getUsers());
	const [actualFavourites, setActualFavourites] = useState([]);
	const [userPhoto, setUserPhoto] = useState('');

	useEffect(() => {
		userStore.addChangeListener(onChange);
		const userId = 1;
		if (userList.length === 0) {
			loadUser();
		} else {
			const user = userStore.getUserById(userId);
			console.log(user);
			if (user) {
				setActualFavourites(userStore.getUserFavouriteList(user));
				setUserPhoto(user.photo);
			}
		}
		return () => userStore.removeChangeListener;
	}, [userList.length]);

	function onChange() {
		setUserList(userStore.getUsers());
	}

	return (
		<div className="body__box body__favourite-list body__list">
			<h2 className="body__favourite-list--title">Your Favourites</h2>
			<ul>
				{actualFavourites.map((recipe) => (
					<ListItemRecipe title={recipe.title} />
				))}
			</ul>
		</div>
	);
}

export default FavouriteList;
