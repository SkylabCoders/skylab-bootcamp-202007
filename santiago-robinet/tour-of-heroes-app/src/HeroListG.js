import React from 'react';
import { NavLink } from 'react-router-dom';



function HeroList({heroes}) {
    const allHeroes = heroes.map((hero) => (
        <NavLink  to={`/hero/${hero.id}`} key={hero.id} className="hero__button"  >
            <span className='hero__id'>{hero.id}</span>
            <span className='hero__name'>{hero.name}</span>
        </NavLink>
    ))
	return(
        <>
            <h2>My Heroes</h2>
            <div className="hero__list__container">{allHeroes}</div>
        </>
	);
}

export default HeroList;
