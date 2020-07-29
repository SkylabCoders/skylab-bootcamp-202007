import React from 'react';

function List() {
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
	const listItems = heroList.map((hero) => (
		<a href="#" className="d-block" key={hero.name} id={hero.id}>
			{hero.id}
			{hero.name}
		</a>
	));

	return <div>{listItems}</div>;
}
export default List;
