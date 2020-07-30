import React from 'react';
import '../bootstrap.min.css';

function Details({ heroName, heroId }) {
	return (
		<div className="details">
			<h2>
				<span idName="hero-detail__name">Hero</span> details
			</h2>
			<p>
				id: <span idName="hero-detail__id"></span>
			</p>
			<label for="heroName">
				name:
				<input
					idName="hero-detail__name-control"
					type="text"
					name="heroName"
					onchange="heroDetailComponent.nameChange(this.value)"
				/>
			</label>
		</div>
	);
}

export default Details;
