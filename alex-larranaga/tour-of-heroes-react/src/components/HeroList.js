import React from 'react';
import heroList from '../hero.mock';

function HeroList() {
	console.log(heroList);
	return (
		<div>
			<h1>Herolist</h1>
			<h3>{SimpleList()}</h3>
		</div>
	);
}

const SimpleList = () => (
	<div className="list--container">
		{heroList.map(function (hero) {
			return (
				<a href={`/details/${hero.id}`}>
					<button key={hero.id}>
						{hero.id} {hero.name}
					</button>
				</a>
			);
		})}
	</div>
);

export default HeroList;
