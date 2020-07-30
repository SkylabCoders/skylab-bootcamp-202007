import React from 'react';
import heroList from './hero.mock';

function List() {
	const Heroes = heroList;
	let renderList = [];
	for (let i = 0; i < Heroes.length; i++) {
		renderList.push(
			<a key={i} href={'/hero/' + Heroes[i].id}>
				<div className="row list-id">
					<div className="list-id-id">{Heroes[i].id}</div>
					<div className="list-id-name">{Heroes[i].name}</div>
				</div>
			</a>
		);
	}
	return (
		<div className="col">
			<h2>My Heroes</h2>
			{renderList}
		</div>
	);
}
export default List;
