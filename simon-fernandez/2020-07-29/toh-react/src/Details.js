import React from 'react';
import heroList from './hero.mock';

function Details() {
	const id = parseInt(
		window.location.pathname.slice(6, window.location.pathname.length)
	);
	let heroe = [...heroList];
	heroe = heroe.find((element) => element.id === id);

	return (
		<>
			<h2>{heroe.name} Details</h2>
			<p>id: {heroe.id}</p>
			<input type="text" placeholder={heroe.name}></input>
		</>
	);
}

export default Details;
