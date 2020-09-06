import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroStore from '../../stores/heroStore';
import { loadHeroes, deleteHero } from '../../actions/heroActions';
import './list.css';

function List() {
	const [heroes, setHeroes] = useState([]);

	useEffect(() => {
		heroStore.addChangeListener(onChange);
		if (heroes.length === 0) loadHeroes();
		return () => heroStore.removeChangeListener(onChange);
	}, [heroes.length]);

	function onChange() {
		setHeroes(heroStore.getHeroes);
	}
	function onDelete(event, heroId) {
		event.preventDefault();
		deleteHero(heroId);
	}
	return (
		<ul>
			{heroes.map((hero) => (
				<li className="list" key={hero.id}>
					<Link className="hero__name" to={`/hero/${hero.id}`}>
						{hero.id}: {hero.name}
					</Link>
					<div className="hero-list__item--delete">
						<button onClick={(event) => onDelete(event, hero._id)}>X</button>
					</div>
				</li>
			))}
		</ul>
	);
}

export default List;
