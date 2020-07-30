import React from 'react';
import './HeroDashboard.css';
import { NavLink } from 'react-router-dom';

function HeroDashboard({ heroes }) {
	return (
		<>
			<h2>Top Heroes</h2>
			<div className="dashboard">
				{heroes.map((item) => (
					<NavLink
						activeClassName="my-active-class"
						to="/hero/14"
						className="top-heroes"
						key={item}
					>
						{item.name}
					</NavLink>
				))}
			</div>
		</>
	);
}

export default HeroDashboard;