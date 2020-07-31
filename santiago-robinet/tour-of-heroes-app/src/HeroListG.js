import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import heroStore from "../src/stores/heroStore";
import  {loadHeroes}  from "../src/actions/heroActions";


function HeroList() {

    const [heroes, setHeroes] = useState([]);


    const allHeroes = heroes.map((hero) => (
        <NavLink  to={`/hero/${hero.id}`} key={hero.id} className="hero__button"  >
            <span className='hero__id'>{hero.id}</span>
            <span className='hero__name'>{hero.name}</span>
        </NavLink>
    ));

    useEffect(() => {
        heroStore.addChangeListener(onChange);
        if(heroes.length === 0) loadHeroes() ;
        return () => heroStore.removeChangeListener(onChange);
    }, [heroes.length]);

    function onChange(){
        setHeroes(heroStore.getHeroes())
    }

	return(
        <>
            <h2>My Heroes</h2>
            <div className="hero__list__container">{allHeroes}</div>
        </>
	);
}

export default HeroList;
