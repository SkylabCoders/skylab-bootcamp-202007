import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
	return (
		<section>
			<h1>Error - 404</h1>
			<p>Nothing to see here</p>
			<Link to="/">Back to Dashboard</Link>
		</section>
	);
}

export default PageNotFound;
