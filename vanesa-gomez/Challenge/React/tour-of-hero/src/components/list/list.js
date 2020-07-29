import React from 'react';
import './list.css';

function List({ heroes }) {
	const heroList = heroes.map((hero) => (
		<li className="list" key={hero.id}>
			<span className="id"> {hero.id} </span>
			<span className="name">{hero.name}</span>
		</li>
	));
	return <ul> {heroList} </ul>;
}

export default List;
