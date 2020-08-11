import React from 'react';
import { Link, Redirect } from 'react-router-dom';


function PageNotFound(props) {
    // const condition = true;
    // props.history.goBack()//hay metodos del BrowserRouter para decir q hacer en ciertos casos
	return (
		<section>
            {/* {condition === true && <Redirect to="/" />} */}
			<h1>Error - 404</h1>
			<p>Nothing to see here</p>
			<Link to="/">Back to Dashboard</Link>
		</section>
	);
}

export default PageNotFound;
