import React from 'react';
import '../../shared/generalStyles.css';
import './Landing.css';
import Login from './Login/Login';

function Landing() {
	return (
		<div className="landing__container">
			<div className="landing__welcome landing__box--color">
				<h1>Welcome to GitData</h1>
				<p>An app to see stats of your desired GitHub repositories</p>
			</div>
			<Login />
		</div>
	);
}

export default Landing;
