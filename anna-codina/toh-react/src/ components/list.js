import React from 'react';
import { NavLink } from 'react-router-dom';

function List({ heroList }) {
	const actualHeroList = heroList.map((hero) => {
		const link = '/hero/' + hero.id;
		return (
			<NavLink key={hero.id} to={link}>
				<li className="hero-list__item row">
					<span className="hero-list__id">{hero.id}</span>
					<span className="hero-list__name">{hero.name}</span>
				</li>
			</NavLink>
		);
	});
	return (
		<div>
			<h2>My heroes</h2>
			<form>
				<label htmlFor="hero__filter">search: </label>
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
