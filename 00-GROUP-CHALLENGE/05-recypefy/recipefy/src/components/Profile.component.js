import React, { useEffect, useState } from 'react';
import ListItemRecipe from './ListItemRecipe';
import { loadUser } from '../actions/UserAction';
import userStore from '../stores/UserStore';

function ProfileComponent() {
	const [user, setUser] = useState(null);
	const [actualFavourites, setActualFavourites] = useState([]);
	const [userPhoto, setUserPhoto] = useState(null);

	useEffect(() => {
		debugger;
		userStore.addChangeListener(onChange);
		if (user === null) {
			loadUser();
		}
		return () => userStore.removeChangeListener;
	}, []);
	function onChange() {
		setUser(userStore.getUserById(1));
		if (user != null) setActualFavourites(userFavourites(user));
	}

	function userFavourites(user) {
		const favouriteList = [];
		const favouritesNull = "You don't have any favourite!";
		if (user.favouriteRecipe.length === 0) {
			return favouritesNull;
		} else {
			favouriteList = user.favouriteRecipe.slice(0, 5);
			return favouriteList;
		}
	}
	return (
		<section className="">
			<h2>Your information</h2>
			<img alt="" src={userPhoto}></img>
			<div>
				<h3>Your proferences</h3>
				<ul>
					<li className="preferences__icon preference__balanced">Balanced</li>
					<li className="preferences__icon preference__hight-protein">
						High protein
					</li>
					<li className="preferences__icon preference__low-fat">Low fat</li>
					<li className="preferences__icon preference__low-carb">Low carb</li>
					<li className="preferences__icon preference__vegan">Vegan</li>
					<li className="preferences__icon preference__vegetarian">
						Vegerarian
					</li>
					<li className="preferences__icon preference__sugar-concious">
						Sugar concious
					</li>
					<li className="preferences__icon preference__peanut-free">
						Peanut free
					</li>
					<li className="preferences__icon preference__treeNut-free">
						Nut free
					</li>
					<li className="preferences__icon preference__alcohol-free">
						Alcohol free
					</li>
				</ul>
				<ul>
					{actualFavourites.map((recipe) => (
						<ListItemRecipe id={recipe.id} />
					))}
				</ul>
			</div>
		</section>
	);
}

export default ProfileComponent;
