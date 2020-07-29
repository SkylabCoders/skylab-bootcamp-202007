import React from 'react';
import heroList from '../hero.mock';

function Dashboard({ onClickHero }) {
	return (
		<div>
			<h1>Dashboard</h1>
			<div>
				<button onClick={onClickHero}>{heroList[0].name}</button>
				<button onClick={onClickHero}>{heroList[1].name}</button>
				<button onClick={onClickHero}>{heroList[2].name}</button>
				<button onClick={onClickHero}>{heroList[3].name}</button>
			</div>
		</div>
	);
}

export default Dashboard;
