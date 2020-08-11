import React from 'react';
import { Link, Redirect} from 'react-router-dom';
import * as ROUTES from './../config/routes';

function PageNotFound(){
    const condition = false;
    return (
        <section>
            {condition === true && <Redirect to={ROUTES.HOME}/>}
            <h1>Error 404:</h1>
            <h2>Oops!! Page not found!!!!</h2>
            <Link to={ROUTES.HOME}>Navigate to Home</Link>
        </section>
    )
}

export default PageNotFound;