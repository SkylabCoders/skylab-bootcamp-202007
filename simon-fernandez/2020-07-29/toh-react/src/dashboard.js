import React from 'react';
import heroList from './hero.mock';
import './dashboard.css';
function Dashboard(goToDetails) {
	const Heroes = heroList.slice(0, 4);
	let renderList = [];
	for (let i = 0; i < Heroes.length; i++) {
		renderList.push(
			<button key={i} onClick={goToDetails}>
				{Heroes[i].name} {Heroes[i].id}
			</button>
		);
	}
	return <div className="row">{renderList}</div>;
}
export default Dashboard;
