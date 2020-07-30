import React from 'react';
import { NavLink, Route } from 'react-router-dom';

function Dashboard({ list }) {
	return (
		<div>
			<h1>Dashboard</h1>
			<div className="dashboard">
				{list.map((hero) => {
					return (
						<NavLink
							className="dashboard__item"
							to={'/hero/' + hero.id}
							key={hero.id}
						>
							<p>{hero.name}</p>
						</NavLink>
					);
				})}
			</div>
		</div>
	);
}

export default Dashboard;
