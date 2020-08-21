import React from 'react';
import { Link, Redirect } from 'react-router-dom';

function PageNotFound() {
	const condition = false;
	return (
		<section>
			{condition === true && <Redirect to="/" />}
			<h1>Error - 404</h1>
			<p>Nothing to see here!</p>
			<Link to="/">Go back to Dasboard</Link>
		</section>
	);
}

export default PageNotFound;
