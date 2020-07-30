import React from 'react';
import './dashboard.css';

function Dashboard({ heroes }) {
	const heroesTop = heroes.slice(0, 4);

	const promotedHeroList = heroesTop.map((hero) => {
		return (
			<button className="hero-card" key={hero.id}>
				{hero.name}
			</button>
		);
	});

	return <div className="heroes-top">{promotedHeroList}</div>;
}

export default Dashboard;
