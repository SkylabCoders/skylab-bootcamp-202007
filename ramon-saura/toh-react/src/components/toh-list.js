import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroList from '../toh.moks.js';
import heroStore from '../stores/heroStore.js';
import { loadHeros } from '../actions/heroActions.js';

function List() {
	const [heros, setHeros] = useState([]);

	useEffect(() => {
		heroStore.addChangeListener(onChange);
		if (heros.length === 0) {
			loadHeros();
		}
		return () => heroStore.removeChangeListener(onChange);
	}, [heros.length]);

	function onChange() {
		setHeros(heroStore.getHeros());
	}

	return (
		<>
			<ul>
				{heros.map((hero) => (
					<li key={hero.id}>
						<Link to={`/hero/${hero.id}`}>
							{hero.id}
							{hero.name}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}
export default List;
