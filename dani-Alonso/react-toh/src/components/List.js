import React, { useState, useEffect } from 'react';
import heroList from '../Assets/heroMock';
import '../Assets/list.css';
import heroStore from '../stores/heroStore';
import { loadHeroes } from '../actions/heroActions';

function HeroList(props) {
	const [heroes, setHeroes] = useState([]);
	useEffect(() => {
		heroStore.addChangeListener(onChange);
		if (heroes.length === 0) loadHeroes();
		return () => heroStore.removeChangeListener(onChange);
	}, [hero.length]);

	function onChange() {
		setHeroes(heroStore.getHeroes());
	}
	return (
		<>
			<ul>
				{heroList.map((hero) => (
					<li key={hero.id}>
						<Link to={`/hero/${hero.id}`}>
							{hero.id}:{hero.name}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}

export default List;

//function List({ heroList }) {
//	return <ul className="containerList">{heroList}</ul>;
//}
