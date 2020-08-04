import React, { useEffect, useState } from 'react';
import ListItemRecipe from './ListItemRecipe';
import { loadUser } from '../actions/UserAction';
import userStore from '../stores/UserStore';
import './Profile.component.css';

function ProfileComponent(props) {
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
		<section className="main__profile-component body__box">
			<div className="main__profile-component--display-large">
				<h2>Your information</h2>
				<img alt="your avatar" src={userPhoto} className="profile-img"></img>
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
					<h3>Your Favourites</h3>
					<ul>
						{actualFavourites.map((recipe) => (
							<ListItemRecipe id={recipe.id} />
						))}
					</ul>
				</div>
			</div>
			<div className="main__profile-component--display-small">
				<h2>Your Favourites</h2>
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
