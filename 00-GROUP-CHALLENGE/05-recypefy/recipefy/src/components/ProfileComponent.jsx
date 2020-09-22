import React, { useEffect, useState } from 'react';
import authStore from '../stores/AuthStore';
import './ProfileComponent.scss';

function ProfileComponent() {
	const [user, setUser] = useState(authStore.getUserProfile());
	const [userPhoto, setUserPhoto] = useState('');

	useEffect(() => {
		authStore.addChangeListener(onChange);
		if (!user) {
			setUser(authStore.getUserProfile());
		}
		if (user.user.photoURL) {
			setUserPhoto(user.user.photoURL);
		}
		return () => authStore.removeChangeListener;
	}, [user]);

	function onChange() {
		setUser(authStore.getUserProfile());
	}
	return (
		<aside className="main__profile-component">
			<h2 className="wrapper">Your information</h2>
			<div>
				{userPhoto && (
					<img alt="your avatar" src={userPhoto} className="profile-img"></img>
				)}
				{!userPhoto && (
					<img
						alt="your avatar"
						src="https://image.flaticon.com/icons/svg/843/843260.svg"
						className="profile-img"
					></img>
				)}
				<h3 className="main__profile-component--title">Preferences</h3>
				<ul className="profile--preferences">
					<li key="balanced">
						<p>Balanced</p>
						<img
							alt="icon preference"
							className="preferences__icon preference__balanced"
							src="https://image.flaticon.com/icons/png/512/30/30636.png"
						></img>
					</li>
					<li key="high-protein">
						<p>High Protein</p>
						<img
							alt="icon preference"
							className="preferences__icon"
							src="https://icon-library.com/images/protein-icon/protein-icon-0.jpg"
						></img>
					</li>
					<li key="low-fat">
						<p>Low Fat</p>
						<img
							alt="icon preference"
							className="preferences__icon"
							src="https://www.pinclipart.com/picdir/big/150-1505070_low-fat-or-low-carb-icon-clipart.png"
						></img>
					</li>
					<li key="low-carb">
						<p>Low Carb</p>
						<img
							alt="icon preference"
							className="preferences__icon"
							src="https://cdn2.iconfinder.com/data/icons/organic-food-1/24/Low_Carb-512.png"
						></img>
					</li>
					<li key="segan">
						<p>Vegan</p>
						<img
							alt="icon preference"
							className="preferences__icon"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Vegan_friendly_icon.svg/900px-Vegan_friendly_icon.svg.png"
						></img>
					</li>
					<li key="vegetarian">
						<p>Vegetarian</p>
						<img
							alt="icon preference"
							className="preferences__icon"
							src="https://img.icons8.com/plasticine/100/000000/vegetarian-food.png"
						></img>
					</li>
					<li key="sugar-concious">
						<p>Sugar Conscious</p>
						<img
							alt="icon preference"
							className="preferences__icon"
							src="https://www.footys.co.za/images/icon-sugar.png"
						></img>
					</li>
					<li key="peanut-free">
						<p>Peanut Free</p>
						<img
							alt="icon preference"
							className="preferences__icon preference__peanut-free"
							src="https://cdn0.iconfinder.com/data/icons/food-product-labels/128/peanut-free-512.png"
						></img>
					</li>
					<li key="tree-nut-freee">
						<p>Tree Nut Free</p>
						<img
							alt="icon preference"
							className="preferences__icon preference__tree-nut-free"
							src="https://cdn3.iconfinder.com/data/icons/food-allergens-3/77/allergens-tree-nut-free-512.png"
						></img>
					</li>
					<li key="alcohol-free">
						<p>Alcohol-Free</p>
						<img
							alt="icon preference"
							className="preferences__icon preference__alcohol-free"
							src="https://cdn3.iconfinder.com/data/icons/food-allergens-3/77/allergens-alcohol-free-512.png"
						></img>
					</li>
				</ul>
			</div>
		</aside>
	);
}

export default ProfileComponent;
