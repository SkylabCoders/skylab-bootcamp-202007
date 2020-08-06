import React from 'react';
import ProfileComponent from './Profile.component';
import Recommendation from './Recommendation';
import TopFiveComponent from './TopFive.component';
import FavouriteList from './FavouriteList';
import './Main.css';

function Main() {
	return (
		<>
			<ProfileComponent />
			<main className="Main-page">
				<Recommendation />
				<FavouriteList />
				<TopFiveComponent />
			</main>
		</>
	);
}

export default Main;
