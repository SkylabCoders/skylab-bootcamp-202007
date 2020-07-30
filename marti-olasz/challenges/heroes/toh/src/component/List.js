import React from 'react';

import { NavLink, Route } from 'react-router-dom';

function List({ list }) {
	const outputList = list.map((hero) => {
		return (
			<NavLink className="list__item" to={'/hero/' + hero.id} key={hero.id}>
				<p>{hero.id + '  |  ' + hero.name}</p>
			</NavLink>
		);
	});
	return (
		<div className="list">
			<h1>List!</h1>
			{outputList}
		</div>
	);
}

export default List;
