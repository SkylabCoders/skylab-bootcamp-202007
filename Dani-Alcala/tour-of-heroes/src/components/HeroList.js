import React from 'react';
import './HeroList.css';

function HeroList({ heroes }) {
	return (
		<>
			<h2>My Heroes</h2>
			<div className="hero-list">
					{heroes.map((item) => (
						<div className="list-items" key={item}>
							{item.id} {item.name}
						</div>
					))}
			</div>
		</>
	);
}

export default HeroList;
