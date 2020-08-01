import React from 'react';
import { Link } from 'react-router-dom';

function CharListComponent(props) {
    return (
        <div>
            <p>charListComponent works!</p>
            <Link to='/details'>Son Goku</Link>
        </div>
        

    )
}

export default CharListComponent;