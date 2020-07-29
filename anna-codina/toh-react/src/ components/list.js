import React from 'react';

function List({ heroes }) {
	debugger;
	const actualHeroList = heroes.map((hero) => (
		<li key={hero.id} className="row">
			<span className="hero-list__id">{hero.id}</span>
			<span className="hero-list__name">{hero.name}</span>
		</li>
	));
	return (
		<div>
			<h2>My heroes</h2>
			<form>
				<label for="hero__filter">search: </label>
				<input
					id="hero-detail__name-control"
					type="text"
					name="hero__filter"
					placeholder="Search by any criteria..."
				/>
			</form>
			<ul className="hero-list">{actualHeroList}</ul>
		</div>
	);
}
export default List;
