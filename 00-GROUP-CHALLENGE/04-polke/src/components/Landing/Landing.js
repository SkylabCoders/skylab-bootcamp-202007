import React from 'react';
import '../../shared/generalStyles.css';
import './Landing.css';
import Login from './Login/Login';

function Landing() {
	return (
		<div className="landing__container">
			<div className="landing__borders">
				<div className="landing__login-container">
					<Login />
				</div>
				<div className="landing__chart-container">
					<img
						src={require('../../assets/img/landing-chart.png')}
						alt="chart"
					></img>
				</div>
			</div>
		</div>
	);
}

export default Landing;
