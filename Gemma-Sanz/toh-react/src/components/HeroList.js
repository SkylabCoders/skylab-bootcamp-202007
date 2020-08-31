import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';
import heroStore from '../stores/heroStore';
import { loadHeroes, deleteHero } from '../actions/heroActions';

function HeroList(props) {
	const [heroes, setHeroes] = useState([]);

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
		<div className="mainContainer__list containerComponent">
			<>
				{heroes.map((hero) => (
					<li key={hero.id}>
						<Link key={hero.id} to={`/hero/${hero.id}`}>
							<div className="button__list">
								<span className="element__list__id">{hero.id}</span>
								<span className="element__list__name">{hero.name}</span>
							</div>
						</Link>
						<div className="hero-list__item--delete">
							<button onClick={(event) => onDelete(event, hero.id)}>X</button>
						</div>
					</li>
				))}
			</>
		</div>
	);
}

export default HeroList;
