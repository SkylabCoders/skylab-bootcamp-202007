import React from 'react';
import { Link, Route } from 'react-router-dom';

function Dashboard({ list }) {
	return (
		<div>
			<h1>Dashboard</h1>
			<div className="dashboard">
				{list.map((hero) => {
					return (
						<Link
							className="dashboard__item"
							to={'/hero/' + hero.id}
							key={hero.id}
						>
							<p>{hero.name}</p>
						</Link>
					);
				})}
			</div>
		</div>
	);
}

export default Dashboard;
