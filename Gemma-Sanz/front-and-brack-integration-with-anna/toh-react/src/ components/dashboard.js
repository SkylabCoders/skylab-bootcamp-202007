import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import heroStore from '../stores/heroStore';
import { loadHeroes } from '../actions/heroActions';

function Dashboard(props) {
	const [heroes, setHeroes] = useState([]);
	let actualHeroList = [];

	useEffect(() => {
		heroStore.addChangeListener(onChange);
		if (heroes.length === 0) {
			loadHeroes();
		}
		return () => heroStore.removeChangeListener(onChange);
	}, [heroes.length]);
	function onChange() {
		actualHeroList = setHeroes(heroStore.getHeroes());
	}
	actualHeroList = heroes.map((hero) => {
		const link = '/hero/' + hero.id;
		return (
			<NavLink key={hero.id} to={link}>
				<li className="hero-dashboard__item">
					<span className="hero-list__name">{hero.name}</span>
				</li>
			</NavLink>
		);
	});
	actualHeroList = actualHeroList.slice(0, 4);
	return (
		<div>
			<h2>Top four</h2>
			<ul className="dashboard_s_list row">{actualHeroList}</ul>
		</div>
	);
}
export default Dashboard;
