import React from 'react';
import './ToH.css';

function Details() {
	return (
		<div id="hero-detail__container">
			<h2>
				<span id="hero-detail__name"></span> Details!
			</h2>
			<p>
				id: <span id="hero-detail__id"></span>
			</p>
			<label htmlfor="heroName">
				name:
				<input id="hero-detail__name-control" type="text" name="heroName" />
			</label>
		</div>
	);
}
export default Details;
