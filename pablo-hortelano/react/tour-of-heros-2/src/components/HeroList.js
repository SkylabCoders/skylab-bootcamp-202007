import React from 'react';
import { NavLink, Router } from 'react-router-dom';

function HeroList({ heroes }) {
	const listOfHeros = heroes.map((hero) => ({
		/* <Router>
			<NavLink to={`/hero/${hero.name}/${hero.id}`} key={hero.id} className="hero__button">
				<span className="hero__id">{hero.id}</span>
				<span className="hero__name">{hero.name}</span>
			</NavLink>
		</Router> */
	}));
	return (
		<>
			<h3>My Heroes</h3>
			<div className="hero__list__container">{listOfHeros}</div>
		</>
	);
}

export default HeroList;
