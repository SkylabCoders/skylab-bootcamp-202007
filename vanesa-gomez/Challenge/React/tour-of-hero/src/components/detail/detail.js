import React from 'react';
import './detail.css';
import { render } from 'react-dom';

function Detail({ heroName, heroId }) {
	let name = heroName;
	let id = heroId;

	return (
		<div>
			<p>{name} details!</p>
			<form className="container">
				<label>
					id:
					<input value={id} type="text" />
				</label>
				<label>
					name:
					<input value={name} type="text" />
				</label>
			</form>
		</div>
	);
}

export default Detail;
