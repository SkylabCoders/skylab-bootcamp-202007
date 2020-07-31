import React from 'react';
import heroData from './hero.mock';
import { NavLink } from 'react-router-dom';

function HeroList() {
	const heroList = heroData.map((hero) => (
		<NavLink
			key={hero.id}
			className="hero-list__elements-anchor name btn btn-secondary"
			activeClassName="my-active-class"
			to={'/hero/' + hero.id}
		>
			<span className="hero-element hero-id">{hero.id}</span>
			<span className="hero-element hero-name">{hero.name}</span>
		</NavLink>
	));
	return (
		<main className="hero-list">
			<h3 className="hero-title">My Heroes</h3>
			<div className="hero-list__elements"> {heroList} </div>
		</main>
	);
}

export default HeroList;

//<span className="id btn btn-secondary">{hero.id}</span>
//<span className="name btn btn-light">{hero.name}</span>
