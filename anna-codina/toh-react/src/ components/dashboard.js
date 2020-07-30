import React from 'react';

function Dashboard({ heroes }) {
	let actualHeroList = [...heroes];
	actualHeroList = actualHeroList.slice(0, 4);
	actualHeroList = actualHeroList.map((hero) => (
		<li key={hero.id} className="hero-dashboard__item">
			<span className="hero-list__name">{hero.name}</span>
		</li>
	));
	return (
		<div>
			<h2>Top four</h2>
			<ul className="dashboard_s_list row">{actualHeroList}</ul>
		</div>
	);
}
export default Dashboard;
