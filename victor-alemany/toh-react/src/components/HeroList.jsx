import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../components/HeroList.css'
import heroStore from '../stores/heroStore';
import { loadHeroes, deleteHero } from '../actions/heroActions';

function HeroList(props) {
    const [heroes, setHeroes]= useState([]);

    useEffect(()=>{
        heroStore.addChangeListener(onChange);
        if(heroes.length === 0) loadHeroes();
        return ()=> heroStore.removeChangeListener(onChange);
    },[heroes.length]);

    function onChange(){
        setHeroes(heroStore.getHeroes());
    }

    function onDelete(event, heroId) {
		event.preventDefault();
		deleteHero(heroId);
    }
    
    let myList = heroes.map((hero) => (
        <div key={hero.id} className="hero-item">
            <NavLink activeClassName='my-active-class' to={`/hero/${hero.id}`} >
                <span className="id-span">{hero.id}</span><span className="name-span">{hero.name}</span>
                <button onClick={(event) => onDelete(event, hero.id)}>X</button>
            </NavLink>
        </div>
    )
    );
    return (
        <>
            <div>
                <h1>My Heroes</h1>
            </div>

            <div>
                {myList}
            </div>
        </>
    );
}

export default HeroList;