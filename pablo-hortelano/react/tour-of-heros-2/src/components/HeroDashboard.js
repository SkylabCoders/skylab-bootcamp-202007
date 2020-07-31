import React from 'react';
import heroList from '../hero.mock';
import { Router, NavLink } from 'react-router-dom';

function HeroDashboard({ heroes }) {
	const topHeroesPromotion = heroList.slice(0, 4);

	/* const topHeroes = topHeroesPromotion.map((hero) => (
		<Router>
			<NavLink to={`/hero/${hero.id}`} key={hero.id} className="hero__button">
				{hero.name}
			</NavLink>
		</Router>
	)); */

	return (
		<div className="dashboard__container">
			<p className="dashboard__title">Top Heroes</p>
			<div className="dashboard__buttons__container">{topHeroesPromotion}</div>
		</div>
	);
}

export default HeroDashboard;
