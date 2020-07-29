import React from 'react';
import '../components/hero-detail.component.css';

function Detail(props) {
    return (
        <div id="hero-detail__container">
			<h2 className="title-hero"><span id="hero-detail__name"></span> details</h2>
			<p className="id-name">id: <span className="id" id="hero-detail__id"></span></p>
			<label className="id-name" for="heroName">
				name:
				<input className="input" id="hero-detail__name-control" type="text" name="heroName"/>
			</label>
		</div>
    )
}

export default Detail;