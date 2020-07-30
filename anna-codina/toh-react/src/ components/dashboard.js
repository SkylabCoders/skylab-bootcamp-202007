import React from 'react';
import { NavLink } from 'react-router-dom';

function Dashboard({ heroList }) {
	let actualHeroList = [...heroList];
	actualHeroList = actualHeroList.slice(0, 4);
	actualHeroList = actualHeroList.map((hero) => {
		const link = '/hero/' + hero.id;
		return (
			<NavLink key={hero.id} to={link}>
				<li className="hero-dashboard__item">
					<span className="hero-list__name">{hero.name}</span>
				</li>
			</NavLink>
		);
	});
	return (
		<div>
			<h2>Top four</h2>
			<ul className="dashboard_s_list row">{actualHeroList}</ul>
		</div>
	);
}
export default Dashboard;
