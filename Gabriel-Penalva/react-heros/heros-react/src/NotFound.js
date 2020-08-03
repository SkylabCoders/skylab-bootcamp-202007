import React from 'react';
import { Link, Redirect } from 'react-router-dom';

function PageNotFound(props) {
    const condition = false;//Redireccion Automatica 
    //{condition && <Redirect to='/' />} Forma de REDIRECT, dada una condicion, redirecciona.
    console.log(props);
    return (
        <section>
            {condition && <Redirect to='/' />}
            <h1>
                ERROR - 404
            </h1>
            <p>Nothing to see here!</p>
            <Link to='/'>Navigate to DashBoard</Link>
            <Link to='4' onClick={(event) => {
                event.preventDefault();
                props.history.goBack();
            }} > goBack </Link>
        </section >
    )
}
export default PageNotFound;