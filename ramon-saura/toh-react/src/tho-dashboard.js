import React from 'react';
import List from './toh-list';
import tho from './tho';
import Detail from './tho-details';

function thoDashboard() {
	const heroList = [
		{ id: 11, name: 'Dr Nice' },
		{ id: 12, name: 'Narco' },
		{ id: 13, name: 'Bombasto' },
		{ id: 14, name: 'Celeritas' },
		{ id: 15, name: 'Magneta' },
		{ id: 16, name: 'RubberMan' },
		{ id: 17, name: 'Dynama' },
		{ id: 18, name: 'Dr IQ' },
		{ id: 19, name: 'Magma' },
		{ id: 20, name: 'Tornado' }
	];
	const heros = heroList.slice(0, 4);
	const listItems = heros.map((hero) => (
		<a href="#" className="d-block" key={hero.name}>
			{hero.name}
		</a>
	));

	return <div>{listItems}</div>;
}

export default thoDashboard;
