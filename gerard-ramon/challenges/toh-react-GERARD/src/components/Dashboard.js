import React, { useState, useEffect } from 'react';
import '../Assets/HeroList.css';
import heroStore from '../stores/heroStore';
import { NavLink } from 'react-router-dom';
import { loadHeroes } from '../actions/heroActions';

function Dashboard() {
	let heroes = [
		{ id: 13, name: 'bombasto' },
		{ id: 14, name: 'celeritas' },
		{ id: 15, name: 'mou' },
		{ id: 16, name: 'xurrat' }
	];

	const [heroList, setHeroList] = useState([]);

	useEffect(() => {
		if (heroList.length === 0) {
			setHeroList(heroes);
		}
	}, [heroList]);

	function changeName() {
		//heroes.push({ name: 'mouQuetal' });
		heroes[1].name = 'mouQuetal';
		setHeroList(heroes);
	}

	return (
		heroList && (
			<ul className="heroDashboard">
				{heroList.map((hero) => (
					<NavLink
						to={`/hero/${hero.id}`}
						key={hero.id}
						className="heroDashboardLink"
					>
						{hero.name}
					</NavLink>
				))}
				<button
					onClick={(event) => {
						changeName();
					}}
				>
					Change Name
				</button>
			</ul>
		)
	);
}

export default Dashboard;
