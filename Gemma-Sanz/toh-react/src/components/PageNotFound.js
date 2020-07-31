import React from 'react';
import { Link } from 'react-router-dom'

function PageNotFound() {
    return (
        <section>
            <h2>Ooops!!!Page Not Found</h2>
            <h3>Error 404</h3>
            <p>Nothing to do here!</p>
            <Link to="/">Back to Dashboard</Link>
        </section>
    );
}

export default PageNotFound