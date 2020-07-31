import React from 'react';
import heroData from '../heroData'
import { Link } from 'react-router-dom'

function HeroList() {
	return (
		<div>
			{renderedHeroes()}
		</div>
	)
}


const renderedHeroes = () => (
	<ul>
		{heroData.map(hero => (
			<li key={hero.id}>
				<Link to={`/hero/${hero.id}`}>{hero.id}: {hero.name} </Link>
			</li>
		))}
	</ul>
);

export default HeroList;
