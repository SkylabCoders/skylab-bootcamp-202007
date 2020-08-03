import React, { useState, useEffect } from 'react';
import './heroList.css';
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
	//esto significa que cada vez que la longitud de heroes cambie
	function onChange() {
		setHeroes(heroStore.getHeroes());
	}
	function onDelete(event, heroId) {
		event.preventDefault();
		deleteHero(heroId);
	}

	return (
		<>
			{heroes.map((hero) => (
				<li key={hero.id}>
					<Link to={`/hero/${hero.id}`} className="id_box">
						{hero.id}:{hero.name}
					</Link>
					<button
						key={hero.id}
						className="button"
						onClick={(event) => {
							onDelete(event, hero.id);
						}}
					>
						delete
					</button>
				</li>
			))}
		</>
	);
}
export default HeroList;
