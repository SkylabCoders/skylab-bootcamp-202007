import React from 'react';
import List from './toh-list';
import Details from './tho-details';
import Dashboard from './tho-dashboard';

function tho({ main, detail, list, dashboard }) {
	return (
		<div className="col">
			<h1>Tour of Heroes</h1>
			<div className="row">
				<button onClick={detail}>Detail</button>
				<button onClick={list}>Heroes</button>
				<button onClick={dashboard}>Dashboard</button>
			</div>
			<div>
				{main}
				{detail}
				{list}
				{dashboard}
			</div>
		</div>
	);
}
export default tho;
