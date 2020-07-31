import React from 'react';
import { NavLink } from 'react-router-dom';

function HeroDashboard({ heroes }) {
	let myList = heroes.slice(0, 4);
	let listPromoted = myList.map((hero) => (
		<div key={hero.id}>
			<NavLink activeClassName='my-active-class' to={`/hero/${hero.id}`}>
				<span>{hero.id}</span><span>{hero.name}</span>
			</NavLink>
		</div>
	)
	);
	return (<div>
		{listPromoted}
	</div>
	);
}
export default HeroDashboard;