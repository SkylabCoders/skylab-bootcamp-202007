import React from 'react';
import ProfileComponent from './Profile.component';
import Recommendation from './Recommendation';
import TopFiveComponent from './TopFive.component';

function Main() {
	return (
		<>
			<ProfileComponent />
			<Recommendation />
			<TopFiveComponent />
		</>
	);
}

export default Main;
