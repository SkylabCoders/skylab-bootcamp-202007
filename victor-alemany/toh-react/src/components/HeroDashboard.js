import React from 'react';
import { NavLink } from 'react-router-dom';

function HeroDashboard({ heroes }) {
	let myList = heroes.slice(0, 4);
	let listPromoted = myList.map((hero) => (
		<>
		<div key={hero.id} className="hero-item">
			<NavLink activeClassName='my-active-class' to={`/hero/${hero.id}`}>
				<span className="id-span">{hero.id}</span><span className="name-span">{hero.name}</span>
			</NavLink>
		</div>
		</>
	)
	);
	return (<>
		<div>
				<h1>Top Heroes</h1>
        </div>
		<div className="dashboard-item-container">
			{listPromoted}
		</div> 
	</>
	);
}
export default HeroDashboard;