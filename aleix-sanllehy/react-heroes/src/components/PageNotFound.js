import React from 'react';
import { Link, Redirect } from 'react-router-dom';

function PageNotFound() {
	const condition = false;
	return (
		<section>
			{condition === true && <Redirect to="/" />}
			<h1>HTTP 404 - Not found</h1>
			<p>Nothing to see here...</p>
			<Link className="button-back hero-element" to="/">
				Back
			</Link>
		</section>
	);
}

export default PageNotFound;
