import React from 'react';
import heroData from '../heroData';
import { NavLink } from "react-router-dom";
import '../styles.css';



function HeroList(props) {
    return (
        <div className="containerComponent">
            {renderedHeroes()}
        </div>
    )
}
const renderedHeroes = () => (
    <div className="mainContainer__list">
        <>
            {heroData.map(hero => (
                < NavLink activeClassName="my-active-class" to={link} >
                    <div className="button__list" key={hero.id}>
                        <span className="element__list__id">{hero.id}</span>
                        <span className="element__list__name">{hero.name}</span>
                    </div>
                </NavLink>
            ))}
        </>
    </div >
)

export default HeroList;