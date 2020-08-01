import React, { useState, useEffect } from 'react';
import '../Assets/HeroList.css';
import heroStore from '../stores/heroStore';
import { NavLink } from 'react-router-dom';
import { loadHeroes } from '../actions/heroActions';

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

	return (
		<ul className="containerList">
			{heroes.map((hero) => (
				<NavLink to={`/hero/${hero.id}`} key={hero.id} className="heroListLink">
					<span className="heroId">{hero.id}</span> {hero.name}
				</NavLink>
			))}
		</ul>
	);
}

export default HeroList;
