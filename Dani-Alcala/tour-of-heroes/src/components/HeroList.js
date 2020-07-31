import React, { useState, useEffect } from 'react';
import './HeroList.css';
import { Link } from 'react-router-dom';
import { loadHeroes } from '../actions/heroActions';
import heroStore from '../stores/heroStore';

function HeroList() {
	const [heroes, setHeroes] = useState([]);

	useEffect(() => {
		heroStore.addChangeListener(onChange);
		if (heroes.length === 0) loadHeroes();
		return () => heroStore.removeChangeListener(onChange);
	}, [heroes.length]);

	function onChange() {
		setHeroes(heroStore.getHeroes());
	}

	return (
		<>
			<ul>
				{heroes.map((hero) => (
					<li key={hero.id}>
						<Link to={`/hero/${hero.id}`}>
							{hero.id}: {hero.name}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}

// function HeroList({ heroes }) {
// 	return (
// 		<>
// 			<h2>My Heroes</h2>
// 			<div className="hero-list">
// 					{heroes.map((item) => (
// 						<div className="list-items" key={item}>
// 							{item.id} {item.name}
// 						</div>
// 					))}
// 			</div>
// 		</>
// 	);
// }

export default HeroList;
