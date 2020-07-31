import React from 'react';
import { Link } from 'react-router-dom';
import HeroList from '../toh.moks';

function thoDashboard() {
	const heros = HeroList.slice(0, 4);
	return (
		<>
			<ul>
				{heros.map((hero) => (
					<li key={hero.id}>
						<Link to={`/hero/${hero.id}`}>
							{hero.id} {hero.name}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}

export default thoDashboard;
