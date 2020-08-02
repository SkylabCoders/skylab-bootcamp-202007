import React from 'react';

function HeroDetails(props) {
	return (
		<div className="hero__detail--container">
			<h2>
				<span id="hero-detail__name"></span> details
			</h2>
			<p>
				id: <span id="hero-detail__id"></span>
			</p>
			<label for="heroName">
				name:
				<input
					id="hero-detail__name-control"
					type="text"
					name="heroName"
				/>
			</label>
		</div>
	);
}

export default HeroDetails;
