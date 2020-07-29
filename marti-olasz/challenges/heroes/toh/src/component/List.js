import React from 'react';
import heroList from '../hero.mock';

function List({ onClickHero }) {
	const outputList = [];
	for (let i = 0; i < heroList.length; i++) {
		outputList.push(
			<button onClick={onClickHero} key={heroList[i].id}>
				{heroList[i].id} {heroList[i].name}
			</button>
		);
	}
	return (
		<div>
			<h1>List</h1>
			<div className="flex">{outputList}</div>
		</div>
	);
}

export default List;
