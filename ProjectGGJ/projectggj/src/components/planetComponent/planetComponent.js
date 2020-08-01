import React from 'react';
import { Link } from 'react-router-dom';

function PlanetComponent(prop) {
    return (
        <div>
            <p>planetComponent works!</p>
            <Link to='/charList'>Namek</Link>
        </div>

    )
}

export default PlanetComponent;