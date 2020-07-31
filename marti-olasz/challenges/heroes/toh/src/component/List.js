import React, { useState, useEffect } from 'react';

import { Link, Route } from 'react-router-dom';
import heroStore from '../stores/heroStore';
import { loadHeroes } from '../actions/heroActions';

function List() {
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

	const outputList = heroes.map((hero) => {
		return (
			<Link className="list__item" to={'/hero/' + hero.id} key={hero.id}>
				<p>{hero.id + '  |  ' + hero.name}</p>
			</Link>
		);
	});
	return (
		<div className="list">
			<h1>List!</h1>
			{outputList}
		</div>
	);
}

export default List;
