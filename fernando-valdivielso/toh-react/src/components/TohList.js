import React from 'react';
import heroData from '../heroData';

function TohList() {
    return (
        <div>
            {renderedHeroes()}
        </div>
    )
}


const renderedHeroes = () => (
    <ul>
        {heroData.map(hero => (
            <li key={hero.id}>{hero.id} {hero.name}</li>
        ))}
    </ul>
);

export default TohList;

