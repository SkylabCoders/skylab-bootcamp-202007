import React from 'react';

function Hero({ goToDashboard, goToList }) {
	return (
		<div>
			<h1>Tour of Heroes</h1>
			<div className="row">
				<p onClick={goToDashboard}>Dashboard</p>
				<p onClick={goToList}>Heroes</p>
			</div>
		</div>
	);
}

export default Hero;
