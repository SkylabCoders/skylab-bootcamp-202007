import React from 'react';
import './list.css';
import { NavLink } from 'react-router-dom';

function List({ heroes }) {
	const heroList = heroes.map((hero) => (
		<NavLink to={`/hero/${hero.id}`} key={hero.id} className="list">
			<span className="hero__id"> {hero.id} </span>
			<span className="hero__name">{hero.name}</span>
		</NavLink>
	));
	return (
		<>
			<h2> My Heroes</h2>
			<ul> {heroList} </ul>;
		</>
	);
}

export default List;
