import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroStore from '../stores/heroStore';
import { loadHeroes, deleteHero } from '../actions/heroActions';
import './HeroList.css';




function HeroList() {
	const [heroes, setHeroes] = useState([]);

	useEffect(() => {
		heroStore.addChangeListener(onChange);
		if (heroes.length === 0) {
			loadHeroes()
		};
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
						{hero.id}: {hero.name}
					</Link>
					<div className="hero-list__item--delete">
						<button onClick={(event) => onDelete(event, hero.id)}>X</button>
					</div>
				</li>
			))}
		</ul>
	);
}

export default HeroList;





// import React, { useState, useEffect } from 'react';
// import heroList from '../heroData'
// import { Link } from 'react-router-dom'
// import heroStore from '../stores/heroStore';

// function HeroList() {
// 	const [heroes, setHeroes] = useState(heroList);  //se declara una array para hacer destructuring y a useState se le pasa el valor inicial

// 	useEffect(() => {
// 		heroStore.addChangeListener(onChange)
// 		if (heroes.length === 0);
// 		return () => heroStore.removeChangeListener(onChange);
// 	}, [heroes.length]);  //cada vez que la longitud de la lista cambie, run onChange

// 	function onChange() {
// 		setHeroes(heroStore.getHeroes())
// 	}

// 	return (
// 		<div>
// 			<ul>
// 				{heroes.map(hero => (
// 					<li key={hero.id}>
// 						<Link to={`/hero/${hero.id}`}>{hero.id}: {hero.name} </Link>
// 					</li>
// 				))}
// 			</ul>
// 		</div>
// 	);

// }



// export default HeroList;
