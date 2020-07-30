import React from 'react';
import '../bootstrap.min.css';

function List({ heroes }) {
	const heroList = heroes.map((hero) => (
		<li key={hero.id}>
			<span className="id btn btn-secondary">{hero.id}</span>
			<span className="name btn btn-light">{hero.name}</span>
		</li>
	));
	return (
		<div>
			<h2>My Heroes</h2>
			<ul> {heroList} </ul>
		</div>
	);
}

export default List;
