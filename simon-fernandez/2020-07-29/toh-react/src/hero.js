import React from 'react';
import './hero.css';

function Hero({ goToDashboard, goToList }) {
	return (
		<div>
			<h1>Tour of Heroes</h1>
			<div className="row">
				<button onClick={goToDashboard}>Dashboard</button>
				<button onClick={goToList}>Heroes</button>
			</div>
		</div>
	);
}

export default Hero;
