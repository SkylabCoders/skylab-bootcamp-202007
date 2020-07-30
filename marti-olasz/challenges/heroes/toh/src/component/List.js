import React from 'react';

import { NavLink, Route } from 'react-router-dom';

function List({ list }) {
	return list.map((hero) => {
		return (
			<NavLink to={'/hero/' + hero.id} key={hero.id}>
				<p>{hero.id + '  |  ' + hero.name}</p>
			</NavLink>
		);
	});
}

export default List;
