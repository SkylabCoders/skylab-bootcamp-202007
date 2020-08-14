import React from 'react';
import { Link, Redirect, BrowserRouter as Router} from 'react-router-dom';

function PageNotFound(){
    const condition = false;
    return (
        <section>
            <Router>
            {condition === true && <Redirect to="/"/>}
            <h1>Error 404:</h1>
            <h2>Oops!! Page not found!!!!</h2>
            <Link to="/">Navigate to Dashboard</Link>
            </Router>
        </section>
    )
}

export default PageNotFound;