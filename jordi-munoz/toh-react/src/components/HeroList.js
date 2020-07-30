import React from 'react';
import './HeroList.css';
import { NavLink } from 'react-router-dom';

function HeroList({ heroListArray }) {
    const list = heroListArray.map((hero) => (

        <NavLink
            className='containerList-each'
            key={hero.id}
            activeClassName='my-active-class' to={'/hero/' + hero.id}>
            <span className='idClass'>{hero.id}</span>
            <span>{hero.name}</span>
        </NavLink>

    ))

    return <div className='containerList'>{list}</div>
}

export default HeroList;