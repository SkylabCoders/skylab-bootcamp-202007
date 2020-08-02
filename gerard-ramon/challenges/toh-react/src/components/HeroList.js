import React, { useState, useEffect } from 'react';
import '../Assets/HeroList.css';
import heroStore from '../stores/heroStore';
import { NavLink } from 'react-router-dom';
import { loadHeroes, createHero, removeHero } from '../actions/heroActions';

function HeroList(props) {
	const [heroes, setHeroes] = useState([]);

	useEffect(() => {
		heroStore.addChangeListener(onChange);
		if (heroes.length === 0) {
			loadHeroes();
		}
		return () => heroStore.removeChangeListener(onChange);
	}, [heroes.length]);

	function onChange() {
		setHeroes(heroStore.getHeroes());
	}

	function handleCreateHero() {
		createHero();
	}

	function handleUpdateHero() {}

	function handleRemoveHero(id) {
		removeHero(id);
	}

	return (
		<>
			<ul className="containerList">
				{heroes.map((hero) => (
					<li key={hero.id} className="heroContainer">
						<NavLink to={`/hero/${hero.id}`} className="heroListLink">
							<span className="heroId">{hero.id}</span> {hero.name}
						</NavLink>
						<button className="listButton" onClick={handleUpdateHero}>
							Update
						</button>
						<button
							className="listButton"
							onClick={() => handleRemoveHero(hero.id)}
						>
							Delete
						</button>
					</li>
				))}
			</ul>
			<button onClick={handleCreateHero}>Add Hero</button>
		</>
	);
}

export default HeroList;
