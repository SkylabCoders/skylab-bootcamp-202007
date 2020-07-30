import React from 'react';
import '../bootstrap.min.css';
import heroData from '../heroData';

function HeroList(props) {
    return (
        <div className="containerComponent">
            {renderedHeroes()}
        </div>
    )
}
const renderedHeroes = () => (
    <div className="mainContainer__list">
        {heroData.map(hero => (
            <div className="button__list" key={hero.id}>
                <span className="element__list__id">{hero.id}</span>
                <span className="element__list__name">{hero.name}</span>
            </div>
        ))}
    </div>
)

export default HeroList;