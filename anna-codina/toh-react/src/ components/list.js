import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import heroStore from '../stores/heroStore';
import { loadHeroes, deleteHero } from '../actions/heroActions';
import './list.css';

function List(props) {
	const [heroes, setHeroes] = useState([]);
	const actualHeroList = heroes.map((hero) => {
		const link = '/hero/' + hero.id;
		return (
			<NavLink key={hero.id} to={link}>
				<li className="hero-list__item">
					<span className="hero-list__id">{hero.id}</span>
					<span className="hero-list__name">{hero.name}</span>
					<div className="hero-list__item--delete">
						<button onClick={(event) => onDelete(event, hero.id)}>X</button>
					</div>
				</li>
			</NavLink>
		);
	});
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
	function onDelete(event, heroId) {
		event.preventDefault();
		deleteHero(heroId);
	}
	return (
		<div>
			<h2>My heroes</h2>

			<ul className="hero-list">{actualHeroList}</ul>
		</div>
	);
}
export default List;
