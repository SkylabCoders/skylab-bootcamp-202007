import React from 'react';
import './HeroDashboard.css';
import { NavLink } from 'react-router-dom';

function HeroDashboard({ heroListArray }) {
    const list = heroListArray.slice(0, 4).map((hero) => (

        <NavLink
            className='containerDash-each'
            key={hero.id}
            activeClassName='my-active-class' to={'/hero/' + hero.id}>
            {hero.name}
        </NavLink>

    ))

    return <div className='containerDash'>{list}</div>

}

export default HeroDashboard;