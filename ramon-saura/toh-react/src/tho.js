import React from 'react';
import List from './toh-list';
import Details from './tho-details';
import Dashboard from './tho-dashboard';

function tho({ main, detail, list, dashboard }) {
	return (
		<main className="col">
			<h1>Tour of Heroes</h1>
			<section className="row">
				<button onClick={detail}>Detail</button>
				<button onClick={list}>Heroes</button>
				<button onClick={dashboard}>Dashboard</button>
			</section>
			<section>
				{main}
				{detail}
				{list}
				{dashboard}
			</section>
		</main>
	);
}
export default tho;
