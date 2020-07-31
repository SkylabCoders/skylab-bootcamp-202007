import React, { useState, useEffect } from 'react';
import heroData from '../heroData';
import { Link } from "react-router-dom";
import '../styles.css';
import heroStore from '../stores/heroStore';
import { loadHeroes } from '../actions/heroActions';



function HeroList(props) {
    const [heroes, setHeroes] = useState([])

    useEffect(() => {
        heroStore.addChangeListener(onChange);
        if (heroes.length === 0) loadHeroes();
        return () => heroStore.removeChangeListener(onChange);
    }, [heroes.length]);

    function onChange() {
        setHeroes(heroStore.getHeroes());
    }

    return (
        <div className="containerComponent">
            {renderedHeroes()}
        </div>
    )
}
const renderedHeroes = (heroes) => (
    <div className="mainContainer__list">
        <>
            {heroes.map((hero) => (
                < Link key={hero.id} to={`/hero/${hero.id}`}>
                    <div className="button__list" >
                        <span className="element__list__id">{hero.id}</span>
                        <span className="element__list__name">{hero.name}</span>
                    </div>
                </Link>

            ))}
        </>
    </div >
);


export default HeroList;