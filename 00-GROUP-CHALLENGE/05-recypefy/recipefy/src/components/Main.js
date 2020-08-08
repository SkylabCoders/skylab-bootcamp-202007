import React from 'react';
import ProfileComponent from './Profile.component';
import Recommendation from './Recommendation';
import TopFiveComponent from './TopFive.component';
import PreferencesList from './PreferencesList';
import './Main.css';

function Main() {
	return (
		<div className="body-content">
			<ProfileComponent />
			<main className="Main-page">
				<Recommendation />
				<TopFiveComponent />
				<PreferencesList />
			</main>
		</div>
	);
}

export default Main;
