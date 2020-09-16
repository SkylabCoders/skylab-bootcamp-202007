import React from 'react';
import './dashboard.css';
import { NavLink } from 'react-router-dom';
import heroStore from '../../stores/heroStore';

function Dashboard() {
	const heroes = heroStore.getHeroes();
	const heroesTop = heroes.slice(0, 4);

	const promotedHeroList = heroesTop.map((hero) => {
		return (
			<NavLink to={`/hero/${hero.id}`} className="hero-card" key={hero.id}>
				{hero.name}
			</NavLink>
		);
	});

	return <div className="heroes-top">{promotedHeroList}</div>;
}

export default Dashboard;
