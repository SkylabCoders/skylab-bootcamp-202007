import React from 'react';
import { NavLink, Route } from 'react-router-dom';

function Dashboard({ list }) {
	debugger;
	return (
		<div>
			<h1>Dashboard</h1>
			<div>
				{list.map((hero) => {
					return (
						<NavLink to={'/hero/' + hero.id} key={hero.id}>
							<p>{hero.id + '  |  ' + hero.name}</p>
						</NavLink>
					);
				})}
			</div>
		</div>
	);
}

export default Dashboard;
