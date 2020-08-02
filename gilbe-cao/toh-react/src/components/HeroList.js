import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroStore from '../stores/heroStore';
import { loadHeroes, deleteHero } from '../actions/heroActions';

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
				<li key={hero.id}>
					<Link to={`/hero/${hero.id}`}>
						{hero.id}: {hero.name}
					</Link>
					<button onClick={(event) => onDelete(event, hero.id)}>X</button>
				</li>
			))}
		</ul>
	);
}

export default HeroList;
