import React from 'react';
import heroList from './hero.mock';
import './dashboard.css';

function Dashboard() {
	const Heroes = heroList.slice(0, 4);
	let renderList = [];
	for (let i = 0; i < Heroes.length; i++) {
		renderList.push(
			<a key={i} href={'/hero/' + Heroes[i].id}>
				<div className="dashboard-nav">
					<p>
						{Heroes[i].id} {Heroes[i].name}
					</p>
				</div>
			</a>
		);
	}
	return (
		<>
			<h2 className="text-center">Top Heroes</h2>
			<div className="row space-around">{renderList}</div>
		</>
	);
}
export default Dashboard;
