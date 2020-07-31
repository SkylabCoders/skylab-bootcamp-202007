import React from 'react';
import './Details.css';

function Details(props) {
    return (
        <div className='containerDetails'>
        <h2><span id="hero-detail__name"></span> details</h2>
		<p>id: <span id="hero-detail__id"></span></p>
		<label>
			name:
			<input
				id="hero-detail__name-control"
				type="text"
				name="heroName"
			/>
		</label>
        </div>
    )
}

export default Details;