import React from 'react';

function Details({ hero }) {
	return (
		<div>
			<h2>{hero.name} details</h2>
			<p>id: {hero.id}</p>
			<label for="heroName">
				name:
				<input id="hero-detail__name-control" type="text" name="heroName" />
			</label>
		</div>
	);
}

export default Details;
