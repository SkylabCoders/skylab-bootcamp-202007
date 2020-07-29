import React from 'react';

function Details({ hero }) {
	return (
		<div>
			<h1>Details</h1>
			<div>
				<p>{hero.name} details!</p>
				<div>id: {hero.id}</div>
				<div>
					name: <input value={hero.name}></input>
				</div>
			</div>
		</div>
	);
}

export default Details;
