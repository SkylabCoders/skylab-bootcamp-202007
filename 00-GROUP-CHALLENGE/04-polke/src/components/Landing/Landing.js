import React from 'react';
import '../../shared/generalStyles.css';
import './Landing.css';
import Login from './Login/Login';

function Landing() {
	return (
		<div className="landing__container">
			<div className="landing__content">
				<Login />
			</div>
			<img
				src={require('../../assets/img/landing-chart.png')}
				alt="chart"
			></img>
		</div>
	);
}

export default Landing;
