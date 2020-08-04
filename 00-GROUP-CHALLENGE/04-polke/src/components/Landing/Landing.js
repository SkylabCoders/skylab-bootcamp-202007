import React from 'react';
import '../../shared/generalStyles.css';
import './Landing.css';
import Login from './Login/Login';
import PopUpBox from './PopUpBox/PopUpBox';

function Landing() {
	return (
		<div className="landing__container">
			<div className="landing__content">
				<Login />
				<PopUpBox />
			</div>
			<img
				src={require('../../assets/img/landing-chart.png')}
				alt="chart"
			></img>
		</div>
	);
}

export default Landing;
