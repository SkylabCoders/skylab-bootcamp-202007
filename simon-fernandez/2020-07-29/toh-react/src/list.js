import React from 'react';
import heroList from './hero.mock';

function List(goToDetails) {
	const Heroes = heroList;
	let renderList = [];
	for (let i = 0; i < Heroes.length; i++) {
		renderList.push(
			<p key={i} onClick={() => goToDetails}>
				{Heroes[i].name} {Heroes[i].id}
			</p>
		);
	}
	return <div>{renderList}</div>;
}
export default List;
