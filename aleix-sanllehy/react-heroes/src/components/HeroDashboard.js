import React from 'react';
import heroList from '../hero.mock';
import { NavLink } from 'react-router-dom';

function HeroDashboard() {
	const maxHeroes = 4;
	const heroDashboard = heroList.slice(0, maxHeroes).map((hero) => (
		<NavLink
			key={hero.id}
			className="hero-dashboard__elements-anchor name btn btn-secondary btn-lg"
			activeClassName="my-active-class"
			to={'/hero/' + hero.id}
		>
			{hero.name}
		</NavLink>
	));
	return (
		<main className="hero-dashboard">
			<h3 className="hero-title">Top Heroes</h3>
			<div className="hero-dashboard__elements"> {heroDashboard} </div>
		</main>
	);
}

export default HeroDashboard;

//<span className="name btn btn-secondary">{hero.name}</span>
