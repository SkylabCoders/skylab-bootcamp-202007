import React from 'react';
import heroList from '../hero.mock';
import { Link } from 'react-router-dom';

function HeroList(props) {
	return (
		<>
			<ul>
				{heroList.map((hero) => (
					<li key={hero.id}>
						<Link to={`/hero/${hero.id}`}>
							{hero.id}: {hero.name}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}

export default HeroList;
