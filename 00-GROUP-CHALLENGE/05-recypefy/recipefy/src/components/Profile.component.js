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
		<aside className="main__profile-component">
			<h2 className="wrapper">Your information</h2>
			<div>
				<div className="profile-img--container">
					{userPhoto && (
						<img
							alt="your avatar"
							className="profile-img"
							src={userPhoto}
						></img>
					)}
					{!userPhoto && (
						<img
							alt="You don't have any avatar"
							className="profile-img--no-avatar "
							src="https://image.flaticon.com/icons/svg/843/843260.svg"
						></img>
					)}
				</div>
				<h3 className="main__profile-component--title">Your preferences</h3>
				<div className="recipe__text--preferences">
					<img
						className="preferences__icon preference__balanced"
						src="https://image.flaticon.com/icons/png/512/30/30636.png"
					></img>
					<img
						className="preferences__icon"
						src="https://icon-library.com/images/protein-icon/protein-icon-0.jpg"
					></img>
					<img
						className="preferences__icon"
						src="https://www.pinclipart.com/picdir/big/150-1505070_low-fat-or-low-carb-icon-clipart.png"
					></img>
					<img
						className="preferences__icon"
						src="https://cdn2.iconfinder.com/data/icons/organic-food-1/24/Low_Carb-512.png"
					></img>
					<img
						className="preferences__icon"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Vegan_friendly_icon.svg/900px-Vegan_friendly_icon.svg.png"
					></img>
					<img
						className="preferences__icon"
						src="https://img.icons8.com/plasticine/100/000000/vegetarian-food.png"
					></img>
					<img
						className="preferences__icon"
						src="https://www.footys.co.za/images/icon-sugar.png"
					></img>
					<img
						className="preferences__icon preference__peanut-free"
						src="https://cdn0.iconfinder.com/data/icons/food-product-labels/128/peanut-free-512.png"
					></img>
					<img
						className="preferences__icon preference__tree-nut-free"
						src="https://cdn3.iconfinder.com/data/icons/food-allergens-3/77/allergens-tree-nut-free-512.png"
					></img>
					<img
						className="preferences__icon preference__alcohol-free"
						src="https://cdn3.iconfinder.com/data/icons/food-allergens-3/77/allergens-alcohol-free-512.png"
					></img>
				</div>
				<div>
					<h3 className="main__profile-component--title">Your Favourites</h3>
					<ul>
						{actualFavourites.map((recipe) => (
							<ListItemRecipe title={recipe.title} />
						))}
					</ul>
				</div>
			</div>
		</aside>
	);
}

export default ProfileComponent;
