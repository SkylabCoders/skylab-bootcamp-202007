import React from 'react';
import heroList from '../hero.mock';

function HeroList() {
	console.log(heroList);
	return (
		<div>
			<h1>Herolist</h1>
			<h2>{SimpleList()}</h2>
		</div>
	);
}

const SimpleList = () => (
	<ul>
		{heroList.map(function (hero) {
			return (
				<li key={hero.id}>
					{hero.id} {hero.name}
				</li>
			);
		})}
	</ul>
);

export default HeroList;
