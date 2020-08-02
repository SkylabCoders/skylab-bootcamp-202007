import React, { useState, useEffect } from 'react';
import heroList from '../heroData'
import { Link } from 'react-router-dom'
import heroStore from '../stores/heroStore';

function HeroList() {
	const [heroes, setHeroes] = useState(heroList);  //se declara una array para hacer destructuring y a useState se le pasa el valor inicial

	useEffect(() => {
		heroStore.addChangeListener(onChange)
		if (heroes.length === 0);
		return () => heroStore.removeChangeListener(onChange);
	}, [heroes.length]);  //cada vez que la longitud de la lista cambie, run onChange

	function onChange() {
		setHeroes(heroStore.getHeroes())
	}

	return (
		<div>
			<ul>
				{heroes.map(hero => (
					<li key={hero.id}>
						<Link to={`/hero/${hero.id}`}>{hero.id}: {hero.name} </Link>
					</li>
				))}
			</ul>
		</div>
	);

}



export default HeroList;
