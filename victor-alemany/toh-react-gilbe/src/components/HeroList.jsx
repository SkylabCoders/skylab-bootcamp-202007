import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroStore from '../stores/heroStore';
import { loadHeroes, deleteHero } from '../actions/hero-actions';
import './HeroList.css';

function HeroList() {
	const [heroes, setHeroes] = useState(heroStore.getHeroes());

	useEffect(() => {
		heroStore.addChangeListener(onChange);
		if (heroes.length === 0) loadHeroes();
		return () => heroStore.removeChangeListener(onChange);
	}, [heroes.length]);

	function onChange() {
		setHeroes(heroStore.getHeroes());
	}

	function onDelete(event, heroId) {
		event.preventDefault();
		deleteHero(heroId);
	}

	return (
		<ul>
			{heroes.map((hero) => (
				<li key={hero.id} className="hero-list__item">
					<Link to={`/hero/${hero.id}`}>
						{hero.id} {hero.name} {hero._id}
					</Link>
					<div className="hero-list__item--delete">
						<button onClick={(event) => onDelete(event, hero._id)}>X</button>
					</div>
				</li>
			))}
		</ul>
	);
}

export default HeroList;
