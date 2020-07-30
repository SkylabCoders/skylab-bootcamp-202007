import React from 'react';
import '../bootstrap.min.css';

function Dashboard({ heroes }) {
	const maxHeroes = 4;
	const heroDashboard = heroes.slice(0, maxHeroes).map((hero) => (
		<div key={hero.name}>
			<span className="name btn btn-secondary">{hero.name}</span>
		</div>
	));
	return (
		<div>
			<h2>My Heroes</h2>
			<div className="hero-dashboard"> {heroDashboard} </div>
		</div>
	);
}

export default Dashboard;
