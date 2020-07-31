import React from 'react';
import { Link, Redirect } from 'react-router-dom';

function PageNotFound(props) {
	const condition = false;

	// Programatic redirect
	//props.history.push('/);

	return (
		<section>
			{condition === true && <Redirect to="/" />}
			<h1>Error - 404</h1>
			<p>Nothing to see here !</p>
			<Link to="/">Dashboard</Link>
		</section>
	);
}

export default PageNotFound;
